import { Flex, Avatar, Typography, Divider, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { UserOutlined } from "@ant-design/icons";
import { signOut } from "firebase/auth";
import { doc, db, getDoc } from "../../../services/firebase";
import { ROUTES_CONSTANTS } from "../../../routes";
import { auth } from "../../../services/firebase";
import { useEffect, useState } from "react";

const { Text } = Typography;
const UserProfile = () => {
  const navigate = useNavigate();
  const { setIsAuth, userId } = useAuth();
  const [name, setName] = useState({});

  const handleLogout = async () => {
    try {
      signOut(auth);
      navigate(ROUTES_CONSTANTS.LOGIN);
      setIsAuth(false);
    } catch {
      console.log("error");
    }
  };
  const handleCabinet = () => {
    navigate(ROUTES_CONSTANTS.CABINET)
  }
  useEffect(() => {
    const fetchData = async () => {
      const ref = doc(db, "registerUsers", userId);
      const data = await getDoc(ref);
      const userData = data.data();
      const { firstName, lastName } = userData;
      setName({
        firstName: firstName,
        lastName: lastName,
      });
    };
    fetchData();
  }, []);

  const getFirstLetters = (obj) => {
    let result = [];
    for (const key in obj) {
      const firstLetter = obj[key].split("");
     
      result.push(firstLetter[0]);
    }
    return result.join("");
  };

  const items = [
    {
      key: "profile",
      label: (
        <Flex vertical justify="center" align="center">
          <Avatar size={64} icon={<UserOutlined />} />
          <Text>
            {name.firstName} {name.lastName}
          </Text>
          <Divider />
        </Flex>
      ),
    },
    {
      onClick: handleCabinet,
      key: "cabinet",
      label: <Text>Cabinet</Text>,
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
        items,
      }}
    >
      <Avatar size="large" style={{ backgroundColor: "white", color: "black" }}>
  
        {getFirstLetters(name)}
      </Avatar>
    </Dropdown>
  );
};

export default UserProfile;
