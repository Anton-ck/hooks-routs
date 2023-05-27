import { Section, Container, CountryInfo, Loader } from 'components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from '../service/country-service';

export const Country = () => {
  const { countryId } = useParams();
  console.log(countryId);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        setLoading(true);

        const fetchGetCountries = await fetchCountry(countryId);
        console.log(fetchGetCountries);

        setCountry(fetchGetCountries);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getCountries();
  }, [countryId]);

  const { flag, capital, countryName, id, languages, population } = country;

  return (
    <Section>
      <Container>
        <CountryInfo
          flag={flag}
          capital={capital}
          country={countryName}
          id={id}
          languages={languages}
          population={population}
        />
      </Container>
    </Section>
  );
};
