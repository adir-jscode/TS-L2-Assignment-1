function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === true || toUpper === undefined) {
    const upperCase = input.toUpperCase();
    return upperCase;
  } else {
    const lowerCase = input.toLowerCase();
    return lowerCase;
  }
}

const str1 = formatString("Hello");
console.log(str1);
const str2 = formatString("Hello", true);
console.log(str2);
const str3 = formatString("Hello", false);
console.log(str3);

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const result = items.filter((item) => item.rating >= 4);
  return result;
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

const filteredItems = filterByRating(books);
console.log(filteredItems);

function concatenateArrays<T>(...arrays: T[][]): T[] {
  let newArray = [];
  for (let value of arrays) {
    newArray.push(...value);
  }
  return newArray;
}

const arr1 = concatenateArrays(["a", "b"], ["c"]);
console.log(arr1);
const arr2 = concatenateArrays([1, 2], [3, 4], [5]);
console.log(arr2);

class Vehicle {
  private make: string;
  private year: number;
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    console.log(`Make: ${this.make}, Year:${this.year}`);
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel() {
    console.log(`Model: ${this.model}`);
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();
myCar.getModel();

function processValue(value: string | number): number {
  if (typeof value === "string") {
    const length = value.length;
    return length;
  } else if (typeof value === "number") {
    const multiplied = value * 2;
    return multiplied;
  }
  return 0;
}

const lengthOfString = processValue("hello");
console.log(lengthOfString);
const multipliedByTwo = processValue(10);
console.log(multipliedByTwo);

// interface Product {
//   name: string;
//   price: number;
// }

// function getMostExpensiveProduct(products: Product[]): Product | null {
//   const result = products.map((product) => {console.log(product.price)});
// }

// const products = [
//   { name: "Pen", price: 10 },
//   { name: "Notebook", price: 25 },
//   { name: "Bag", price: 50 },
// ];

// getMostExpensiveProduct(products);
// Output: { name: "Bag", price: 50 }

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  return day !== 0 ? "Weekend" : "Weekday";
}

const weekDayType = getDayType(Day.Monday);
console.log(weekDayType);
const weekEndType = getDayType(Day.Sunday);
console.log(weekEndType);
