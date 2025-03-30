import { useState } from "react";
import ClockList from "./ClockList";
import LayoutToggle from "./LayoutToggle";

const WorldClock = () => {
  const [layout, setLayout] = useState("grid");

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-16 px-6 sm:px-12">
      <h1 className="text-4xl font-extrabold mb-8 text-center">
        🌍 World Clock
      </h1>
      <LayoutToggle layout={layout} setLayout={setLayout} />
      <ClockList layout={layout} />
    </div>
  );
};

export default WorldClock;
