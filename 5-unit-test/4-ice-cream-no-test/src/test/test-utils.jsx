import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../store/basket-slice";

/**
 * Creates a mock Redux store for testing
 * @param {Object} preloadedState - Initial state for the store
 * @returns {Object} Redux store
 */
export const createMockStore = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      basket: basketReducer,
    },
    preloadedState,
  });
};

/**
 * Custom render function that wraps components with Redux Provider
 * @param {ReactElement} ui - Component to render
 * @param {Object} options - Render options
 * @param {Object} options.preloadedState - Initial Redux state
 * @param {Object} options.store - Custom store instance
 * @param {Object} options.renderOptions - Additional render options
 * @returns {Object} Render result with store
 */
export const renderWithProviders = (
  ui,
  {
    preloadedState = {},
    store = createMockStore(preloadedState),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

// Re-export everything from React Testing Library
export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
