// Q8 - Movie Ticket Booking System (inheritance + prototype chain)

class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

// OnlineTicket inherits MovieTicket and adds convenienceFee
class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

// adding a method to MovieTicket.prototype AFTER the classes are made
MovieTicket.prototype.printTicket = function () {
  console.log(`Movie: ${this.movieName} | Seat: ${this.seatNo} | Price: Rs. ${this.price}`);
};

const ticket1 = new OnlineTicket("Interstellar", "B12", 300, 30);
const ticket2 = new OnlineTicket("Inception", "C5", 250, 25);

// OnlineTicket doesn't have printTicket itself, JS finds it by going up the prototype chain
ticket1.printTicket();
ticket2.printTicket();
console.log("Total amount (ticket1): Rs.", ticket1.getTotalAmount());
console.log("Total amount (ticket2): Rs.", ticket2.getTotalAmount());

// proof of the prototype chain
console.log("\nticket1 has its own printTicket?:", ticket1.hasOwnProperty("printTicket"));
console.log("OnlineTicket.prototype has it?   :", OnlineTicket.prototype.hasOwnProperty("printTicket"));
console.log("MovieTicket.prototype has it?    :", MovieTicket.prototype.hasOwnProperty("printTicket"));
console.log("Chain works:", Object.getPrototypeOf(OnlineTicket.prototype) === MovieTicket.prototype);
