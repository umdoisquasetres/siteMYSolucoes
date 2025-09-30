import type { AppProps } from 'next/app';
import '../index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../App.css';


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;