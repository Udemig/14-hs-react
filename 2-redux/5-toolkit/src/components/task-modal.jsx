import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { INPUTS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { createTask, updateTask } from "../redux/slices/crudSlice";

const TaskModal = ({ show, handleClose, task }) => {
  const dispatch = useDispatch();

  // form gönderilince çalışacak fonksiyon
  const handleSubmit = (e) => {
    e.preventDefault();

    // inputlardaki değerlere erişelim
    const formData = new FormData(e.target);

    // form inputlarındaki verileri nesne formatında al
    const taskData = Object.fromEntries(formData.entries());

    // eğer güncellenicek task varsa:
    if (task) {
      dispatch(updateTask({ ...taskData, id: task.id }));
    } else {
      // yeni task oluşturan aksiyonu dispatch et
      dispatch(createTask(taskData));
    }

    // modal'ı kapat
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{task ? "Görevi Güncelle" : "Yeni Görev Oluştur"}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {INPUTS.map((item, key) => (
            <Form.Group key={key} className="mb-3">
              <Form.Label>{item.label}</Form.Label>
              <Form.Control name={item.name} type={item.type} defaultValue={task?.[item.name]} />
            </Form.Group>
          ))}

          <Modal.Footer>
            <Button type="button" variant="secondary" onClick={handleClose}>
              Kapat
            </Button>
            <Button type="submit" variant="primary">
              {task ? "Kaydet" : "Oluştur"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default TaskModal;
