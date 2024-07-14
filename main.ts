#!/bin/env node;
// Car class representing a car with brand, model, and running status
class Car {
    private brand: string;
    private model: string;
    private isRunning: boolean;
  
    // Constructor to initialize brand, model, and set running status to false
    constructor(brand: string, model: string) {
      this.brand = brand;
      this.model = model;
      this.isRunning = false;
    }
  
    // Method to start the car
    start(): void {
      if (!this.isRunning) {
        this.isRunning = true;
        console.log(`${this.brand} ${this.model} is now running.`);
      } else {
        console.log(`${this.brand} ${this.model} is already running.`);
      }
    }
  
    // Method to stop the car
    stop(): void {
      if (this.isRunning) {
        this.isRunning = false;
        console.log(`${this.brand} ${this.model} has stopped.`);
      } else {
        console.log(`${this.brand} ${this.model} is already stopped.`);
      }
    }
  
    // Method to sound the horn of the car
    honk(): void {
      if (this.isRunning) {
        console.log(`${this.brand} ${this.model} goes beep beep!`);
      } else {
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

  