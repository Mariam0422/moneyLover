import { Form, Input, Modal, Button, notification } from "antd";
import { doc, setDoc, db } from "../../../services/firebase";
import { useAuth } from "../../../context/AuthContext";
const IssueModalForm = ({ visible, setVisible }) => {
  const [form] = Form.useForm();
  const { userId } = useAuth();

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };

    const handleCreateIssue = async (value) => {
      const cardData = {
        ...value,
      };
   
      try {
        const userDoc = doc(db, "registerUsers", userId);
        await setDoc(userDoc, { card: cardData }, { merge: true });
        notification.success({
          message: "Your card data has been updated",
        });
      } catch (error) {
        console.log("error", error);
        notification.error({
          message: "Error ooops :(",
        });
      }
      setVisible(false);
      form.resetFields();
    };

    return (
      <Modal
        width={400}
        title="Add new card"
        open={visible}
        centered
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="submit" type="primary" onClick={form.submit}>
            Submit
          </Button>,
        ]}
      >
        <Form layout="vertical" form={form} onFinish={handleCreateIssue}>
          <Form.Item
            name="cardNumber"
            label="Card Number"
            rules={[
              {
                required: true,
                message: "Card number is required!",
              },
              {
                pattern: /^[0-9]{16}$/,
                message: "Card number must be 16 digits!",
              },
            ]}
          >
            <Input
              placeholder="0000 0000 0000 0000"
              maxLength={16}
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/\D/g, ""))
              }
            />
          </Form.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <Form.Item
              name="cardValidity"
              label="Card Validity"
              rules={[
                {
                  required: true,
                  message: "Card validity is required!",
                },
                {
                  pattern: /^(0[1-9]|1[0-2])\/\d{2}$/,
                  message: "Card validity must be in MM/YY format!",
                },
              ]}
            >
              <Input
                placeholder="MM/YY"
                maxLength={5}
                onInput={(e) => {
                  let value = e.target.value.replace(/\D/g, "");
                  if (value.length >= 3) {
                    value = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
                  }
                  e.target.value = value;
                }}
              />
            </Form.Item>
            <Form.Item
              name="CVV"
              label="CVV"
              rules={[
                {
                  required: true,
                  message: "CVV is required!",
                },
              ]}
            >
              <Input
                placeholder="000"
                maxLength={3}
                onInput={(e) =>
                  (e.target.value = e.target.value.replace(/\D/g, ""))
                }
              />
            </Form.Item>
          </div>
          <Form.Item
            name="cardHolder"
            label="Card Holder"
            rules={[
              {
                required: true,
                message: "Card holder name is required!",
              },
            ]}
          >
            <Input placeholder="Hakob Hakobyan" />
          </Form.Item>
        </Form>
      </Modal>
    );
  };

export default IssueModalForm;
