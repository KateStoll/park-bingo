import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BingoBoard from "../app/components/BingoBoard";

test("allows user to check in a bingo item", async () => {
  const user = userEvent.setup();

  render(
    <BingoBoard
      items={["Waterfall"]}
      checkedInItems={[]}
      onCheckIn={() => {}}
    />
  );

  const button = screen.getByRole("button", { name: /Waterfall/i });

  await user.click(button);

  expect(button).toBeInTheDocument();
});
