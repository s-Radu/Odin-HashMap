// because Js array will allow us to insert a value wherever in the array, we will need the following lines of code to prevent that from happening, since that is not our requirement

// if (index < 0 || index >= buckets.length) {
// 	throw new Error('Trying to access index out of bond!');
// }

class LinkedListNode {
	constructor(key, value) {
		this.key = key;
		this.value = value;
		this.next = null;
	}
}
export default class HashMap {
	constructor(size = 16) {
		this._hashMap = new Array(size);
		this._length = size;
	}

	_checkIndex(index) {
		if (index < 0 || index >= this._length) {
			throw new Error('Trying to access index out of bond!');
		}
	}

	_hash(key) {
		let hashCode = 0;
		const primeNumber = 31;

		for (let i = 0; i < key.length; i++) {
			hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this._length;
		}

		return hashCode;
	}

	set(key, value) {
		const index = this._hash(key);
		this._checkIndex(index);
		if (!this._hashMap[index]) {
			this._hashMap[index] = new LinkedListNode(key, value);
			console.log('Inserted as head.');
		} else {
			let node = this._hashMap[index];
			while (node.next) {
				node = node.next;
			}
			node.next = new LinkedListNode(key.value);
			console.log('Inserted as the last node.');
		}
	}

	// get(key) {
	// 	const index = this._hash(key);
	// 	this._checkIndex(index);
	// 	return this._hashMap[index] !== undefined ? this._hashMap[index] : null;
	// }

	// has(key) {
	// 	const index = this._hash(key);
	// 	this._checkIndex(index);
	// 	return this._hashMap[index] !== undefined ? true : false;
	// }

	// remove(key) {
	// 	const index = this._hash(key);
	// 	this._checkIndex(index);
	// 	if (!this._hashMap[index]) {
	// 		return false;
	// 	}
	// 	delete this._hashMap[index];
	// 	return true;
	// }
}
