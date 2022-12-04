import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Home: NextPage = () => {
  return (
      <>
        <Head>
          <title>Hey There</title>
        </Head>
        <Navbar currentPage='home' />
        <main>
            <h1>Full Time Software Developer</h1>
            <h1>Hobby Photographer</h1>
        </main>
        <Footer />
      </>
  );
};

export default Home;
