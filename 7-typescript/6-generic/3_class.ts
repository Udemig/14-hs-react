// Fucntion / Type / Interface'lerde olduğu gibi class'ların yeniden kullanılabilir olması için generic kullanırız

class Sorter<T> {
  constructor(private data: T[]) {}

  sortData(): T[] {
    return this.data.sort();
  }
}

const arr1 = new Sorter<string>(["b", "n", "z", "a"]);
const arr2 = new Sorter<number>([9, 4, 2, 5, 7, 1]);

console.log(arr1.sortData());
console.log(arr2.sortData());
