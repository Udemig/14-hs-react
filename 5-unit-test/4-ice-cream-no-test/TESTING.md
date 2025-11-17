# Testing Guide

This project uses **Vitest** (Jest-compatible) and **React Testing Library** for unit and integration testing.

## 🚀 Quick Start

### Run Tests

```bash
# Run tests in watch mode
npm test

# Run tests once
npm run test:run

# Run tests with UI (if @vitest/ui is installed)
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

## 📁 Test File Structure

- Place test files next to the components they test
- Use `.test.jsx` or `.spec.jsx` extension
- Example: `hero-section.jsx` → `hero-section.test.jsx`

## 🧪 Writing Tests

### Basic Component Test

```javascript
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import MyComponent from "./my-component";

describe("MyComponent", () => {
  it("should render correctly", () => {
    render(<MyComponent />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
```

### Testing Components with Redux

```javascript
import { renderWithProviders } from "../test/test-utils";
import MyConnectedComponent from "./my-connected-component";

describe("MyConnectedComponent", () => {
  it("should access Redux state", () => {
    const preloadedState = {
      basket: {
        items: [],
        totalQuantity: 0,
      },
    };

    renderWithProviders(<MyConnectedComponent />, { preloadedState });
    // Your assertions here
  });
});
```

### Testing User Interactions

```javascript
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Button Component", () => {
  it("should call onClick when clicked", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Click Me</Button>);

    const button = screen.getByRole("button", { name: /click me/i });
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Mocking API Services

```javascript
import { vi, beforeEach } from "vitest";
import iceCreamService from "./services/ice-cream-service";

// Mock the service
vi.mock("./services/ice-cream-service", () => ({
  default: {
    getAllIceCreams: vi.fn(),
  },
}));

describe("Component with API", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should fetch and display data", async () => {
    // Mock the API response
    iceCreamService.getAllIceCreams.mockResolvedValue([
      { id: 1, name: "Vanilla", price: 5 },
    ]);

    // Your test logic here
  });
});
```

## 🎯 Common Queries

### Finding Elements

```javascript
// By text content
screen.getByText("Hello");
screen.getByText(/hello/i); // Case insensitive regex

// By role
screen.getByRole("button", { name: /submit/i });
screen.getByRole("heading", { level: 1 });

// By label
screen.getByLabelText("Username");

// By placeholder
screen.getByPlaceholderText("Enter email");

// By alt text (for images)
screen.getByAltText("Profile picture");

// By test ID (use sparingly)
screen.getByTestId("custom-element");
```

### Query Variants

- `getBy...` - Throws error if not found (use for assertions)
- `queryBy...` - Returns null if not found (use for checking absence)
- `findBy...` - Async, waits for element (use for async rendering)

### Multiple Elements

```javascript
// Get all matching elements
const buttons = screen.getAllByRole("button");
expect(buttons).toHaveLength(3);
```

## 🛠️ Useful Matchers

```javascript
// Presence
expect(element).toBeInTheDocument();
expect(element).not.toBeInTheDocument();

// Visibility
expect(element).toBeVisible();
expect(element).not.toBeVisible();

// Disabled state
expect(button).toBeDisabled();
expect(button).toBeEnabled();

// Text content
expect(element).toHaveTextContent("Hello");

// Attributes
expect(element).toHaveAttribute("href", "/home");

// Classes
expect(element).toHaveClass("btn-primary");

// Form values
expect(input).toHaveValue("John");
```

## 📚 Test Utilities

### Custom Render with Providers

Located in `src/test/test-utils.jsx`:

```javascript
import { renderWithProviders } from "./test/test-utils";

// Renders component with Redux Provider
const { store } = renderWithProviders(<MyComponent />, {
  preloadedState: {
    /* initial state */
  },
});
```

### Setup File

Located in `src/test/setup.js`:

- Extends Vitest matchers with jest-dom
- Auto-cleanup after each test
- Global test configuration

## 📖 Best Practices

1. **Test user behavior, not implementation**

   - Focus on what users see and do
   - Avoid testing internal component state

2. **Use semantic queries**

   - Prefer `getByRole`, `getByLabelText` over `getByTestId`
   - Makes tests more accessible-friendly

3. **Keep tests simple and focused**

   - One concept per test
   - Clear test descriptions

4. **Mock external dependencies**

   - Mock API calls, services, and external libraries
   - Keep tests isolated and fast

5. **Avoid testing implementation details**
   - Don't test component props, state, or internal methods
   - Test the rendered output and user interactions

## 🔗 Resources

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Library Queries Cheatsheet](https://testing-library.com/docs/queries/about)
- [Common Mistakes](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## 📝 Example Tests

Check out these example test files:

- `src/App.test.jsx` - Testing with Redux and API mocks
- `src/features/landing/components/hero-section.test.jsx` - Testing component rendering and interactions
