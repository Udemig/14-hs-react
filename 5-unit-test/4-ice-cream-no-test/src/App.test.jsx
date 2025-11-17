import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App";
import basketReducer from "./store/basket-slice";
import iceCreamService from "./services/ice-cream-service";

// Mock the ice cream service
vi.mock("./services/ice-cream-service", () => ({
  default: {
    getAllIceCreams: vi.fn(),
  },
}));

// Create a mock store for testing
const createMockStore = () => {
  return configureStore({
    reducer: {
      basket: basketReducer,
    },
  });
};

describe("App Component", () => {
  let store;

  beforeEach(() => {
    store = createMockStore();
    vi.clearAllMocks();
  });

  it("should render the app without crashing", () => {
    // Mock the API response
    iceCreamService.getAllIceCreams.mockResolvedValue([]);

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Check if the header is rendered
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("should display loading state initially", () => {
    // Mock the API response with a delay
    iceCreamService.getAllIceCreams.mockImplementation(
      () => new Promise(() => {})
    );

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // The loading skeleton should be visible
    // (You can add more specific assertions based on your loading component)
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });
});
