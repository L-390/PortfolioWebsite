import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import {motion} from 'framer-motion';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import TSLogo from '../public/Logos/TSLogo.svg';
import NextLogo from '../public/Logos/NextjsWhite.png';
import CSLogo from '../public/Logos/CS.svg';
import MongoDBLogo from '../public/Logos/MongodbWhite.svg';
import DockerLogo from '../public/Logos/DockerWhite.png';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Tech Stack</title>
			</Head>
			<Navbar currentPage='stack'/>
			<main>
				<motion.div className='text-[35rem] text-gray-300 tracking-tighter leading-none'
					transition={{type: 'spring', stiffness: 100}}
					whileHover={{letterSpacing: '70px', color: '#000'}}>
					<h1>Tech</h1>
					<h1>Stack</h1>
				</motion.div>
				<div className='pb-12 bg-black text-gray-400'>
					<h1 className='pt-8 text-center text-[3rem]'>Stack:</h1>
					<p className='pb-4 text-center text-[1.3rem]'>Some of the technologies I have experience using and I enjoy working with.</p>
					<div>
						<div className='flex justify-center py-4 mx-[20%] h-[13rem] hover:transition-all duration-500 hover:bg-[#0c0c0c] border-gray-900 border-2 border-solid text-center text-[1.4rem] rounded-2xl'>
							<div className='w-[20%] h-[10rem] px-8 py-6'><Image src={TSLogo} /></div>
							<h1 className='w-[20%] border-x-2 px-12 py-16 border-gray-900 border-solid'>Typescript</h1>
							<p className='w-[70%] px-12 py-16'>Used for writing frontend(Next.js) and writing backend(Next.js/Express) Code.</p>
						</div>
						<div className='flex justify-center py-4 mx-[20%] h-[13rem] mt-4 hover:transition-all duration-500 hover:bg-[#0c0c0c] border-gray-900 border-2 border-solid text-center text-[1.4rem] rounded-2xl'>
							<div className='w-[20%] px-8 py-4'><Image src={NextLogo} /></div>
							<h1 className='w-[20%] border-x-2 px-12 py-16 border-gray-900 border-solid'>Next.js</h1>
							<p className='w-[70%] px-16 py-16'>My go-to Frontend and Fullstack framework for personal projects.</p>
						</div>
						<div className='flex justify-center py-4 mx-[20%] h-[13rem] mt-4 hover:transition-all duration-500 hover:bg-[#0c0c0c] border-gray-900 border-2 border-solid text-center text-[1.4rem] rounded-2xl'>
							<div className='w-[20%] h-[10rem] px-8 py-2'><Image src={CSLogo} /></div>
							<h1 className='w-[20%] border-x-2 px-12 py-16 border-gray-900 border-solid'>C#</h1>
							<p className='w-[70%] px-16 py-16'>I've regularly used C# at work and in school for everything ranging from Unity to Blazor and .net Core apps.</p>
						</div>
						<div className='flex justify-center py-4 mx-[20%] h-[13rem] mt-4 hover:transition-all duration-500 hover:bg-[#0c0c0c] border-gray-900 border-2 border-solid text-center text-[1.4rem] rounded-2xl'>
							<div className='w-[20%] px-8 -mt-4'><Image src={MongoDBLogo} /></div>
							<h1 className='w-[20%] border-x-2 px-12 py-16 border-gray-900 border-solid'>MongoDB</h1>
							<p className='w-[70%] px-16 py-16'>My preferred noSQL Database used in many of my projects without any relational data.</p>
						</div>
						<div className='flex justify-center py-4 mx-[20%] h-[13rem] mt-4 hover:transition-all duration-500 hover:bg-[#0c0c0c] border-gray-900 border-2 border-solid text-center text-[1.4rem] rounded-2xl'>
							<div className='w-[20%] h-[10rem] px-8 py-4'><Image src={DockerLogo} /></div>
							<h1 className='w-[20%] border-x-2 px-12 py-16 border-gray-900 border-solid'>Docker</h1>
							<p className='w-[70%] px-16 py-16'>My preferred way of deploying self-hosted Web Applications.</p>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Home;
