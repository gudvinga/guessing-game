class GuessingGame {
    constructor(value) {
        this.value = value;
        this.maxRange = null;
        this.minRange = null;
        this.number = null;
        
    }

    setRange(min, max) {
        this.maxRange = max;
        this.minRange = min;
    }

    guess() {
        this.number = Math.floor(Math.random()*(this.maxRange - this.minRange) + this.minRange);
        if (this.number < this.value) this.lower();
        else if (this.number > this.value) this.greater();
        else return this.number;
    }

    lower() {
        this.minRange = this.number;
        console.log('this.number = ' + this.number);
        console.log('this.value = ' + this.value);
        this.guess();
    }

    greater() {
        this.maxRange = this.number;
        this.guess();
    }
}

var game = new GuessingGame(100);
game.setRange(18,200);
game.guess();

console.log(game.guess());
