/* 
 *set can hold collection of values. values must be unique
 *set contain different data types
 * dynamically sized.
 * */


const set = new Set([1, 2, 3]);

set.add(4);
console.log(set.has(4));
set.delete(4);
console.log(set.has(4));
for(const item of set) {
	console.log(item);
}
set.clear();
console.log(set.size);
