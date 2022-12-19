function makeCar() {
    let makes = ["Chevy", "GM", "BMW", "Tucker", "Fiat"];
    let models = ["Corvet", "Ford", "X5", "Torpedo", "Punto"];
    let years = [2000, 2020, 2016, 2017, 2005];
    let colors = ["red", "blue", "black", "white", "tan"];
    let rand1 = Math.floor(Math.random() * makes.length);
    let rand2 = Math.floor(Math.random() * models.length);
    let rand3 = Math.floor(Math.random() * years.length);
    let rand4 = Math.floor(Math.random() * colors.length);
    let rand5 = Math.floor(Math.random() * 5) + 1;

    let car = {
        make: makes[rand1],
        model: models[rand2],
        year: years[rand3],
        color: colors[rand4],
        passengers: rand5,
        started: false,
        fuel: 0,
        start: function() {
            if (this.fuel == 0) {
                alert("The car is on empty, fill up bafore starting");
            } else {
                this.started = true;
            }
        },
        stop: function() {
            this.started = false;
        },
        drive: function() {
            if (this.started) {
                if (this.fuel > 0) {
                    alert(this.make + " " + this.model + " goes zoom zoom!");
                    this.fuel = this.fuel - 1;
                } else {
                    alert("Oh, out of fuel");
                    this.stop;
                }
            } else {
                alert("You need to start the engine first")
            }
        },
        addFuel: function(amount) {
            this.fuel = this.fuel + amount;
        }
    };
    return car;
}

function displayCar(car) {
    console.log("Your new car is a " + car.year + " " + car.make + " " + car.model);
    for (let prop in carToSell) {
        console.log(prop + ": " + carToSell[prop]);
    }
}
let carToSell = makeCar();
displayCar(carToSell);
carToSell.start();
carToSell.drive();
carToSell.addFuel(2);
carToSell.start();
carToSell.drive();
carToSell.drive();
carToSell.drive();
carToSell.stop();