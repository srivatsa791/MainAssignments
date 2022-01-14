class Circle {
  constructor(radius = 1.0, color = "red") {
    this._radius = radius;
    this._color = color;
  }
  get radius() {
    return this._radius;
  }
  set radius(Radius) {
    this._radius = Radius;
  }
  get color() {
    return this._color;
  }
  set color(color) {
    this._color = color;
  }
  toString() {
    return `Circle is of radius ${this._radius} and of colour ${this._color} now.`;
  }
  getArea() {
    return 3.14 * this._radius * this._radius;
  }
  getCircumference() {
    return 2 * 3.14 * this._radius;
  }
}
let circle1 = new Circle();
console.log(circle1.toString());
let circle2 = new Circle(222.0);
console.log(circle2.toString());
let circle3 = new Circle(44.0, "Blue");
console.log(circle3.toString());
circle3.radius = 56345.0;
console.log("Radius  is now", circle3.radius);
circle3.color = "violet";
console.log("Color is now", circle3.color);
console.log("Area of the circle is now", circle3.getArea());
console.log(
  "Circumference of the circle is now : " + circle3.getCircumference()
);
