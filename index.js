import HashMap from './hashMap.js';

const hashMap = new HashMap();

hashMap.set('sarmale', 'sunt tare bune');
hashMap.set('sarmAle', 'sunt tare bune');
hashMap.set('sarmalE', 'sunt tare bune');
hashMap.get('sarmalE');
hashMap.get('sarmale');
hashMap.get('labirint');
console.log(hashMap.has('sarmale'));
hashMap.remove('sarmale');
hashMap.get('sarmale');
console.log(hashMap.length());
console.log(hashMap.keys());
hashMap.clear();
console.log(hashMap.length());
