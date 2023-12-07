import { render, screen } from "@testing-library/react";
import Cadastro from "./Cadastro";

test("renders learn react link", () => {
  render(<Cadastro />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
