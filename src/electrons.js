function ElectronsGame() {}

ElectronsGame.prototype.calculate = function(dice_array) {
    let totalElectrons = 0;

    for (let i = 0; i < dice_array.length; i++) {
        if (dice_array[i] === 3) {
            totalElectrons += 2;
        } else if (dice_array[i] === 5) {
            totalElectrons += 4;
        }
    }

    return totalElectrons;
};