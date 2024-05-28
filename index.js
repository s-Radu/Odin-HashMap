import HashMap, {HashSet} from './hashMap.js';

const hashMap = new HashMap();
const hashSet = new HashSet();

hashMap.set('sarmale', 'sunt tare bune');
hashMap.set('sarmAle', 'sunt tare bune');
hashMap.set('sarmalE', 'sunt tare bune');
hashMap.set('pită', 'e bună și pita');
hashMap.set('mici', 'merg bine cu muștar');
hashMap.set('mi foame', 'iar acu mor de foame');
hashMap.get('sarmalE');
hashMap.get('sarmale');
hashMap.get('labirint');
console.log(hashMap.has('sarmale'));
hashMap.remove('sarmale');
hashMap.get('sarmale');
console.log(hashMap.length());
console.log(hashMap.keys());
console.log(hashMap.values());
console.log(hashMap.entries());
hashMap.clear();
console.log(hashMap.length());

console.log('######################');

hashSet.set('test');
hashSet.set('another test');
console.log(hashSet.length());
console.log(hashSet.keys());
console.log(hashSet.entries());
