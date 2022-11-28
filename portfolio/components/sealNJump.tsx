import {useRef, useEffect} from 'react';
import {Seal, drawSeal} from './sealNJump/seal';
import {getRandom} from '../utilities/functions';
import {Stone, drawStones} from './sealNJump/stone';
import ScoreCounter from './sealNJump/scoreCounter';

const SealNJump = () => {
	const gameStarted = useRef<boolean>(false);
	const canvasRef = useRef(null);
	const seal = useRef<Seal>({sealX: 0, sealY: 0, vY: 76.5, sealStatus: 0});
	let stones: Stone[] = [];
	const score = useRef<number>(0);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');
		canvas.style.width ='1250px';
		canvas.style.height ='100%';

		const interval = setInterval(() => {
			context.clearRect(0, 0, canvas.width, canvas.height);
			score.current = ScoreCounter(context, score.current, seal.current.sealStatus);
			seal.current = drawSeal(context, canvas.width, seal.current);
			stones = drawStones(context, stones);
		}, 16);
		return () => clearInterval(interval);
	});

	useEffect(() => {
		const interval = setInterval(() => {
			if(seal.current.sealStatus !== 0 && seal.current.sealStatus !== 1)
			{
				const newStone: Stone = {posX: 1500, stoneType: 0};
				newStone.stoneType = getRandom(0, 3);
				stones.push(newStone);
			}
		}, getRandom(4000, 7000));
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
		<canvas className='bg-gray-900' ref={canvasRef} height='1600' width='2500'></canvas>
	);
};

export default SealNJump;