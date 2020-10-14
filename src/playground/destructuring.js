//-------------- Object Destructuring------------------
const person = {
  name: 'Sp',
  age: 30,
  location: {
    city: 'Fiji',
    temp: 30
  }
};

const { name: firstName = 'Sppp', age } = person;
console.log(`${firstName} is ${age}`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}`);
}


//--------------Array Destructuring--------------------
const address = ['Nemea', 'Peristeri', 'Attiki', '12134'];

const [street, city, state = 'New York', zip] = address;
// i.e. ==>  const [, , state] = address;
// console.log(`You are in ${address[1]} ${address[2]}`);
console.log(`You are in ${city} ${state}.`);


//-------------Arguments Destructuring------------------
const add = (data) => {
  return data.a + data.b;
};

console.log(add({ a: 1, b: 12 }));

// alternatevely to the above
const add = ({ a, b }, c) => {
  return a + b + c;
};

console.log(add({ a: 1, b: 12 }, 100));