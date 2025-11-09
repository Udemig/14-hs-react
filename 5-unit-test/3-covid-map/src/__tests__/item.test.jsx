import { render, screen } from "@testing-library/react";
import Item from "../pages/home/item";

// Normal şartlada bir bileşeni kullanırken hangi propları gönderiyorssak normalde gönderdiğimiz değerlere benzer proplar göndeririz
test("Gönderilen proplar doğru şekilde kullanılır", () => {
  // test edilecek bileşeni renderla
  render(<Item color="text-red-500" text="Toplam Test" value="890M" />);

  // gerekli elementleri çağır
  const icon = screen.getByRole("svg");
  const span = screen.getByRole("span");
  const h2 = screen.getByRole("heading");

  // color prop'u ile gelen değer icon'ın class'ında var mı kontrol et
  expect(icon).toHaveClass("text-red-500");

  // text prop'u ile gelen değer span'a yazıldı mı kontrol et
  expect(span).toHaveTextContent("Toplam Test");

  // value prop'u ile gelen değer h2'ye yazıldı mı kontrol et
  expect(h2).toHaveTextContent("890M");
});
