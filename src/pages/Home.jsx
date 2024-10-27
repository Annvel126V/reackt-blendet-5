import {
  Container,
  ExchangeForm,
  ExchangeInfo,
  Heading,
  Loader,
  Section,
} from 'components';
import { useSelector } from 'react-redux';
import {
  selectExchangeInfo,
  selectIsError,
  selectIsLoading,
} from 'reduxState/selectors';

const Home = () => {
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);
  const info = useSelector(selectExchangeInfo);

  return (
    <Section>
      <Container>
        <ExchangeForm />
        {!isError && !info && (
          <Heading info title="What currencies do you want to exchange?🙂" />
        )}
        {info && <ExchangeInfo {...info} />}
        {isError && (
          <Heading
            error
            title="Something went wrong...😐 Check the data validity and try again!"
          />
        )}
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};

export default Home;
