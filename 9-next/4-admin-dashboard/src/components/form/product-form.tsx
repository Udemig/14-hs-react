import { Product } from "@/types";
import { categories, inputs } from "@/utils/constants";
import { FC } from "react";
import Field from "./field";
import ImagePreview from "./image-preview";

interface Props {
  product: Product | null;
}

const ProductForm: FC<Props> = ({ product }) => {
  return (
    <form>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Sol */}
        <div className="space-y-6">
          {inputs.map((input, key) => (
            <Field key={key} htmlFor={input.name} label={input.label}>
              <input id={input.name} name={input.name} type={input.type} className="input" required />
            </Field>
          ))}

          {/* Kategori */}
          <Field htmlFor="category" label="Kategori">
            <select name="category" id="category" className="input">
              {categories.map((item) => (
                <option value={item.value}>{item.label}</option>
              ))}
            </select>
          </Field>
        </div>

        {/* Sağ */}
        <div className="space-y-6">
          <Field htmlFor="image_url" label="Resim URL">
            <input type="text" name="image_url" id="image_url" className="input" />
          </Field>

          <ImagePreview />

          <Field htmlFor="description" label="Açıklama">
            <textarea name="description" id="description" className="input sm:text-sm md:min-h-55" rows={5}></textarea>
          </Field>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
