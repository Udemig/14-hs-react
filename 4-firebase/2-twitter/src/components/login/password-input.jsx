import { useState } from "react";
import { AiOutlineEye as Show, AiOutlineEyeInvisible as Hide } from "react-icons/ai";

const PasswordInput = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="mt-5">
      <label htmlFor="password">Şifre</label>

      <div className="relative">
        <input type={isShow ? "text" : "password"} name="password" className="input" />

        <button
          type="button"
          onClick={() => setIsShow(!isShow)}
          className="absolute end-3 top-[50%] translate-y-[-40%] text-zinc-700 text-xl cursor-pointer"
        >
          {isShow ? <Hide /> : <Show />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
