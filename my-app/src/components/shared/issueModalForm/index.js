import { Form, Input, Modal, Button } from "antd";

const IssueModalForm = ({ visible, setVisible }) => {
  const [form] = Form.useForm();

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };

  const handleCreateIssue = () => {
    const { cardNumber, cardValidity, CVV, cardHolder } = form.getFieldsValue();
    
    setVisible(false);
    form.resetFields();
  };

  return (
    <Modal
      width={400}
      title="Add new card"
      open={visible}
      centered
      onOk={form.submit}
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
