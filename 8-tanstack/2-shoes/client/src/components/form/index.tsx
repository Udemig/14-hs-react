import { Formik, Form } from "formik";
import type { FC } from "react";
import type { ProductValues } from "../../types";
import { INPUT_ARRAY } from "../../contants";

interface Props {
  onSubmit?: (data: ProductValues) => void;
  isPending?: boolean;
}

const FormContainer: FC<Props> = ({ onSubmit, isPending }) => {
  const initialValues: ProductValues = {
    name: "",
    price: 0,
    discount: 0,
    color: "",
    size: "",
    description: "",
    isNew: false,
    gender: "men",
  };

  const handleSubmit = (values: ProductValues) => {};

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="flex flex-col gap-5">
        {INPUT_ARRAY.map((input) => (
          <div>INPUT</div>
        ))}

        <button className="bg-my-blue py-1 px-4 rounded-md text-white hover:bg-my-blue/80">Gönder</button>
      </Form>
    </Formik>
  );
};

export default FormContainer;
