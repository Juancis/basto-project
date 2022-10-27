import Nav from "react-bootstrap/Nav";
import bastoLogo from "../../assets/basto-logo.png";
import { IoMdNotifications } from "react-icons/Io";
import { MdLogout } from "react-icons/Md";
import { Button } from "react-bootstrap";

function ListExample() {
  return (
    <Nav
      defaultActiveKey="/home"
      as="ul"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#cdcfb7",
        paddingBottom: "5px",
        marginBottom: "10px",
      }}
      className="px-5"
    >
      <Nav.Item as="li">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <img
              src={`${bastoLogo}`}
              style={{ height: "4rem", paddingBottom: "5px" }}
            />
          </div>
        </div>
      </Nav.Item>
      <Nav.Item as="li">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginRight: 10,
          }}
        >
          <div>
            <IoMdNotifications style={{ fontSize: 30, cursor: "pointer" }} />
            <Button variant="primary" size="sm" fontSize="10px">
              {" "}
              0{" "}
            </Button>
          </div>
          <div>
            <MdLogout style={{ fontSize: 30, cursor: "pointer" }} />
          </div>
        </div>
      </Nav.Item>
    </Nav>
  );
}

export default ListExample;
