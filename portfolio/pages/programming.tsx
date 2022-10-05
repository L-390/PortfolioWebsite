import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {motion} from 'framer-motion';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Programming</title>
			</Head>
			<Navbar currentPage='programming'/>
			<main>
				<motion.div className='mb-24 text-[35rem] text-gray-300 tracking-tighter leading-none'
					transition={{type: 'spring', stiffness: 100}}
					whileHover={{letterSpacing: '30px', color: '#000'}}>
					<h1>Coding</h1>
					<h1>Projects</h1>
				</motion.div>
				<div className='pb-12 text-gray-400 bg-black'>
					<h1 className='pt-8 text-center text-[3rem]'>Projects:</h1>
					<p className='pb-4 text-center text-[1.3rem]'>Selection of some of my latest projects.</p>
					<div>
						<div onClick={() => location.replace('')} className='flex justify-center py-4 mx-[20%] h-[13rem] hover:transition-all duration-500 hover:bg-[#0c0c0c] border-gray-900 border-2 border-solid text-center text-[1.4rem] rounded-2xl hover:cursor-pointer'>
							<h1 className='w-[30%] border-r-2 px-4 py-16 border-gray-900 border-solid'>Personal Portfolio 3D Work</h1>
							<p className='w-[70%] px-12 py-12 border-r-2 border-r-gray-900 border-r-solid'>Personal Portfolio Website for my 3D artwork. Written in three.js with Typescript.</p>
							<div className='w-[20%] px-12 py-12'><Link href='https://github.com/L-390/PortfolioWebsite'>Github Repository</Link></div>
						</div>
						<div onClick={() => location.href = '/'} className='flex justify-center py-4 mt-4 mx-[20%] h-[13rem] hover:transition-all duration-500 hover:bg-[#0c0c0c] border-gray-900 border-2 border-solid text-center text-[1.4rem] rounded-2xl hover:cursor-pointer'>
							<h1 className='w-[30%] border-r-2 px-4 py-16 border-gray-900 border-solid'>Personal Portfolio</h1>
							<p className='w-[70%] px-12 py-12 border-r-2 border-r-gray-900 border-r-solid'>Personal Portfolio Website to written in Next.js and Typescript, using Talwind CSS.</p>
							<div className='w-[20%] px-12 py-12'><Link href='https://github.com/L-390/PortfolioWebsite'>Github Repository</Link></div>
						</div>
						<div onClick={() => location.replace('')} className='flex justify-center py-4 mt-4 mx-[20%] h-[13rem] hover:transition-all duration-500 hover:bg-[#0c0c0c] border-gray-900 border-2 border-solid text-center text-[1.4rem] rounded-2xl hover:cursor-pointer'>
							<h1 className='w-[30%] border-r-2 px-4 py-12 border-gray-900 border-solid'>Project Global Head of Software Development</h1>
							<p className='w-[70%] px-12 py-10 border-r-2 border-r-gray-900 border-r-solid'>Volunteering as Head of Software Development at Project Global. Project Global is a small development group, developing Add-Ons for Microsoft flight Simulator 2020.</p>
							<div className='w-[20%] px-12 py-12'><Link href='#'>Company Website</Link></div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Home;
