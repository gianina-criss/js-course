console.log(100);

console.log("hello");

console.log(20, "hello", true);

const x = 50;
console.log(x);

console.error("alert");

console.warn("warning");

console.table({ name: " Ana", email: "Ana@gmail.com" });

console.group("simple");
console.log(x);
console.error("alert");
console.warn("warning");
console.groupEnd();

const styles = "padding: 10px; background-color: white; color: green;";
console.log("%chello world", styles);
