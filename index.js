import HashMap from './hashMap.js';

const hashMap = new HashMap();

hashMap.set('sarmale', 'sunt tare bune');
console.log(hashMap.get('sarmale'));
console.log(hashMap.has('sarmale'));
console.log(hashMap.has('trambulina'));
