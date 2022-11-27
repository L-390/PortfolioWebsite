import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const ContactForm = () => {
	const submitData = (ev: any) => {
		return;
	};

	return (
		<>
			<Head>
				<title>Tech Stack</title>
			</Head>
			<Navbar currentPage='stack'/>
			<main>
				<div className='flex justify-center align-center'>
					<form onSubmit={submitData}>
						<input type='text' placeholder='' className='border-b-black border-b-2 border-b-solid mb-4'/> <br/>
						<input type='submit'/>
					</form>
				</div>
			</main>
			<Footer />
		</>

	);
};

export default ContactForm;