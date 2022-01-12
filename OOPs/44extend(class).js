


class CryptoCurr{

    constructor(technology, year, familiar){
        this.technology = technology;
        this.year = year;
        this.familiar = familiar;
        console.log(`Welcome to ${this.year}, we are running on ${this.technology}`);

    }

    welcome(){
        console.log(`Welcome to ${this.year}, we are running on ${this.technology}`);
    }

}

const crypto = new CryptoCurr('blockchain',2019,'yes');


class Dogecoin extends CryptoCurr{

    constructor(technology, year, familiar, coinValue, coinCount){
        super(technology, year, familiar)
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

const theCoin = new Dogecoin('blockchain',2022,'not yet',12000,1500000);

// crypto.welcome();