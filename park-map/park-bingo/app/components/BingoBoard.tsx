"use client";

interface BingoBoardProps {
  items: string[];
  checkedInItems: string[];
  onCheckIn: (item: string) => void;
}

export default function BingoBoard({
  items,
  checkedInItems,
  onCheckIn,
}: BingoBoardProps) {
  return (
    <div>
      <h2>Bingo Board</h2>

      <ul>
        {items.map((item) => {
          const isCheckedIn = checkedInItems.includes(item);

          return (
            <li key={item}>
              <button
                onClick={() => onCheckIn(item)}
                disabled={isCheckedIn}
              >
                {item} {isCheckedIn ? "✅" : ""}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
