export type Seal = {
	sealX: number
	sealY: number
	vY: number
	sealStatus: number
}

export const drawSeal = (canvasContext: any, width: number, seal: Seal) => {
	if(seal.sealStatus === 0) {
		seal.sealX = 0;
		seal.sealY = 1395;
		seal.vY = 0;
	}
	else if(seal.sealStatus === 1) {
		if(seal.sealX <= 500) {
			seal.sealX += 5;
		}
		else {
			seal.sealStatus = 2;
		}
	}
	else if(seal.sealStatus === 3)
	{
		if(seal.vY > 5)
		{
			seal.vY -= 1;
		}
		else if(seal.vY >= 1) {
			seal.vY += 1;
		}
		else {
			seal.vY = 0;
			seal.sealStatus = 2;
		}
	}

	canvasContext.beginPath();
	canvasContext.rect(seal.sealX, seal.sealY + seal.vY, 150, 200);
	canvasContext.fillStyle = '#ffffff';
	canvasContext.fill();
	canvasContext.closePath();

	return seal;
};