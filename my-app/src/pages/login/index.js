import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import { Form, Input } from "antd";
import AuthWrapper from "../../components/shared/AuthWrapper";
import loginImg from "../../img/loginImg.jpg"
import './index.css';
const Login = () => {
    const [form] = Form.useForm();
    const handleLogin = async() => {
      
    }
  return (
  <div className="loginMain">
    <AuthWrapper coverImg={loginImg} maxWidth="500px">
   <h2>Login</h2>
   <Form form={form} onFinish={handleLogin}>
    <Form.Item name="email" label="Email">
        <Input/>
    </Form.Item>
    <Form.Item name="password" label="Password">
        <Input.Password/>
    </Form.Item>
   </Form>
   </AuthWrapper>
    </div>
    );
};

export default Login;
