const animals = [{name:'dogs' ,number:3}, {name:'cats',number:5}, {name:'rats', number:9}];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = 'green';
    p.style.fontSize = '50px';
}
// Regular
console.log('Hello');

// Interpolated
console.log('Hello I am %s string!','strong');

// Styled
console.log('%c I am great text', 'font-size:50px');

// Warning!
console.warn('Hoo Nooo');

// Error 
console.error('Shirt!');

// Info
console.info('Sun rises in the East');

// Testing
console.assert(1 === 2,'It is wrong!');

const p = document.querySelector('p');
console.assert(p.classList.contains('button'),'That is wrong');

// Clearing
console.clear();

//Viewing Dom Element
console.log(p);
console.dir(p);

//Grouping Together
animals.forEach(animal => {
    console.group(`${animal.name}`)
    console.log(`This is ${animal.name}`);
    console.log(`They are ${animal.number}  ${animal.name}`);
    console.groupEnd(`${animal.name}`)
});

// Counting
console.count('apples');
console.count('banana');
console.count('apples');
console.count('apples');
console.count('orange');
console.count('mango');
console.count('orange');
console.count('apples');
console.count('banana');
console.count('apples');
console.count('orange');


// Timing
console.time('fetching data');
fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
  .then(data => data.json())
  .then(data => {
      console.timeEnd('fetching data');
      console.log(data);
  });

  // Table
  console.table(animals);