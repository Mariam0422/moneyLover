import { Form, Modal, Button, Input, Select, DatePicker, notification } from "antd";
import { useState } from "react";
import { icomItems } from "../../../constants/iconItems";
import {db, setDoc, doc, updateDoc, arrayUnion} from "../../../services/firebase";
import { useAuth } from "../../../context/AuthContext";
import "./index.css";

const ExpensesModalForm = ({ visible, setVisible }) => {
  const [form] = Form.useForm();
  const [date, setDate] = useState("");
  const { userId } = useAuth();

  const handleChangeDate = (date, dateString) => {
    setDate(dateString);
  };
  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };
 const handleUpdateUserExpenses = async (buyId, userId) => {
   const docRef = doc(db, "registerUsers", userId);
   await updateDoc(docRef , {
    buy: arrayUnion(buyId)
   })

 }
  const handleCreateExpenses = async (values) => {
    const buyId = Date.now().toString();

    const expensesData = {
      key: buyId,
      ...values,
      date: date,
      userId: userId
    };
    try {
      const createDoc = doc(db, "expensesData", buyId);
      await setDoc(createDoc, expensesData);
      handleUpdateUserExpenses(buyId, userId);
      notification.success({
        message: "Your expenses have been added",
      });
      form.resetFields();
      setVisible(false);
    } catch {
      console.log("error");
      notification.error({
        message: "Error ooops :(",
      });
    }
  };
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
      <Form form={form} onFinish={handleCreateExpenses} layout="vertical">
        <Form.Item name="sum" label="Sum">
          <Input 
           onInput={(e) =>
            (e.target.value = e.target.value.replace(/\D/g, ""))
          }
          />
        </Form.Item>
        <Form.Item name="date" label="Select Date">
          <DatePicker onChange={handleChangeDate} style={{ width: "450px" }} />
        </Form.Item>

        <Form.Item name="category" label="Select Category">
          <Select optionLabelProp="label">
            {icomItems.map((item, index) => {
              return (
                <Select.Option
                  value={item.value}
                  label={item.label}
                  key={index}
                >
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
