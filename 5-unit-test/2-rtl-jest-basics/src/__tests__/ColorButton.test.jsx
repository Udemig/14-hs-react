import { fireEvent, render, screen } from "@testing-library/react";
import ColorButton from "../components/color-button";

// Unit test yazmak, yazdığımız kodun algoritmik olarak doğru çalışıp çalışmadığını kontrol etmek için kullanılır
test("Butona tıklama olayında renk ve yazı değişir", () => {
  // test edilecek bileşen render edilir
  render(<ColorButton />);

  // test edilecek buton elementini al
  const button = screen.getByRole("button");

  // -------- tıklamadan önce değişecek değerlerin kontrolü --------
  // butonun arkaplan rengi "red" mı kontrol et
  expect(button).toHaveStyle({ background: "red" });

  // yazı "maviye çevir" mi kontrol et
  expect(button).toHaveTextContent("Maviye Çevir");

  // butona tıkla
  fireEvent.click(button);

  // -------- tıklamadan sonra değişen değerlerin kontrolü --------
  // butonun arkaplan rengi "aqua" mı kontrol et
  expect(button).toHaveStyle({ background: "aqua" });

  // yazı "kırmızıya çevir" mi kontrol et
  expect(button).toHaveTextContent("Kırmızıya Çevir");

  // butona tıkla
  fireEvent.click(button);

  // -------- tıklamadan sonra değişen değerlerin kontrolü --------
  // butonun arkaplan rengi "red" mı kontrol et
  expect(button).toHaveStyle({ background: "red" });

  // yazı "maviye çevir" mi kontrol et
  expect(button).toHaveTextContent("Maviye Çevir");
});
