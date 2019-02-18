class Apple {
    constructor(price){
        console.log("Apple C4");
        this.price = price;
    }

    peel(){
        console.log("Peeling apple...")
    }

    getPrice(){
        return this.price;
    }
}

class Orange {
    constructor(price){
        console.log("Orange C4");
        this.price = price
    }

    peel(){
        console.log("Peeling orange...")
    }
    
    getPrice(){
        return this.price;
    }
}

module.exports = { Apple, Orange };