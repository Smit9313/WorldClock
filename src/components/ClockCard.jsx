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
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md w-full sm:w-64 text-center transition duration-300 hover:shadow-lg">
      <h2 className="text-xl font-semibold mb-2">{city}</h2>
      <p className="text-3xl font-mono mt-2">{time}</p>
    </div>
  );
};

export default ClockCard;
