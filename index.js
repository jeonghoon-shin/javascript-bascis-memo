
function logObject(obj) {
    for (let key in obj) {
        console.log(key + ":\n", obj[key]);
        if (typeof obj[key] === 'object')
            logObject(obj[key]);
    }
}


// title
// body
// author
// views
// comments
//   (author, body)
// isLive


// Constructor Function
function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;

    this.Publish = function() {
        isLive = true;
    };
}


// Inexpensive, Moderate, Pricey

function PriceLevel(level, levelName, highestPrice) {
    this.level = level;
    this.levelName = levelName;
    this.highestPrice = highestPrice;
}

function PriceLevelModule() {
    this.priceLevels = [];
    this.CheckIntegrity = function() {
        let prevPrice = 0;
        for (let key in this.priceLevels) {
            if (this.priceLevels[key].constructor.name !== 'PriceLevel')
                return false;
            if (this.priceLevels[key].highestPrice <= prevPrice)
                return false;

            prevPrice = this.priceLevels[key].highestPrice;
        }
        return true;
    };
    this.AddLevel = function(levelName, highestPrice) {
        this.priceLevels.push(new PriceLevel(this.priceLevels.length, levelName, highestPrice));
        return this.CheckIntegrity();
    };
    this.GetPriceLevelString = function(price) {
        if (price <= 0)
            return null;

        for (let i of this.priceLevels)
            if (price <= i.highestPrice)
                return i.levelName;

        return null;
    };
}


const priceModule = new PriceLevelModule();
priceModule.AddLevel('Inexpensive', 10);
priceModule.AddLevel('Moderate', 30);
priceModule.AddLevel('Pricey', Number.MAX_VALUE);


console.log(priceModule.GetPriceLevelString(-2.23985739));
console.log(priceModule.GetPriceLevelString(-2));
console.log(priceModule.GetPriceLevelString(0));
console.log(priceModule.GetPriceLevelString(2));
console.log(priceModule.GetPriceLevelString(5));
console.log(priceModule.GetPriceLevelString(7));
console.log(priceModule.GetPriceLevelString(10));
console.log(priceModule.GetPriceLevelString(15));
console.log(priceModule.GetPriceLevelString(20));
console.log(priceModule.GetPriceLevelString(30));
console.log(priceModule.GetPriceLevelString(31));
console.log(priceModule.GetPriceLevelString(9999));
console.log(priceModule.GetPriceLevelString(34845723498.456));