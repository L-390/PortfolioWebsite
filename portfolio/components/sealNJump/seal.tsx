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
	}
	else if(seal.sealStatus === 1) {
		if(seal.sealX <= (width-350)/2) {
			seal.sealX += 5;
		}
		else {
			seal.sealStatus = 2;
		}
	}
	else if(seal.sealStatus === 3)
	{
		if(seal.sealY <= 1395) {
			seal.sealY = (0.1*Math.round(Math.pow(seal.vY, 2)) + 800);
			seal.vY -= 3;
		}
		else {
			seal.sealY = 1395;
			seal.vY = 76.5;
			seal.sealStatus = 2;
		}
	}
	canvasContext.beginPath();
	canvasContext.rect(seal.sealX, seal.sealY, 150, 200);
	canvasContext.fillStyle = '#ffffff';
	canvasContext.fill();
	canvasContext.closePath();

	return seal;
};