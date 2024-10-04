import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import { Button, Form, Input, notification, Typography } from "antd";
import AuthWrapper from "../../components/shared/AuthWrapper";
import loginImg from "../../img/loginImg.jpg";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES_CONSTANTS } from "../../routes";
import { useAuth } from "../../context/AuthContext";
import "./index.css";
const Login = () => {
  const navigate = useNavigate();
  const { setIsAuth, setUserId } = useAuth();
  const [form] = Form.useForm();
  const handleLogin = async (values) => {
    const { email, password } = values;
    try {
      const resp = await signInWithEmailAndPassword(auth, email, password);
      console.log(resp.user.uid);
      setUserId(resp.user.uid);
      notification.success({
        message: "Login successful",
      });
      setIsAuth(true);
      navigate(ROUTES_CONSTANTS.CABINET);
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
        <div className="formLogin" style={{ padding: "10px" }}>
          <Form form={form} onFinish={handleLogin} layout="vertical">
            <Form.Item name="email" label="Email">
              <Input />
            </Form.Item>
            <Form.Item name="password" label="Password">
              <Input.Password />
            </Form.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Form.Item>
                <Typography.Text underline>
                  <Link to="/register">Create Account</Link>
                </Typography.Text>
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit">Log in</Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </AuthWrapper>
    </div>
  );
};

export default Login;
