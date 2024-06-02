import Clouds from "./Clouds.jsx";
import Temperature from "./Temperature.jsx";
import Miscellaneous from "./Miscellaneous.jsx";

export default function SuccessfulDisplay({ city, country }) {
  return (
    <>
      <h2>
        Current weather for {city}, {country}
      </h2>
      <Clouds />
      <Temperature />
      <Miscellaneous />
    </>
  );
}
