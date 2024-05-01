
import client from "@/src/apollo/client";
import GoogleAnalytics from "@/src/components/GoogleAnalytics";
import "@/src/styles/styles.scss";
import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { SpeedInsights } from '@vercel/speed-insights/next';


import Router from 'next/router';
import NProgress from 'nprogress';

NProgress.configure( { showSpinner: false } );
Router.events.on( 'routeChangeStart', () => NProgress.start() );
Router.events.on( 'routeChangeComplete', () => NProgress.done() );
Router.events.on( 'routeChangeError', () => NProgress.done() );

export default function App({ Component, pageProps }) {
  return (
      <ApolloProvider client={client}>
        <ChakraProvider>
            <GoogleAnalytics />
            <SpeedInsights />
            <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
  );
}
