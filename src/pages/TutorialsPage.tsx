import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TtsNavbar from "../components/TtsNavbar";
import { Button } from "react-bootstrap";
import { useState } from "react";
import UsersDash from "../components/UsersDash";
import TutorialsDash from "../components/TutorialsDash";
import Animation from "../utils/Animation";

const TutorialsPage = () => {
  const [currentDash, setCurrentDash] = useState<JSX.Element>(<UsersDash />);
  const [currentDashButton, setCurrentDashButton] =
    useState<string>("المستخدمين");
  const setDashActivity = (btn: string, dash: JSX.Element) => {
    setCurrentDashButton(btn);
    setCurrentDash(dash);
  };
  const dashButtons = [
    {
      title: "المستخدمين",
      onClick: () => setDashActivity("المستخدمين", <UsersDash />),
    },
    {
      title: "الحصص",
      onClick: () => setDashActivity("الحصص", <TutorialsDash />),
    },
  ];

  return (
    <Animation>
      <TtsNavbar />
      <Container>
        <Row className="py-2">
          <Col
            lg={3}
            className="d-flex flex-column bg-secondary-100 rounded-3 p-3 dash-side"
          >
            {dashButtons.map((btn) => (
              <Button
                variant="outline-primary py-3 dash-button"
                className={`w-100 mb-2 ${
                  currentDashButton === btn.title ? "bg-primary text-white" : ""
                }`}
                onClick={() => btn.onClick()}
              >
                {btn.title}
              </Button>
            ))}
          </Col>
          <Col lg={9}>{currentDash}</Col>
        </Row>
      </Container>
    </Animation>
  );
};

export default TutorialsPage;
