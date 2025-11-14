const CountryRenderer = ({countryCode}: {countryCode: string}) => {
  if (!countryCode) {
    return null;
  }

  return <span className="font-semibold">{countryCode}</span>;
};

export default CountryRenderer;