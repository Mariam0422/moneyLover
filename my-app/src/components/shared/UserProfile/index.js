import { Flex, Avatar, Typography, Divider, Dropdown } from "antd";
import { useAuth } from "../../../context/AuthContext";
import { UserOutlined } from "@ant-design/icons";
import { signOut } from "firebase/auth";
import { auth } from "../../../services/firebase";

const { Text } = Typography;
const UserProfile = () => {
  const { setIsAuth } = useAuth();

  const handleLogout = async () => {
    try {
      signOut(auth);
      setIsAuth(false);
    } catch {
      console.log("error");
    }
  };

  const items = [
    {
      key: "profile",
      label: (
        <Flex vertical justify="center" align="center">
          <Avatar size={64} icon={<UserOutlined />} />

          <Text>Mariam Hakobyan</Text>

          <Divider />
        </Flex>
      ),
    },
    {
      onClick: handleLogout,
      key: "logout",
      label: <Text>Logout</Text>,
    },
  ];

  return (
    <Dropdown 
        menu={{
            items
        }}
    >
        <Avatar size="large" style={{backgroundColor: "white", color: "black"}}>
            MH
        </Avatar>
    </Dropdown>
);
};

export default UserProfile;
