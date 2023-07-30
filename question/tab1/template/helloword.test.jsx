import App from "./App";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

test("render h1 element", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello world/i);
  expect(linkElement).toBeInTheDocument();
});
