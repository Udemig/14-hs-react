import { IoImageOutline as Image } from "react-icons/io5";
import { MdOutlineGifBox as Gif } from "react-icons/md";
import { FaRegSmile as Smile } from "react-icons/fa";
import Loader from "../loader";

const FormActions = ({ isLoading, handleImageChange, fileInputRef }) => {
  return (
    <div className="flex justify-between">
      <div className="text-tw-blue text-xl flex gap-4">
        <button className="form-icon" type="button">
          <label htmlFor="image">
            <Image />
          </label>
          <input
            ref={fileInputRef}
            onChange={handleImageChange}
            id="image"
            name="image"
            type="file"
            className="hidden"
          />
        </button>
        <button className="form-icon" type="button">
          <Gif />
        </button>
        <button className="form-icon" type="button">
          <Smile />
        </button>
      </div>

      <button disabled={isLoading} className="submit-button" type="submit">
        {isLoading ? <Loader /> : "Gönder"}
      </button>
    </div>
  );
};

export default FormActions;
