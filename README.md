# HashMap Project

This project involves creating a HashMap class with specific methods to handle various operations. The HashMap should only handle keys of type strings.

## Class Methods

The HashMap class should include the following methods:

- `hash(key)`: Takes a key and produces a hash code. You can use the provided hash function or research your own. Remember to handle the edge case with long keys by applying the modulo operator on each iteration.

- `set(key, value)`: Takes a key and a value, and assigns the value to the key in the HashMap. If the key already exists, the old value is overwritten. Handle collisions appropriately and grow the bucket size when necessary.

- `get(key)`: Takes a key and returns the value assigned to this key. If the key is not found, return null.

- `has(key)`: Takes a key and returns true or false based on whether the key is in the HashMap.

- `remove(key)`: Takes a key and removes the entry with that key from the HashMap if it exists. Returns true if the key was in the HashMap and false otherwise.

- `length()`: Returns the number of stored keys in the HashMap.

- `clear()`: Removes all entries in the HashMap.

- `keys()`: Returns an array containing all the keys in the HashMap.

- `values()`: Returns an array containing all the values in the HashMap.

- `entries()`: Returns an array that contains each key-value pair in the HashMap.

Remember, a HashMap does not preserve insertion order, so keys and values may appear out of the order they were inserted in.

## Extra Credit

For extra credit, create a HashSet class that behaves the same as a HashMap but only contains keys with no values.
