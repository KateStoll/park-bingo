"use client";

import { useState } from "react";
import BingoBoard from "./components/BingoBoard";
import ParkMap from "./components/ParkMap";

const parks = [
  { id: "1", name: "Cuyahoga Valley National Park", lat: 41.2808, lng: -81.5678 },
  { id: "2", name: "Hocking Hills State Park", lat: 39.4362, lng: -82.545 },
];

export default function HomePage() {
  const [items] = useState([
    "State Park",
    "National Park",
    "Trailhead",
    "Waterfall",
    "Scenic Overlook",
  ]);

  const [checkedInItems, setCheckedInItems] = useState<string[]>([]);
  const [checkedInParks, setCheckedInParks] = useState<string[]>([]);

  function handleCheckIn(item: string) {
    if (!checkedInItems.includes(item)) {
      setCheckedInItems([...checkedInItems, item]);
    }
  }

  function handleParkCheckIn(parkId: string) {
    if (!checkedInParks.includes(parkId)) {
      setCheckedInParks([...checkedInParks, parkId]);
    }
  }

  return (
    <main>
      <h1>Park Bingo</h1>

      <ParkMap parks={parks} onCheckIn={handleParkCheckIn} />

      <BingoBoard
        items={items}
        checkedInItems={checkedInItems}
        onCheckIn={handleCheckIn}
      />
    </main>
  );
}

