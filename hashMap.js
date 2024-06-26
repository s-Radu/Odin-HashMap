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
			throw new Error(`Trying to access index out of bond! at ${index}`);
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
			node.next = new LinkedListNode(key, value);
			console.log('Inserted as the last node.');
		}

		//! Check the load factor
		if (this.length() / this._length > 0.75) {
			this.resize();
		}
	}

	get(key) {
		const index = this._hash(key);
		this._checkIndex(index);
		let node = this._hashMap[index];

		while (node) {
			if (node.key === key) {
				console.log(node.value);
				return node.value;
			}
			node = node.next;
		}
		console.log(null);
		return null;
	}

	has(key) {
		const index = this._hash(key);
		this._checkIndex(index);

		return this._hashMap[index] !== undefined;
	}

	remove(key) {
		const index = this._hash(key);
		this._checkIndex(index);

		if (!this._hashMap[index]) {
			return false;
		} else {
			if (this._hashMap[index].key === key) {
				this._hashMap[index] = this._hashMap[index].next;
				return true;
			} else {
				let previousNode = this._hashMap[index];
				let node = previousNode.next;
				while (node) {
					if (node.key === key) {
						previousNode.next = node.next;
						return true;
					}
					previousNode = node;
					node = node.next;
				}
			}
		}
		return false;
	}

	length() {
		let count = 0;
		for (let i = 0; i < this._length; i++) {
			let index = this._hashMap[i];
			while (index) {
				count++;
				index = index.next;
			}
		}
		return count;
	}

	clear() {
		for (let i = 0; i < this._length; i++) {
			this._hashMap[i] = null;
		}
		console.log('Map cleared.');
	}

	keys() {
		let array = [];
		for (let i = 0; i < this._length; i++) {
			let index = this._hashMap[i];
			while (index) {
				array.push(index.key);
				index = index.next;
			}
		}
		return array;
	}

	values() {
		let array = [];
		for (let i = 0; i < this._length; i++) {
			let index = this._hashMap[i];
			while (index) {
				array.push(index.value);
				index = index.next;
			}
		}
		return array;
	}

	entries() {
		let array = [];
		for (let i = 0; i < this._length; i++) {
			let index = this._hashMap[i];
			while (index) {
				array.push([index.key, index.value]);
				index = index.next;
			}
		}
		return array;
	}

	resize() {
		let oldHashMap = this._hashMap;
		this._length *= 2; //! Double the size
		this._hashMap = new Array(this._length);

		for (let i = 0; i < oldHashMap.length; i++) {
			let node = oldHashMap[i];
			while (node) {
				this.set(node.key, node.value); //! Rehash the key value pair into the new array
				node = node.next;
			}
		}
	}
}

export class HashSet extends HashMap {
	set(key) {
		super.set(key, null);
	}

	values() {
		console.log('This is a set, it does not have values.');
		return null;
	}

	entries() {
		console.log('This is a set, it does not have entries.');
		return null;
	}
}
