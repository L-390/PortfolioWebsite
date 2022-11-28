const ScoreCounter = (canvasContext: any, currentScore: number, sealStatus: number) => {
	if(sealStatus === 0 || sealStatus === 1)
	{
		return currentScore;
	}

	canvasContext.font = '50px serif';
	canvasContext.fillText('Hello world', 50, 90);

	currentScore += 0.2;

	return 0;
};

export default ScoreCounter;