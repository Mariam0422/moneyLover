import { createUserWithEmailAndPassword } from "firebase/auth";
import { Form, Input, Typography, Button, notification } from 'antd';
import { useNavigate } from "react-router-dom";
import { auth, doc, db, setDoc } from "../../services/firebase";
import RegisterImg from '../../img/registerImg.jpg'
import AuthWrapper from "../../components/shared/AuthWrapper";
import { ROUTES_CONSTANTS } from "../../routes";
import './index.css';

const Register = () => {
   
    const [form] = Form.useForm();
    const {Title} = Typography;
    const navigate = useNavigate();
   const handleRegister = async(values) => {   
    const { firstName, lastName, email, password} = values;

    try{ 
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const uid = response.user.uid;
        const createDoc = doc(db, "registerUsers", uid);
        setDoc(createDoc, {firstName, lastName, email, password});
        notification.success({
            message: "Success Register",
            description: `Hello ${firstName} ${lastName}`
          })   
          navigate(ROUTES_CONSTANTS.LOGIN)
          form.resetFields();
    }
    catch(error){
        notification.error({
            message: "Error Register",
            description: "oooooops"
          })
    }
 

   }
    return ( 
        <AuthWrapper coverImg={RegisterImg} maxWidth={600}>
        <div className="mainRegister" style={{padding: "20px"}} >
            <Title level={2} style={{textAlign: "center"}}>Register</Title>
         <Form form={form} layout="vertical" onFinish={handleRegister}>
            {console.log(form, "form")}
         <Form.Item name="firstName" label= "First Name">
            <Input/>
         </Form.Item>
         <Form.Item name="lastName" label= "Last Name">
            <Input/>
         </Form.Item>
         <Form.Item name="email" label= "Email">
            <Input/>
         </Form.Item>
         <Form.Item name="password" label= "Password">
            <Input.Password/>
         </Form.Item>
         <Button htmlType="submit">Register</Button>
         </Form>
        </div>
        </AuthWrapper>
     );
}
 
export default Register;