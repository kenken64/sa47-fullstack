class Apple {
    constructor(price){
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