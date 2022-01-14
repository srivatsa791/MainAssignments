const BasePay = 34;
class UberCab {
  constructor(vehicleType, distance) {
    this.vehicleType = vehicleType;

    this.distance = distance;
  }
  getTotalFare(BasePay) {
    if (this.vehicleType == "Basic") {
      return BasePay * this.distance;
    } else if (this.vehicleType == "Platinum") {
      return 1.5 * BasePay * this.distance;
    } else if (this.vehicleType == "Gold") {
      return 2 * BasePay * this.distance;
    } else if (this.vehicleType == "Special Romantic Date") {
      return 4 * BasePay * this.distance;
    } else if (this.vehicleType == "On Go Chopper") {
      return 200 * BasePay * this.distance;
    }
  }
}
let customerNumber1 = new UberCab("Platinum", 10, 5);
let customerNumber2 = new UberCab("On Go Chopper", 8, 5);
let customerNumber3 = new UberCab("Gold", 6, 5);
console.log(
  `Vehicle Type: ${
    customerNumber3.vehicleType
  }\nUber price:${customerNumber3.getTotalFare(BasePay)}`
);
console.log(
  `Vehicle Type: ${
    customerNumber2.vehicleType
  }\nUber price:${customerNumber2.getTotalFare(BasePay)}`
);
console.log(
  `Vehicle Type: ${
    customerNumber1.vehicleType
  }\nUber price:${customerNumber1.getTotalFare(BasePay)}`
);
