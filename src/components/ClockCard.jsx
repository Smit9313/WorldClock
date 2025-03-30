import { useState, useEffect } from "react";

const ClockCard = ({ city, timeZone }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(formatter.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timeZone]);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg w-64 text-center">
      <h2 className="text-xl font-bold">{city}</h2>
      <p className="text-2xl font-mono mt-2">{time}</p>
    </div>
  );
};

export default ClockCard;
