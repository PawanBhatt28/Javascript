
class Dogecoin{

    constructor(coinValue, coinCount){
        this.coinValue = coinValue;
        this.coinCount = coinCount;
        console.log(`Value : ${this.coinValue}, Coin Count : ${this.coinCount}`);
    }

    power(){
        console.log("My power is Elon SUSk.");
        console.log("SUS!!");
        console.log("AMONGH US");
    }

    buyme(){
        console.log("Buy Me Bitch, bitcoin suckss!!");
    }

    buy(howmuch){
        const money = this.coinValue * howmuch;
        console.log(`You have $${money}.`);
    }
}

const cryptoCoin = new Dogecoin(23563, 150000000);

cryptoCoin.buy(10)