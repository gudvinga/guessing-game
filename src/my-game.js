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
        return this.number;
    }

    lower() {
        if (this.guess() > this.value) {
            this.maxRange = this.guess();
            this.greater();
        }
        if (this.number == this.value) return this.number;
    }

    greater() {
        if (this.number < this.value) {
            this.minRange = this.number;
            this.lower();
        }
        if (this.number == this.value) return this.number;
    }
}

var game = new GuessingGame(15);
game.setRange(18,200);
game.guess();

console.log(game.lower());
