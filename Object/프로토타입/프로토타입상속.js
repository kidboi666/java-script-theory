let person = {
  name: 'nicholas',
  friends: ['shelby', 'court', 'van'],
}

let anotherPerson = Object.create(person);
anotherPerson.name = 'greg'
anotherPerson.friend.push('rob')
let yetAnotherPerson = Object.create(person);
anotherPerson.name = 'marbin'
anotherPerson.friend.push('joseph')

// Object.create(다른객체의프로토타입이될객체, 새객체에추가할프로퍼티를담은객체)