
//with strings, numbers,
let age = 140;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name1 = 'pooja';
let name2 = name1;
console.log(name1, name2);
name1 = 'teja';
console.log(name1, name2);

//with arrays
const players = ['teja','pooja','jaya','rama'];
const team = players;
console.log(players, team);
team[3] = 'vijaya'; 
console.log(players,team);//both are same

const team2 = players.slice();
team2[3] = 'pet';
console.log(players,team2);//both are different 

const team3 = [].concat(players);
team3[3] = 'hanni';
console.log(players, team3);

const team4 = [...players];
team4[3] = 'Wow!';
console.log(players, team4);

const team5 = Array.from(players);
team5[3] = 'Nooo';
console.log(players, team5);


//with objects
const person = {
  fName : 'chittoori',
  age : 132
};

const captain = person;
captain.number = 123;
console.log(captain);//both are same

const cap2 = Object.assign({}, person, {slides:134, code:12344});
console.log(cap2);//it just copying 

const cap3 = {...person};
console.log(cap3);



const wes = {
    name: 'Wes',
    age: 100,
    social: {
      twitter: '@wesbos',
      facebook: 'wesbos.developer'
    }
  };
console.log(wes);

const dev = Object.assign({},wes,{age:134});
 dev.social.twitter = "@hacker";
 console.log(dev);//both are same
 console.log(wes);

 const dev2 = JSON.parse(JSON.stringify(wes));
 dev2.social.twitter = "@dancer";
 console.log(dev2);//both are different
 console.log(wes);


