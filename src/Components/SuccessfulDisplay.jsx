export default function SuccessfulDisplay({ city, country }) {
  return (
    <>
      <h2>
        Current weather for {city}, {country}
      </h2>
      <span className="clouds">Clouds</span>;
      <span className="temperature">Temperature</span>;
      <span className="misc">Miscellaneous</span>;
    </>
  );
}
