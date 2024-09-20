import { createUserWithEmailAndPassword } from "firebase/auth";
import { Form, Input, Typography, Button } from 'antd';
import './index.css';
const Register = () => {

    const {Title} = Typography;
    return ( 
        <div className="mainRegister" >
            <Title level={2} style={{textAlign: "center"}}>Register</Title>
         <Form layout="vertical">
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
         <Button>Register</Button>
         </Form>
        </div>
     );
}
 
export default Register;