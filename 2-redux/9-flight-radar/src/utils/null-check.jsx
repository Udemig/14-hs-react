import { CircleQuestionMark } from "lucide-react";

const c = (value) => {
  return value || <CircleQuestionMark title="Bilinmiyor" className="icon" />;
};

export default c;
