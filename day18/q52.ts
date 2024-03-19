/* Q52 - Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. 
Include its brand, model, and other key features like how much storage it has, the size of its screen, 
and how long its battery lasts.*/
interface phoneSpace{
    storage : string,
    screenSize : string,
    batteryLife : string
}

interface Smartphone{
    make : string,
    model : string,
    specs : phoneSpace
}

let smartPhone : Smartphone = {
    make : "TECHNO",
    model : "8C",
    specs : {
        storage : "64GB",
        screenSize : "5.8 inches",
        batteryLife : "18 hours"
    }
};

console.log(smartPhone);