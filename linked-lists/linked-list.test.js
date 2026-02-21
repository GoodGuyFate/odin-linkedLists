import { LinkedList } from "./linked-list.js";

test("should create an empty list", () => {
  const list = new LinkedList();
  expect(list.head).toBe(null);
});

test("should append a value to an empty list", () => {
  const list = new LinkedList();

  list.append(10);

  expect(list.head.value).toBe(10);
  expect(list.head.next).toBe(null);
});

test("should append multiple values", () => {
  const list = new LinkedList();
  list.append(10);
  list.append(20);

  expect(list.head.value).toBe(10);
  expect(list.head.next.value).toBe(20);
});

test("should prepend a value to the start of the list", () => {
  const list = new LinkedList();
  list.append(20); // list [20]
  list.prepend(10); // list [10, 20]

  expect(list.head.value).toBe(10);
  expect(list.head.next.value).toBe(20);
});

test("should return the correct size of the list", () => {
  const list = new LinkedList();
  expect(list.getSize()).toBe(0);

  list.append(10);
  list.append(20);
  expect(list.getSize()).toBe(2);
});

test("should return the correct head value of the list", () => {
  const list = new LinkedList();

  expect(list.getHead()).toBe(null);

  list.append(10);
  expect(list.getHead()).toBe(10);

  list.append(20);
  expect(list.getHead()).toBe(10);

  list.prepend(5);
  expect(list.getHead()).toBe(5);
});

test("should correctly track the tail node", () => {
  const list = new LinkedList();

  expect(list.getTail()).toBe(null);

  list.append(10);
  expect(list.getTail()).toBe(10);
  expect(list.getHead()).toBe(10);

  list.append(20);
  list.append(30);
  expect(list.getTail()).toBe(30);

  list.prepend(5);
  // list is now [5, 10, 20, 30]
  expect(list.getTail()).toBe(30);
});

test("should return the value at a specific index", () => {
  const list = new LinkedList();
  list.append(10); // index 0
  list.append(20); // index 1
  list.append(30); // index 2

  expect(list.at(0)).toBe(10);
  expect(list.at(1)).toBe(20);
  expect(list.at(2)).toBe(30);
  expect(list.at(99)).toBe(null); // Out of bounds
});

test("should remove the head and return its value (shift)", () => {
  const list = new LinkedList();
  list.append(10);
  list.append(20);
  list.append(30);

  // test shifting from a multi item list
  const firstPopped = list.shift();
  expect(firstPopped).toBe(10);
  expect(list.getHead()).toBe(20);
  expect(list.getSize()).toBe(2);

  // test shifting until the list is empty
  list.shift(); // removes 20
  const lastPopped = list.shift(); // removes 30

  expect(lastPopped).toBe(30);
  expect(list.getHead()).toBe(null);
  expect(list.getTail()).toBe(null);
  expect(list.getSize()).toBe(0);

  // test shifting an empty list
  expect(list.shift()).toBe(null);
});

test("should return true if value is present, false otherwise", () => {
  const list = new LinkedList();

  // test empty list
  expect(list.contains(10)).toBe(false);

  list.append(10);
  list.append(20);
  list.append(30);

  // test head
  expect(list.contains(10)).toBe(true);

  // test middle
  expect(list.contains(20)).toBe(true);

  // test tail
  expect(list.contains(30)).toBe(true);

  // test non existent value
  expect(list.contains(99)).toBe(false);

  // test falsy values
  list.append(0);
  expect(list.contains(0)).toBe(true);
});

test("should find the index of a value, returning the first occurrence", () => {
  const list = new LinkedList();
  list.append(10);
  list.append(20);
  list.append(10);

  expect(list.findIndex(20)).toBe(1);
  expect(list.findIndex(10)).toBe(0);
  expect(list.findIndex(99)).toBe(-1);
});

test("should represent the linked list as a string", () => {
  const list = new LinkedList();

  expect(list.toString()).toBe("");

  list.append(10);
  expect(list.toString()).toBe("( 10 ) -> null");

  list.append(20);
  list.append(30);
  expect(list.toString()).toBe("( 10 ) -> ( 20 ) -> ( 30 ) -> null");
});

test("console.log", () => {
  const list = new LinkedList();

  list.append("dog");
  list.append("cat");
  list.append("parrot");
  list.append("hamster");
  list.append("snake");
  list.append("turtle");

  console.log(list.toString());
});
