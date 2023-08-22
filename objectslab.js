
let carThree = {
    wheels: 32,
    owner: "Jasmine",
    isBroken: false,
    color: "lavender"
};
carThree.price =5000
carThree['year'] = 2020
carThree.isBroken = true

const ownerValue = carThree.owner

let clientIsInterested;
if (carThree.color == "blue"
) {clientIsInterested = true} else {
    clientIsInterested = false };
    console.log (clientIsInterested)

console.log(carThree.color + "");
console.log(ownerValue);
//
let munchieFlavor = {
    profit: 1000,
    manager: "Jasmine",
    isOpenNow: true,
    isVeryExpensive: true
};
munchieFlavor.location = "Amsterdam";
munchieFlavor["storeType"] = "Restaurant";
munchieFlavor.isOpenNow = false;
let isExpensive = munchieFlavor.isVeryExpensive;
let canShopHere;
if (munchieFlavor.isOpenNow && !munchieFlavor.isVeryExpensive) {
    canShopHere = true;
} else {
    canShopHere = false;
}
delete munchieFlavor.profit;
console.log(munchieFlavor);
console.log(isExpensive);
console.log(canShopHere);
//
let home = {
    rooms: 4,
    bathrooms: 5,
    isForSale: true,
    isInGoodLocation: true
};

home.price = 150000;
home["year"] = 1980;
home.isForSale = false;
let numberBathrooms = home.bathrooms;
let buyHouse;
if (home.isForSale && home.isInGoodLocation) {
    buyHouse = true;
} else {
    buyHouse = false;
}

delete home.isForSale;
console.log(home);
console.log(numberBathrooms);
console.log(buyHouse);
//
let game = {
    name: "Sims",
    type: "simulation",
    year: 2000,
    symbol: "rhombus"
};
game.numOfDLC = 67;
game["language"] = "Simlish";
game.type = "life simulation";
let billionsBought;
if (game.type === "life simulation" && game.year >= 2000) {
    billionsBought = true;
} else {
    billionsBought = false;
}
delete game.year;
console.log(billionsBought);
console.log(game);
console.log(game.symbol);