
import client from "@/src/apollo/client";
import "@/src/styles/styles.scss";
import { ApolloProvider } from "@apollo/client";

import Router from 'next/router';
import NProgress from 'nprogress';

NProgress.configure( { showSpinner: false } );
Router.events.on( 'routeChangeStart', () => NProgress.start() );
Router.events.on( 'routeChangeComplete', () => NProgress.done() );
Router.events.on( 'routeChangeError', () => NProgress.done() );


export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
