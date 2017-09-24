class GuessingGame {
    constructor() {
        this.maxRange = null;
        this.minRange = null;
        this.guessNum = null;
        
    }

    setRange(min, max) {
        this.maxRange = max;
        this.minRange = min;

    }

    guess() {
        this.guessNum = (this.maxRange + this.minRange)/2;
    }

    lower() {
        this.maxRange = this.guessNum;
        this.guess();
    }

    greater() {
        this.minRange = this.guessNum;
        this.guess();
    }
}

module.exports = GuessingGame;
