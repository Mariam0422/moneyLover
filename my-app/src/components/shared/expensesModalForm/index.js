import { Form, Modal, Button, Input, Select, DatePicker } from "antd";
import { useState } from "react";
import { icomItems } from "../../../constants/iconItems";
import "./index.css";

const ExpensesModalForm = ({ visible, setVisible }) => {
  const [form] = Form.useForm();
  const [date, setDate] = useState("");

  const handleChangeDate = (date, dateString) => {
    setDate(dateString);
  };
  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };
  const handleCreateExpenses = async () => {};
  return (
    <Modal
      width={500}
      title="Add new expenses"
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
      <Form form={form} onFieldsChange={handleCreateExpenses} layout="vertical">
        <Form.Item name="sum" label="Sum">
          <Input />
        </Form.Item>
        <Form.Item name="date" label="Select Date">
          <DatePicker onChange={handleChangeDate} style={{ width: "450px" }} />
        </Form.Item>
    
      <Form.Item name="selectCategory" label="Select Category">
        <Select optionLabelProp="label">
          {icomItems.map((item) => {
            return (
              <Select.Option value={item.value} label={item.label}>
                <div className="iconSelect">
                  <img className="iconImg" src={item.img} alt="item" />{" "}
                  {item.label}
                </div>
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
      </Form>
    </Modal>
  );
};

export default ExpensesModalForm;
