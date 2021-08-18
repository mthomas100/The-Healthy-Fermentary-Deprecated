import { ApolloProvider } from '@apollo/client';
import NProgress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';
import '../components/styles/nprogress.css';
import withData from '../lib/withData';
import { CartStateProvider } from '../lib/cartState';
import { CheckoutStateProvider } from '../lib/checkoutState';
import { LayoutStateProvider } from '../lib/layoutState';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <LayoutStateProvider>
        <CartStateProvider>
          <CheckoutStateProvider>
            <Page>
              <Component {...pageProps} />
            </Page>
          </CheckoutStateProvider>
        </CartStateProvider>
      </LayoutStateProvider>
    </ApolloProvider>
  );
}

// MyApp.getInitialProps = async function ({ Component, ctx }) {
//   let pageProps = {};
//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }
//   pageProps.query = ctx.query;
//   return { pageProps };
// };

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export default withData(MyApp);
