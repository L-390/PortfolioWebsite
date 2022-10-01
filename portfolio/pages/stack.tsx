import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import {motion} from 'framer-motion';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import TSLogo from '../public/TSLogo.svg';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Hey There</title>
			</Head>
			<Navbar currentPage='stack'/>
			<main>
				<motion.div className='text-[35rem] text-gray-300 tracking-tighter leading-none'
					transition={{type: 'spring', stiffness: 100}}
					whileHover={{letterSpacing: '80px', color: '#000'}}>
					<h1>Tech</h1>
					<h1>Stack</h1>
				</motion.div>
				<div className='mb-12 bg-black text-gray-400'>
					<h1 className='my-4 text-center text-[3rem]'>My Stack:</h1>
					<div className='flex justify-center py-4 mx-[20%] border-gray-900 border-2 border-solid text-center text-[1.4rem] rounded-2xl'>
						<Image src={TSLogo} />
						<h1 className='border-x-2 border-gray-900 border-solid px-6 py-auto'>Typescript</h1>
						<p className='px-6 py-auto'>Used for writing frontend(Next.js) and writing backend(Next.js/Express) Code.</p>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Home;
