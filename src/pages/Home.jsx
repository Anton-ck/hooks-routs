import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useState, useEffect } from 'react';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [countries, setCounties] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const callCountries = async () => {
      try {
        setisLoading(true);

        const fetchCountries = await getCountries();
        console.log(fetchCountries);

        setCounties(fetchCountries);
      } catch (error) {
        setError(error.message);
      } finally {
        setisLoading(false);
      }
    };
    callCountries();
  }, []);

  return (
    <Section>
      <Container>
        <CountryList countries={countries} />
        {isLoading && <Loader />}
        { error && <Heading>Error</Heading>}
      </Container>
    </Section>
  );
};
