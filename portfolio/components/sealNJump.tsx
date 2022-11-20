import {useRef, useEffect, useState} from 'react';
import {Seal, drawSeal} from './sealNJump/seal';
import Stone from './sealNJump/stone';

const SealNJump = () => {
	const gameStarted = useRef<boolean>(false);
	const canvasRef = useRef(null);
	const seal= useRef<Seal>({sealX: 0, sealY: 0, vY: 0, sealStatus: 0});
	const [rerender, setRerender] = useState(false);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');
		canvas.style.width='130%';
		canvas.style.height='100%';

		const interval = setInterval(() => {
			seal.current = drawSeal(context, canvas.style.width, seal.current);
			Stone();
		}, 10);
		return () => clearInterval(interval);
	});

	const startGame = () => {
		gameStarted.current = true;

		seal.current.sealStatus = 1;
	};

	window.addEventListener('keydown', (event) => {
		event.preventDefault();
		if(event.key === 'ArrowUp')
		{
			if(gameStarted.current)
			{
				seal.current.sealStatus = 3;
			}
			else
			{
				startGame();
			}
		}
	});

	return (
		<canvas className='bg-gray-900' ref={canvasRef} height='1600' width='1200'></canvas>
	);
};

export default SealNJump;