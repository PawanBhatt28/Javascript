

class Animal {

    constructor(animalName, animalType){
        this.animalName = animalName;
        this.animalType = animalType;
        console.log(this.animalName, this.animalType);
    }

    givefood(foodCount){
        console.log(`Thankyou hooman for ${foodCount} foods.`);
        this.eat();
    }

    eat(){
        console.log('eating food...');
    }
}
console.log("daamn")
const theAnimal = new Animal(69, 'wild');
console.log(theAnimal);
theAnimal.givefood(12);

    // constructor(animalName, animalType){
    //     this.animalName = animalName;
    //     this.animalType = animalType;
    //     console.log(this.animalName, this.animalType);
    // }
