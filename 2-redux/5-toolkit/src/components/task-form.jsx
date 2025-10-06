import { Button, Stack } from "react-bootstrap";
import TaskModal from "./task-modal";
import { useState } from "react";

const TaskForm = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Stack className="align-items-end my-4">
        <Button onClick={() => setShow(true)}>Yeni Görev Ekle</Button>
      </Stack>

      <TaskModal show={show} handleClose={() => setShow(false)} />
    </div>
  );
};

export default TaskForm;
