import App from 'next/app';
import { ApolloProvider } from '@apollo/client';
import NProgress from 'nprogress';
import Router from 'next/router';
import styled from 'styled-components';
import Page from '../components/Page';
import '../components/styles/nprogress.css';
import withData from '../lib/withData';
import { CartStateProvider } from '../lib/cartState';
import { SizeStateProvider } from '../lib/sizeState';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const InnerStyles = styled.div``;

function MyApp({ Component, pageProps, apollo, user }) {
  return (
    <ApolloProvider client={apollo}>
      <SizeStateProvider>
        <CartStateProvider>
          <InnerStyles>
            <Page>
              <Component {...pageProps} {...user} />
            </Page>
          </InnerStyles>
        </CartStateProvider>
      </SizeStateProvider>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default withData(MyApp);
