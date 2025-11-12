import { render, screen, fireEvent } from "@testing-library/react";
import ButtonClient from "./button";

vi.mock("@/actions/photos-get", () => ({
  default: vi.fn(() => Promise.resolve([])),
}));

test("renderiza o botão e mostra o total inicial", async () => {
  render(<ButtonClient />);

  // total começa em 0
  const total = screen.getByText(/Total 0/i);
  expect(total).toBeInTheDocument();

  // o botão existe e se chama "Add"
  const button = screen.getByRole("button", { name: /add/i });
  expect(button).toBeInTheDocument();

  // o input (textbox) existe
  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();

  // adiciona um item
  fireEvent.change(input, { target: { value: "Nova tarefa" } });
  fireEvent.click(button);

  const buttonUndo = screen.getByRole("button", { name: /feito ou n-feito/i });
  expect(buttonUndo).toBeInTheDocument();
  fireEvent.click(buttonUndo);

  expect(screen.getByText(/Total 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Complete 100/i)).toBeInTheDocument();
});
