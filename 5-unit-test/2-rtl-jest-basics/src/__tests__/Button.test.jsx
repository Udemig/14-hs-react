import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../components/Button";

describe("Button Component", () => {
  // Test 1: Component'in render edilmesi
  test("renders button with default label", () => {
    render(<Button />);
    const buttonElement = screen.getByRole("button", { name: /tıkla/i });
    expect(buttonElement).toBeInTheDocument();
  });

  // Test 2: Custom label ile render
  test("renders button with custom label", () => {
    render(<Button label="Gönder" />);
    const buttonElement = screen.getByRole("button", { name: /gönder/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("Gönder");
  });

  // Test 3: onClick event'inin çalışması
  test("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="Test" onClick={handleClick} />);

    const buttonElement = screen.getByRole("button", { name: /test/i });
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Test 4: Disabled state kontrolü
  test("does not call onClick when button is disabled", () => {
    const handleClick = jest.fn();
    render(<Button label="Test" onClick={handleClick} disabled={true} />);

    const buttonElement = screen.getByRole("button", { name: /test/i });
    expect(buttonElement).toBeDisabled();

    fireEvent.click(buttonElement);
    expect(handleClick).not.toHaveBeenCalled();
  });

  // Test 5: Primary variant class kontrolü
  test("renders with primary variant class", () => {
    render(<Button variant="primary" />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass("btn-primary");
  });

  // Test 6: Multiple clicks
  test("handles multiple clicks correctly", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} />);

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(3);
  });

  // Test 7: Accessibility - aria-label kontrolü
  test("has correct aria-label attribute", () => {
    const label = "Önemli Buton";
    render(<Button label={label} />);

    const buttonElement = screen.getByRole("button", { name: label });
    expect(buttonElement).toHaveAttribute("aria-label", label);
  });

  // Test 8: Snapshot test
  test("matches snapshot", () => {
    const { container } = render(<Button label="Snapshot Test" variant="primary" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
