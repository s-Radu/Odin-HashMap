import HashMap from './hashMap.js';

const hashMap = new HashMap();

hashMap.set('sarmale', 'sunt tare bune');
console.log(hashMap.get('sarmale'));
console.log(hashMap.has('sarmale'));
console.log(hashMap.has('trambulina'));
console.log(hashMap.remove('politia'));
hashMap.set('politia', 'face piu piu');
console.log(hashMap.remove('politia'));
console.log(hashMap.has('politia'));
