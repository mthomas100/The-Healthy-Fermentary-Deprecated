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

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <SizeStateProvider>
        <CartStateProvider>
          <Page>
            <Component {...pageProps} />
          </Page>
        </CartStateProvider>
      </SizeStateProvider>
    </ApolloProvider>
  );
}

export default withData(MyApp);
