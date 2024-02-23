price: function pricevalue(){
    var totalprice = 500;
    if(this.speed == "4GHz"){
        totalprice += 300;
    }
    else{
        totalprice += 100;
    }
    if(this.hdspace == "1TB"){
        totalprice += 150;
    }
    else{
        totalprice += 80;
    }
    if(this.ram == "16GB"){
        totalprice += 200;
       }
    else{
        totalprice += 100;
    }
    return totalprice;
}

function comp(speed, hdspace, ram){
    this.speed = speed;
    this.hdspace = hdspace;
    this.ram = ram;
    this.price = getPrice;
}

var one1 = new comp("3.4GHz","500GB","4GB");
var two2 = new comp("4GHz","1TB","16GB");
var three3 =  new comp("2.39GHz","250GB","8GB");

var one1$ = one1.price();
var two2$ = two2.price();
var three3$ = three3.price();

document.getElementById("one").innerHTML = ("Work computer: " + one1.speed +" "+ one1.hdspace + " " + one1.ram);
document.getElementById("two").innerHTML = ("Total Price: "  + one1$);


document.getElementById("three").innerHTML = ("Home computer: " + two2.speed +" "+ two2.hdspace + " " + two2.ram);
document.getElementById("four").innerHTML = ("Total Price: "  + two2$);


document.getElementById("five").innerHTML = ("Laptop: " + three3.speed +" "+ three3.hdspace + " " + three3.ram);
document.getElementById("six").innerHTML = ("Total Price: "  + three3$);