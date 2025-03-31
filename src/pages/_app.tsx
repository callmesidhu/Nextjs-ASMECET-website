// src/pages/_app.tsx
import type { AppProps } from 'next/app';
import '../app/globals.css';
import Navbar from '@/Components/Navbar';


function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Navbar />
    <Component {...pageProps} />
  </>
  )
}

export default MyApp;