export enum StoneTypes {
	small = 0,
	medium = 1,
	large = 2,
}

export type Stone = {
	posX: number;
	stoneType: StoneTypes;
}

export const drawStones = (canvasContext: any, stones: Stone[]) => {
	const newStones: Stone[] = [];

	for(let i = 0; i < stones.length; i++)
	{
		const stone = stones[i];
		if(stone.posX > 0) {
			stone.posX -= 7;

			canvasContext.beginPath();
			canvasContext.rect(stone.posX, 1450, 150, 200);
			canvasContext.fillStyle = '#ffffff';
			canvasContext.fill();
			canvasContext.closePath();
		}
	}

	return stones;
};