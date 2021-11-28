import NProgress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';
import '../components/styles/nprogress.css';
// Tailwind CSS
import 'tailwindcss/tailwind.css';
import '../components/styles/globals.css';
// Context
import { CartStateProvider } from '../lib/cartState';
import { CheckoutStateProvider } from '../lib/checkoutState';
import { LayoutStateProvider } from '../lib/layoutState';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <LayoutStateProvider>
        <CartStateProvider>
          <CheckoutStateProvider>
            <Page>
              <Component {...pageProps} />
            </Page>
          </CheckoutStateProvider>
        </CartStateProvider>
      </LayoutStateProvider>
    </>
  );
}

export default MyApp;
