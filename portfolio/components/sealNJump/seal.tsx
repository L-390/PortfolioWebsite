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
		if(seal.sealX <= (width-350)/2) {
			seal.sealX += 5;
		}
		else {
			seal.sealStatus = 2;
		}
	}
	else if(seal.sealStatus === 4 || seal.sealY < 500)
	{
		if(seal.sealY <= 1395) {
			seal.sealY += 20;
			seal.sealStatus = 4;
		}
		else {
			seal.sealY = 1395;
			seal.sealStatus = 2;
		}
	}
	else if(seal.sealStatus === 3) {
		seal.sealY -= 20;
	}
	canvasContext.beginPath();
	canvasContext.rect(seal.sealX, seal.sealY, 150, 200);
	canvasContext.fillStyle = '#ffffff';
	canvasContext.fill();
	canvasContext.closePath();

	return seal;
};