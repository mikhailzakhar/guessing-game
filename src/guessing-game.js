class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.numMin = min;
        this.numMax = max;
    }

    guess() {
        this.num = Math.round((this.numMax - this.numMin) / 2 + this.numMin);
        return this.num;
    }

    lower() {
        this.numMax = this.num;
    }

    greater() {
        this.numMin = this.num;
    }
}

module.exports = GuessingGame;
