## What are some differences between interfaces and types in TypeScript?

```ts
interface User {
  name: string;
  age: number;
}

type Product = {
  name: string;
  price: number;
};
```

### Differences:

* Interfaces can be declared multiple times with the same name, and TypeScript will merge them automatically. Types don’t allow that.
* Interfaces use extends to build on other interfaces & can be extended one or more interfaces to create a new one. For type, use intersection (&) to compose multiple types.
* Interfaces are commonly used when working with classes & type is mostly used in procedural programming.
* type can define union types, intersection types and primitive aliases. interfaces can't do any of that.

## What is the use of the keyof keyword in TypeScript? Provide an example.

### When to use:
* When you want to restrict a variable to the names of the properties of an object.
* When you want to write functions that work with object properties in a type-safe way.
```ts
type Person = {
  name: string;
  age: number;
};
type PersonKeys = keyof Person;
```


