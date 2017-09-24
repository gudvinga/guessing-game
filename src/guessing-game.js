class GuessingGame {
    constructor(value) {
        this.value = value;
        this.maxRange = null;
        this.minRage = null;
    }

    setRange(min, max) {
        this.maxRange = max;
        this.minRage = min;
    }

    guess() {
        this.number = Math.floor(Math.random()*(this.maxRange - this.minRage) + this.minRage);
    }

    lower() {
        if (this.number > this.value) {
            this.maxRange = this.number;
        }
    }

    greater() {
        if (this.number < this.value) {
            this.minRange = this.number;
        }
    }
}

module.exports = GuessingGame;
