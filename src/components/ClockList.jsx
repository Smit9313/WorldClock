import { useState } from "react";
import ClockCard from "./ClockCard";

// Default cities with their time zone names
const citiesData = [
  { city: "Delhi", timeZone: "Asia/Kolkata" },
  { city: "New York", timeZone: "America/New_York" },
  { city: "London", timeZone: "Europe/London" },
];

// List of cities users can add
const allCities = [
  { city: "Tokyo", timeZone: "Asia/Tokyo" },
  { city: "Sydney", timeZone: "Australia/Sydney" },
  { city: "Berlin", timeZone: "Europe/Berlin" },
  { city: "Dubai", timeZone: "Asia/Dubai" },
];

const ClockList = ({ layout }) => {
  const [cities, setCities] = useState(citiesData);

  const addCity = (newCity) => {
    if (!cities.find((c) => c.city === newCity.city)) {
      setCities([...cities, newCity]);
    }
  };

  return (
    <div
      className={`mt-8 gap-6 ${
        layout === "grid"
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          : "flex flex-col items-center"
      }`}
    >
      {cities.map((city) => (
        <ClockCard key={city.city} city={city.city} timeZone={city.timeZone} />
      ))}
      <div className="w-full sm:w-64">
        <select
          onChange={(e) => {
            const selected = allCities.find((c) => c.city === e.target.value);
            if (selected) addCity(selected);
          }}
          className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out"
        >
          <option value="">Add a City</option>
          {allCities
            .filter((c) => !cities.find((city) => city.city === c.city))
            .map((c) => (
              <option key={c.city} value={c.city}>
                {c.city}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default ClockList;
