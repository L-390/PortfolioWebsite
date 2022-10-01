import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import {motion} from 'framer-motion';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import portrait from '../public/portrait.jpg';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Hey There</title>
			</Head>
			<Navbar currentPage='programming'/>
			<main>
			</main>
			<Footer />
		</>
	);
};

export default Home;
