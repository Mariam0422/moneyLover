import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import { Button, Form, Input, notification, Typography } from "antd";
import AuthWrapper from "../../components/shared/AuthWrapper";
import loginImg from "../../img/loginImg.jpg";
import { Link } from "react-router-dom";
import "./index.css";
const Login = () => {
  const [form] = Form.useForm();
  const handleLogin = async (values) => {
    const { email, password } = values;
    try {
      const resp = await signInWithEmailAndPassword(auth, email, password);
      console.log(resp);

      notification.success({
        message: "Login successful",
      });
      form.resetFields();
    } catch (error) {
      console.log(error);
      notification.error({
        message: "Incorrect login details",
      });
    }
  };
  return (
    <div className="loginMain">
      <AuthWrapper coverImg={loginImg} maxWidth="600px">
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <div className="formLogin">
          <Form form={form} onFinish={handleLogin}>
            <Form.Item name="email" label="Email">
              <Input style={{ width: "300px" }} />
            </Form.Item>
            <Form.Item name="password" label="Password">
              <Input.Password style={{ width: "300px" }} />
            </Form.Item>
            <Form.Item>
              <Typography.Text underline>
                <Link to="/register">Create Account</Link>
              </Typography.Text>
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit">Log in</Button>
            </Form.Item>
          </Form>
        </div>
      </AuthWrapper>
    </div>
  );
};

export default Login;
