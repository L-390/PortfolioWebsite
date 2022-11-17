import {useRef} from 'react';

const SealNRun = () => {
	const gameStarted = useRef<boolean>(false);

	const jump = () => {
		return;
	};

	const startGame = () => {
		return;
	};

	window.addEventListener('keydown', (event) => {
		event.preventDefault();
		if(event.key === 'ArrowUp')
		{
			if(gameStarted.current)
			{
				jump();
			}
			else
			{
				gameStarted.current = true;
			}
		}
	});

	return (
		<div className='w-screen h-screen bg-black flex flex-col justify-center items-center'>
			<h1 className='text-white text-[3.5rem] mb-12'>Seal n' run</h1>
			<div className='w-[50%] h-[60%] border-b-white border-b-2 border-double overflow-hidden scrollingImage'>

			</div>
		</div>
	);
};

export default SealNRun;