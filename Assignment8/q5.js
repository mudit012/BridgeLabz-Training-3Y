// Q5 - Ride-Sharing Application

class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

// Driver inherits from User and adds vehicle details
class Driver extends User {
  constructor(name, rating, vehicleModel, vehicleNumber) {
    super(name, rating);
    this.vehicle = { model: vehicleModel, number: vehicleNumber };
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance; // in km
  }

  calculateFare() {
    // validation: distance should be given and not negative
    if (this.distance === undefined || this.distance === null || typeof this.distance !== "number" || isNaN(this.distance)) {
      throw new Error("Distance is required to calculate the fare.");
    }
    if (this.distance < 0) {
      throw new Error("Distance cannot be negative.");
    }

    const baseFare = 40;
    const ratePerKm = 12;
    return baseFare + this.distance * ratePerKm;
  }
}

const rider = new User("Sneha", 4.8);
const driver = new Driver("Ramesh", 4.6, "Swift Dzire", "UP85 AB 1234");
console.log(`Rider: ${rider.name} | Driver: ${driver.name} (${driver.vehicle.model}, ${driver.vehicle.number})\n`);

// test with valid, negative and missing distance
const trips = [
  new Trip("Mathura", "Vrindavan", 12),
  new Trip("Mathura", "Agra", -50),
  new Trip("Mathura", "Delhi"),   // distance not provided
];

trips.forEach((trip) => {
  try {
    const fare = trip.calculateFare();
    console.log(`${trip.fromLocation} to ${trip.toLocation}: Fare = Rs. ${fare}`);
  } catch (error) {
    console.log(`${trip.fromLocation} to ${trip.toLocation}: Could not calculate fare - ${error.message}`);
  }
});
