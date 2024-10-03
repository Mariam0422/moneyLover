import { Form, Input, Modal, Button, notification } from "antd";
import { doc, setDoc, db, updateDoc } from "../../../services/firebase";
const IssueModalForm = ({ visible, setVisible }) => {
  const [form] = Form.useForm();

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };

  const handleCreateIssue = async (value) => {
    const cardId = Date.now().toString();

    const cardData = {
      key: cardId,
      ...value,
    };
    try {
      const createDoc = doc(db, "card", cardId);
      console.log(cardData, "cardData");
      await setDoc(createDoc, cardData);
      notification.success({
        message: "Your card data has been created",
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
        <Form.Item name="cardNumber" label="Card Number">
          <Input placeholder="0000 0000 0000 0000" />
        </Form.Item>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <Form.Item name="cardValidity" label="Card Validity">
            <Input placeholder="07/28" />
          </Form.Item>
          <Form.Item name="CVV" label="CVV">
            <Input placeholder="000" />
          </Form.Item>
        </div>
        <Form.Item name="cardHolder" label="Card Holder">
          <Input placeholder="Hakob Hakobyan" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default IssueModalForm;
