describe('Electrons Around the Cores', function() {
	let game;

	beforeEach(function() {
		game = new ElectronsGame();
	});

	it('should return 6 for [1, 2, 3, 4, 5]', function() {
		expect(game.calculate([1, 2, 3, 4, 5])).toEqual(6);
	});

	it('should return 4 for [2, 2, 3, 3]', function() {
		expect(game.calculate([2, 2, 3, 3])).toEqual(4);
	});
});