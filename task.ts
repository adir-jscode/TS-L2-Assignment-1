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
  items.filter((item) => {
    item.rating >= 4;
  });

  return items;
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

const filteredItems = filterByRating(books);
console.log(filteredItems);

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return [];
}

concatenateArrays(["a", "b"], ["c"]); // Output: ["a", "b", "c"]
concatenateArrays([1, 2], [3, 4], [5]); // Output: [1, 2, 3, 4, 5]

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
