import Head from 'next/head';

import Main from '../components/Main';

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJS Boilerplate</title>
        <meta name="description" content="Boilerplate for next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Main />
    </div>
  )
}
