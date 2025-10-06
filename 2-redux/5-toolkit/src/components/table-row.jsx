import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/slices/crudSlice";
import { useState } from "react";
import TaskModal from "./task-modal";

const TableRow = ({ task }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  // sil butonuna tıklanınca
  const handleDelete = () => {
    // kullanıcının onayını al
    if (!confirm("Silmek istediğinizden emin misiniz?")) return;

    // reducer'a haber ver
    dispatch(deleteTask(task.id));
  };

  return (
    <>
      <tr>
        <td>{task.title}</td>
        <td>{task.author}</td>
        <td>{task.assigned}</td>
        <td>
          {new Date(task.end_date).toLocaleDateString("tr", {
            day: "2-digit",
            month: "short",
          })}
        </td>

        <td className="d-flex gap-2">
          <Button size="sm" onClick={() => setShow(true)}>
            Dzn
          </Button>

          <Button size="sm" variant="danger" onClick={handleDelete}>
            Sil
          </Button>
        </td>
      </tr>

      <TaskModal show={show} task={task} handleClose={() => setShow(false)} />
    </>
  );
};

export default TableRow;
