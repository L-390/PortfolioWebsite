import {useRef, useEffect, useState} from 'react';
import {Seal, drawSeal} from './sealNJump/seal';
import Stone from './sealNJump/stone';

const SealNJump = () => {
	const gameStarted = useRef<boolean>(false);
	const canvasRef = useRef(null);
	const seal= useRef<Seal>({sealX: 0, sealY: 0, vY: 0, sealStatus: 0});

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');
		canvas.style.width='1250px';
		canvas.style.height='100%';

		const interval = setInterval(() => {
			context.clearRect(0, 0, canvas.width, canvas.height);
			seal.current = drawSeal(context, canvas.width, seal.current);
			Stone();
		}, 16);
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
				if(seal.current.sealStatus !== 3 && seal.current.sealStatus !== 4 && seal.current.sealStatus !== 1)
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