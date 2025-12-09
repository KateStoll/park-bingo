"use client";

export default function BingoBoard() {
  const items = ["Trail", "Bird", "Water", "Flower", "Hill", "Tree", "Rock", "Bug", "Creek"];

  return (
    <div className="grid grid-cols-3 gap-2 mt-4">
      {items.map((item) => (
        <div
          key={item}
          className="p-4 bg-white border border-gray-300 rounded text-center text-sm shadow-sm"
        >
          {item}
        </div>
      ))}
    </div>
  );
}
