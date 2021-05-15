import { ApolloProvider } from '@apollo/client';
import NProgress from 'nprogress';
import Router from 'next/router';
import { Provider, getSession } from 'next-auth/client';
import { CookiesProvider } from 'react-cookie';
import nookies, { parseCookies } from 'nookies';
import Page from '../components/Page';
import '../components/styles/nprogress.css';
import withData from '../lib/withData';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, apollo, user }) {
  return (
    <ApolloProvider client={apollo}>
      <Provider session={pageProps.session}>
        <Page>
          <Component {...pageProps} {...user} />
        </Page>
      </Provider>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;

  const user = {};

  const { req } = ctx;
  const session = await getSession({ req });
  let context;
  if (session) {
    user.email = session.user.email;
    user.id = session.user.id;
    user.isUser = !!session;
    context = {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    };
  }

  return {
    pageProps: {
      ...pageProps,
      user: user || null,
      context: context || null,
    },
  };
};

export default withData(MyApp);
