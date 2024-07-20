import { Alert } from "react-bootstrap";
import Animation from "../utils/Animation";

const UsersDash = () => {
  return (
    <Animation>
      <Alert key="primary" variant="primary" className="text-center">
        <p className="h5 fw-bold">جدول المستخدمين</p>
      </Alert>
    </Animation>
  );
};

export default UsersDash;
