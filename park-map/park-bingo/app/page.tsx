import MapPlaceholder from "./components/MapPlaceholder";
import BingoBoard from "./components/BingoBoard";
import CheckInModal from "./components/CheckInModal";

export default function Home() {
  return (
    <div className="space-y-6">
      <MapPlaceholder />
      <BingoBoard />
      <CheckInModal />
    </div>
  );
}
