import type { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
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
				<motion.div
					className='text-[35rem] text-gray-300 tracking-tighter leading-none'
					transition={{ type: 'spring', stiffness: 100 }}
					whileHover={{ letterSpacing: '70px', color: '#000' }}
				>
					<h1>Hey</h1>
					<h1>There</h1>
				</motion.div>
				<div className='bg-black text-center text-gray-400 py-40'>
					<h2 className='mt-8 text-[3rem]'>I'm Liam</h2>
					<p className='mx-20 text-[2rem]'>
            I work as a Software Developer and am based in Switzerland. I mostly
            work with Web applications, and write new or improve existing
            frontends or backends. I don't exclusively work with web
            applications and I've also developed machine learning applications,
            scripts and much more. Next to developing applications, I've also
            done work within the dev-ops sector, including but not limited to
            CI/CD Pipelines, Nginx Servers and Proxies and containerizing
            applications with Docker.
					</p>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Home;
