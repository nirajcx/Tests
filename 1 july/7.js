/*
heros array to return a new array.

The new array should rename the 'name' key to 'hero'.
The 'name' key should not appear in the new array.
The new array should have a new key added called (id).
The key 'id' should be based on the index.

const heros = [
  { name: 'Spider-Man' },
  { name: 'Thor' },
  { name: 'Black Panther' },
  { name: 'Captain Marvel' },
  { name: 'Silver Surfer' }
];

Expected output (array of objects): 
[
  { id: 0, hero: 'Spider-Man' }, 
  { id: 1, hero: 'Thor' }, 
  { id: 2, hero: 'Black Panther' }, 
  { id: 3, hero: 'Captain Marvel' }, 
  { id: 4, hero: 'Silver Surfer' }
]
*/

const heros = [
    { name: 'Spider-Man' },
    { name: 'Thor' },
    { name: 'Black Panther' },
    { name: 'Captain Marvel' },
    { name: 'Silver Surfer' }
];

const idHeros = heros.map((hero,index)=>({
    id:index,
    hero:hero.name
}));


console.log(idHeros);