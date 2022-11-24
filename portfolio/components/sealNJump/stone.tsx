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

	for(const stone in stones)
	{
		if(stone.posX > 0) {
			stone.posX += 5;

			canvasContext.beginPath();
			canvasContext.rect(stone.posX, 1350, 150, 200);
			canvasContext.fillStyle = '#ffffff';
			canvasContext.fill();
			canvasContext.closePath();
		}
	}

	return stones;
};