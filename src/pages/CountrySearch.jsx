import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useState, useEffect } from 'react';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [query, setQuery] = useState('');
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    const getCountries = async () => {
      try {
        setLoading(true);

        const fetchGetCountries = await fetchByRegion(query);
        console.log(fetchGetCountries);

        // setCountry(fetchGetCountries);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getCountries();
  }, [query]);

  console.log(query);
  return (
    <Section>
      <Container>
        <SearchForm data={setQuery} />
      </Container>
    </Section>
  );
};
