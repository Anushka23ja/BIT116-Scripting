//Anushka Chougule 
//(Part1 of ICE14)
price: function getPrice() {
    var thePrice = 500;
    if(this.speed == "4GHz") {
        thePrice += 300;
    }
    else {
        thePrice += 100;
    }
    if(this.hdspace == "1TB") {
        thePrice += 150;
    }
    else {
        thePrice += 80;
    }
    if(this.ram == "16GB") {
        thePrice += 200;
       }
    else {
        thePrice += 100;
    }
    return thePrice;
}

function computer(speed, hdspace, ram) {
    this.speed = speed;
    this.hdspace = hdspace;
    this.ram = ram;
    this.price = getPrice;
}

var workComputer = new computer("3.4GHz","500GB","4GB");
var homeComputer = new computer("4GHz","1TB","16GB");
var laptop =  new computer("2.39GHz","250GB","8GB");

var workComputerPrice = workComputer.price();
var homeComputerPrice = homeComputer.price();
var laptopPrice = laptop.price();

document.getElementById("wC").innerHTML = ("<strong>Work computer: </strong>" + workComputer.speed +", "+ workComputer.hdspace + ", " + workComputer.ram);
document.getElementById("priceWC").innerHTML = ("Total Price: "  + workComputerPrice);


document.getElementById("HC").innerHTML = ("<strong>Home computer: </strong>" + homeComputer.speed +", "+ homeComputer.hdspace + ", " + homeComputer.ram);
document.getElementById("priceHC").innerHTML = ("Total Price: "  + homeComputerPrice);


document.getElementById("laptop").innerHTML = ("<strong>Laptop: </strong>" + laptop.speed +", "+ laptop.hdspace + ", " + laptop.ram);
document.getElementById("priceLaptop").innerHTML = ("Total Price: "  + laptopPrice);