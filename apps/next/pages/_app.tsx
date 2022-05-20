import { NativeBaseProvider } from 'native-base';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <NativeBaseProvider>
      <Head>
        <title>Welcome to next!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </NativeBaseProvider>
  );
}

export default CustomApp;
