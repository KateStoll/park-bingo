"use client";

import { useState } from "react";
import BingoBoard from "./components/BingoBoard";

export default function HomePage() {
  const [items] = useState([
    "State Park",
    "National Park",
    "Trailhead",
    "Waterfall",
    "Scenic Overlook"
  ]);

  const [checkedInItems, setCheckedInItems] = useState<string[]>([]);

  function handleCheckIn(item: string) {
    if (!checkedInItems.includes(item)) {
      setCheckedInItems([...checkedInItems, item]);
    }
  }

  return (
    <main>
      <h1>Park Bingo</h1>

      <BingoBoard
        items={items}
        checkedInItems={checkedInItems}
        onCheckIn={handleCheckIn}
      />
    </main>
  );
}
