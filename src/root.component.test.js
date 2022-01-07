import { render } from "@testing-library/react";
import Root from "./root.component";

describe("Root component", () => {
  it("should be in the document", () => {
    const { getByText } = render(<Root name="root" />);
    expect(getByText(/Iniciar sesión/i)).toBeInTheDocument();
  });
});
