import getUnicodeFlagIcon from 'country-flag-icons/unicode'

const CountryRenderer = ({countryCode}: {countryCode: string}) => {
  if (!countryCode) {
    return null;
  }

  return <span className="font-semibold">{countryCode} {getUnicodeFlagIcon(countryCode)}</span>;
};

export default CountryRenderer;