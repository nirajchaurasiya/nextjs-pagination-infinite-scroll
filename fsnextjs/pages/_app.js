import React, { useEffect, useRef } from 'react'

import '../styles/globals.css'
import Link from 'next/link'
import { useRouter } from 'next/router';
import LoadingBar from 'react-top-loading-bar';
function MyApp({ Component, pageProps }) {

  const loadingRef = useRef(null);
  const router = useRouter();

  useEffect(() => {

    const handleRouteChange = (url, { shallow }) => {

      //Start the progress bar because the route is changed !
      try {
        loadingRef.current.continuousStart();
      }
      catch (err) {

      }

    }

    const handleRouteComplete = (url, obj) => {

      //Make the progress bar 100% because our route load is completed !
      try {
        loadingRef.current.complete();
      }
      catch (err) {

      }
    }

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteComplete)

    return () => {

      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteComplete);

      //Complete the progress if component unmounted !
      try {
        loadingRef.current.complete();
      }
      catch (err) {

      }

    }


  }, [router.events]);
  return (
    <>
      <LoadingBar color='white' height={3} ref={loadingRef} />
      <div className='sticky top-0 text-center bg-black text-white font-extrabold text-xs'>
        <Link href="/">
          Go To Home
        </Link>
      </div>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
