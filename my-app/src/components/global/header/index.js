import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { Layout, Button } from "antd";
import logo from "../../../img/logo.jpg";
import "./index.css";
const Header = () => {
  return (
    <Layout.Header>
      <div className="mainHeader">
        <Link to="/">
        <img src={logo} alt="logo" className="img" />
        </Link>
        <Link to="/login">
          <Button>Login</Button>
        </Link>

      </div>
      <Outlet />
    </Layout.Header>
  );
};

export default Header;
