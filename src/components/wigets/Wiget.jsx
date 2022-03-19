import "./wiget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Wiget = ({ type }) => {
  let data;
  let mouny = 100;
  let deff = 20;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        ismany: false,
        link: "See all users",
        icon: (
          <PersonOutlineIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        ismany: false,
        link: "See all orders",
        icon: <ShoppingCartOutlinedIcon className="icon" style={{
            backgroundColor: "rgba(218, 165, 32, 0.2)",
            color: "goldenrod",
          }}/>,
      };
      break;
    case "earnings":
      data = {
        title: "EARNINGS",
        ismany: true,
        link: "View net earnings",
        icon: <MonetizationOnOutlinedIcon className="icon" style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }} />,
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        ismany: true,
        link: "See details",
        icon: <AccountBalanceWalletOutlinedIcon className="icon" style={{
            backgroundColor: "rgba(128, 0, 128, 0.2)",
            color: "purple",
          }}/>,
      };
      break;

    default:
      break;
  }
  return (
    <div className="wiget">
      <div className="left">
        <span className="users">{data.title}</span>
        <span className="counter">
          {data.ismany && "$"} {mouny}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="persentage positive">
          <KeyboardArrowUpIcon />
          {deff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Wiget;
