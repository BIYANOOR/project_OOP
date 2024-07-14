#!/bin/env node;
// Car class representing a car with brand, model, and running status
class Car {
    brand;
    model;
    isRunning;
    // Constructor to initialize brand, model, and set running status to false
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
        this.isRunning = false;
    }
    // Method to start the car
    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            console.log(`${this.brand} ${this.model} is now running.`);
        }
        else {
            console.log(`${this.brand} ${this.model} is already running.`);
        }
    }
    // Method to stop the car
    stop() {
        if (this.isRunning) {
            this.isRunning = false;
            console.log(`${this.brand} ${this.model} has stopped.`);
        }
        else {
            console.log(`${this.brand} ${this.model} is already stopped.`);
        }
    }
    // Method to sound the horn of the car
    honk() {
        if (this.isRunning) {
            console.log(`${this.brand} ${this.model} goes beep beep!`);
        }
        else {
            console.log(`${this.brand} ${this.model} is not running.`);
        }
    }
}
// Main driver program to demonstrate Car class functionality
function main() {
    // Create instances of Car
    const car1 = new Car("Toyota", "Corolla");
    const car2 = new Car("Honda", "Civic");
    // Perform actions on cars
    car1.start();
    car2.start();
    car1.honk();
    car2.stop();
    car1.stop();
}
// Execute main function to run the program
main();
export {};
