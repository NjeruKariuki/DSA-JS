/* 
 *built-in data structure in js
 stores data as Key-value pairs
 map can use any value as key, whereas object only uses strings and symbols as keys
 map preserves order of key-value paris, hence suitable when you want to iterate in a specific order
 * */

const map = new Map();

map.set('a', 3);
map.set('b', 4);
map.set('c', 34);

console.log(map.size);
console.log(map.has('b'));
console.log(map.get('b'));
console.log(map.delete('b'));
console.log(map.has('b'));
map.set('b', 'deleted returned with this as value');
console.log(map.get('b'));


const newmap = new Map([
	['a', 3],
	['b', 34]
]);

for(const [key, value] of newmap) {
	console.log(`${key} : ${value}`)
}

