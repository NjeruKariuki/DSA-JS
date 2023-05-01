function towerOfHanoi(n, fromRod, toRod, usingRod){
if(n===1) {
	console.log(`Moved disk 1 from ${fromRod} to ${toRod}`)
	return
}
towerOfHanoi(n-1, fromRod, usingRod, toRod);
console.log(`Move disk ${n} from ${fromRod} to ${toRod} using ${usingRod}.`)
towerOfHanoi(n-1, usingRod, toRod, fromRod)

}

towerOfHanoi(3, 'A', 'C', 'B');
