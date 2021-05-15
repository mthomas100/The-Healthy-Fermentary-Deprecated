import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import axios from 'axios';

const providers = [
  Providers.Google({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  }),
  Providers.Credentials({
    name: 'Credentials',
    credentials: {
      username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
      password: { label: 'Password', type: 'password' },
    },
    authorize: async (credentials) => {
      const user = await axios
        .post('http://localhost:1337/auth/local', {
          identifier: credentials.username,
          password: credentials.password,
        })
        .then((res) => {
          res.data.user.token = res.data.jwt;
          return res.data.user;
        }) // define user as res.data.user (will be referenced in callbacks)
        .catch((error) => {
          console.log('An error occurred:', error);
        });
      if (user) {
        return user;
      }
      return null;
    },
  }),
];

const callbacks = {
  // Getting the JWT token from API response
  async jwt(token, user, account, profile, isNewUser) {
    // WRITE TO TOKEN (from above sources)
    if (user) {
      const provider = account.provider || user.provider || null;
      let response;
      let data;
      switch (provider) {
        case 'google':
          response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/google/callback?access_token=${account?.accessToken}`
          );
          data = await response.json();
          if (data) {
            token.accessToken = data.jwt;
            token.id = data.user._id;
          } else {
            console.log('ERROR No data');
          }
          break;

        case 'local':
          response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/local/callback?access_token=${account?.accessToken}`
          );
          data = await response.json();
          token.accessToken = user.token;
          token.id = user.id;
          break;

        default:
          console.log(`ERROR: Provider value is ${provider}`);
          break;
      }
    }

    return token;
  },

  async session(session, token) {
    // WRITE TO SESSION (from token)
    // console.log(token);

    session.accessToken = token.accessToken;
    session.user.id = token.id;

    return session;
  },
  redirect: async (url, baseUrl) => `${baseUrl}/dashboard`,
};

const sessionPreferences = {
  session: {
    jwt: true,
  },
};

const options = {
  providers,
  callbacks,
  sessionPreferences,
};

export default (req, res) => NextAuth(req, res, options);
