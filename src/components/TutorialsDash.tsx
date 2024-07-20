import { Alert, Button, Spinner, Table } from "react-bootstrap";
import Animation from "../utils/Animation";
import { fetchTutorials } from "../API/fetchTutorials";
import { useQuery } from "@tanstack/react-query";
import { Tutorial } from "../API/types";

const TutorialsDash = () => {
  const { data, isPending, isError, refetch } = useQuery<Tutorial[], Error>({
    queryKey: ["tutorials"],
    queryFn: fetchTutorials,
  });

  if (isPending) {
    return <Spinner animation="border" role="status"></Spinner>;
  }

  if (isError) {
    return (
      <Alert key="primary" variant="primary" className="text-center">
        <p className="h5 fw-bold px-1">حدث خطأ يرجي المحاولة مرة أخرى</p>
        <Button variant="primary" onClick={() => refetch()}>
          تحديث
        </Button>
      </Alert>
    );
  }

  return (
    <Animation>
      <Alert key="primary" variant="primary" className="text-center">
        <p className="h5 fw-bold">جدول الحصص</p>
      </Alert>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>كود</th>
            <th>عنوان</th>
            <th>مرحلة</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((tutorial, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{tutorial.id}</td>
              <td>{tutorial.title}</td>
              <td>{tutorial.level}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Animation>
  );
};

export default TutorialsDash;
