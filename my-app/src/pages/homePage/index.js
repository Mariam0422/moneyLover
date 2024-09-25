import { Typography } from "antd";
import one from "../../img/1.svg";
import two from "../../img/2.svg";
import three from "../../img/3.svg";
import four from "../../img/4.svg";
import five from "../../img/5.svg";
import six from "../../img/6.svg";
import "./index.css";

const { Title, Text } = Typography;

const HomePage = () => {
    return ( 
        <div className="description">
        <Title level={2} style={{ color: "white" }}>
          Features our users love
        </Title>
        <div className="section">
          <div className="minSection">
            <img
              src={one}
              alt="one"
              style={{ fontSize: "44px", color: "white" }}
            />
            <Title level={4} style={{ color: "white" }}>
              Multiple devices
            </Title>
            <Text style={{ color: "white" }}>
              Safely synchronize across devices with Bank standard security.
            </Text>
          </div>
          <div className="minSection">
            <img
              src={two}
              alt="two"
              style={{ fontSize: "44px", color: "white" }}
            />
            <Title level={4} style={{ color: "white" }}>
              Recurring transaction
            </Title>
            <Text style={{ color: "white" }}>
              Get notified of recurring bills and transactions before due date.
            </Text>
          </div>
          <div className="minSection">
            <img
              src={three}
              alt="three"
              style={{ fontSize: "44px", color: "white" }}
            />
            <Title level={4} style={{ color: "white" }}>
              Travel mode
            </Title>
            <Text style={{ color: "white" }}>
              All currencies supported with up-to-date exchange rate.
            </Text>
          </div>
          <div className="minSection">
            <img
              src={four}
              alt="four"
              style={{ fontSize: "44px", color: "white" }}
            />
            <Title level={4} style={{ color: "white" }}>
              Saving plan
            </Title>
            <Text style={{ color: "white" }}>
              Keep track on savings process to meet your financial goals.
            </Text>
          </div>
          <div className="minSection">
            <img
              src={five}
              alt="five"
              style={{ fontSize: "44px", color: "white" }}
            />
            <Title level={4} style={{ color: "white" }}>
              Debt and loan
            </Title>
            <Text style={{ color: "white" }}>
              Manage your debts, loans and payment process in one place.
            </Text>
          </div>
          <div className="minSection">
            <img
              src={six}
              alt="six"
              style={{ fontSize: "44px", color: "white" }}
            />
            <Title level={4} style={{ color: "white" }}>
              Scan receipt
            </Title>
            <Text style={{ color: "white" }}>
              Take pictures of your receipts to auto- process and organize them.
            </Text>
          </div>
        </div>
      </div>
     );
}
 
export default HomePage;