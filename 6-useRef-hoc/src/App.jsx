import Counter from "./ref-components/Counter";
import Input from "./ref-components/Input";
import Scroll from "./ref-components/Scroll";
import Timer from "./ref-components/Timer";
import Modal from "./hoc-components/Modal";
import ConfirmModal from "./hoc-components/ConfirmModal";
import FormModal from "./hoc-components/FormModal";
import Field from "./hoc-components/Field";

const App = () => {
  return (
    <div>
      {/* <ConfirmModal />

      <FormModal /> */}

      {/* <Modal submit="onayla">
        <h2>Silmek istediğinizden emin misiniz?</h2>
      </Modal>

      <Modal submit="oluştur">
        <label>Email</label>
        <input type="text" className="form-control" />
      </Modal> */}

      <form>
        <Field label="İsim">
          <input type="text" className="form-control" />
        </Field>

        <Field label="Kendini Tanıt">
          <textarea className="form-control"></textarea>
        </Field>

        <Field label="Cinsiyet">
          <select className="form-select">
            <option>Erkek</option>
            <option>Kadın</option>
          </select>
        </Field>

        <Field label="Şifre">
          <input type="password" className="form-control" />
        </Field>
      </form>

      <Timer />

      <Counter />

      <Input />

      <Scroll />
    </div>
  );
};

export default App;
