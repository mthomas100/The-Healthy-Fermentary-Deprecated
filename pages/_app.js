import NProgress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';
import '../components/styles/nprogress.css';

import { CartStateProvider } from '../lib/cartState';
import { CheckoutStateProvider } from '../lib/checkoutState';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <CartStateProvider>
      <CheckoutStateProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
      </CheckoutStateProvider>
    </CartStateProvider>
  );
}

export default MyApp;
