import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HeroSection from "./hero-section";

describe("HeroSection Component", () => {
  const mockHero = {
    highlight: "New Arrival",
    titlePrimary: "Delicious",
    titleSecondary: "Ice Cream",
    description: "The best ice cream in town",
    supportingText: "Made with love and care",
    primaryCta: "Order Now",
    secondaryCta: "Learn More",
  };

  const mockTestimonial = {
    name: "John Doe",
    role: "Happy Customer",
    avatarUrl: "https://example.com/avatar.jpg",
    quote: "Best ice cream I've ever had!",
    rating: 5,
  };

  it("should render hero content correctly", () => {
    render(<HeroSection hero={mockHero} testimonial={null} />);

    // Check if main content is rendered
    expect(screen.getByText("New Arrival")).toBeInTheDocument();
    expect(screen.getByText("Delicious")).toBeInTheDocument();
    expect(screen.getByText("Ice Cream")).toBeInTheDocument();
    expect(screen.getByText("The best ice cream in town")).toBeInTheDocument();
    expect(screen.getByText("Made with love and care")).toBeInTheDocument();
  });

  it("should render CTA buttons", () => {
    render(<HeroSection hero={mockHero} testimonial={null} />);

    // Check if buttons are rendered
    const primaryButton = screen.getByRole("button", { name: /Order Now/i });
    const secondaryButton = screen.getByRole("button", { name: /Learn More/i });

    expect(primaryButton).toBeInTheDocument();
    expect(secondaryButton).toBeInTheDocument();
  });

  it("should render testimonial when provided", () => {
    render(<HeroSection hero={mockHero} testimonial={mockTestimonial} />);

    // Check if testimonial content is rendered
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Happy Customer")).toBeInTheDocument();
    expect(
      screen.getByText(/Best ice cream I've ever had!/i)
    ).toBeInTheDocument();
    expect(screen.getByAltText("John Doe avatarı")).toBeInTheDocument();
  });

  it("should not render testimonial when not provided", () => {
    render(<HeroSection hero={mockHero} testimonial={null} />);

    // Testimonial should not be present
    expect(screen.queryByText("John Doe")).not.toBeInTheDocument();
  });

  it("should render correct number of stars for rating", () => {
    const { container } = render(
      <HeroSection hero={mockHero} testimonial={mockTestimonial} />
    );

    // Check if correct number of stars are rendered
    // lucide-react renders SVG icons with the "lucide" class
    const stars = container.querySelectorAll(".lucide-star");
    expect(stars.length).toBe(5);
  });

  it("should return null when hero is not provided", () => {
    const { container } = render(
      <HeroSection hero={null} testimonial={null} />
    );

    // Component should render nothing
    expect(container.firstChild).toBeNull();
  });

  it("should handle button clicks", async () => {
    const user = userEvent.setup();
    render(<HeroSection hero={mockHero} testimonial={null} />);

    const primaryButton = screen.getByRole("button", { name: /Order Now/i });
    const secondaryButton = screen.getByRole("button", { name: /Learn More/i });

    // Buttons should be clickable without errors
    await user.click(primaryButton);
    await user.click(secondaryButton);

    // Since handlers are empty, we just verify no errors occur
    expect(primaryButton).toBeInTheDocument();
    expect(secondaryButton).toBeInTheDocument();
  });
});
