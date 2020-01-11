// main();
// // ButtleSort
// function main() {
//     const arr = [1,4,2,9,-1,0,8,-2,1,4,1,1,-9];
//     console.log(arr);
//     bubbleSort(arr);
//     console.log(arr);
// }
//
// function bubbleSort(arr) {
//     let tmp = 0;
//     for (let i = 1; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 swap(arr, j, tmp)
//             }
//         }
//     }
// }
//
// function swap(arr,j,tmp) {
//    tmp = arr[j];
//    arr[j] = arr[j+1];
//    arr[j+1] = tmp;
// };
//
// //Selection Sort
// // main();
// // function main() {
// //     const arr = [1,4,2,9,-1,0,8,-2,1,4,1,1,-9];
// //     console.log(arr);
// //     selectionSort(arr);
// //     console.log(arr);
// // }
// //
// // function selectionSort(arr) {
// //     let tmp = 0;
// //     for (let i = 0; i < arr.length - 1; i++){
// //         for (let j = i; j <arr.length ; j++) {
// //             if ( arr[i] > arr[j]) {
// //                 swap (arr, j , i, tmp)
// //             }
// //         }
// //     }
// // }
// //
// // function swap (arr, j, i, tmp) {
// //     tmp = arr[i];
// //     arr[i] = arr[j];
// //     arr[j] = tmp;
// // }
//
// // Merge Sort
// main();
//
// // function main () {
// //     const arr = [9,1,8,2,7,3,4,6,5];
// //     // console.log( arr );
// //     mergeSort(arr);
// //     console.log(mergeSort(arr));
// // }
// //
// // function mergeSort(arr) {
// //     if ( arr.length < 2) {
// //         return arr;
// //     }
// //
// //     let middle = Math.floor(arr.length / 2);
// //     let leftArr = arr.slice(0,middle);
// //     let rightArr = arr.slice(middle);
// //
// //     return mergeElements(mergeSort(leftArr), mergeSort(rightArr));
// // }
// //
// //
// // function mergeElements(leftSort, rightSort) {
// //     const ar = [];
// //     let i = j = 0;
// //
// //     while (i < leftSort.length && j < rightSort.length) {
// //         ar.push(
// //             (leftSort[i] < rightSort[j]) ?
// //                 leftSort[i++] : rightSort[j++]
// //         );
// //     }
// //
// //     return [
// //         ...ar,
// //         ...leftSort.slice(i),
// //         ...rightSort.slice(j)
// //     ]
//
// function main() {
//     let arr = [1,9,2,8,3,7,4,6,5];
//     console.log(mergeSort(arr));
// }
//
// function mergeSort(arr) {
//     if (arr.length < 2){
//         return arr;
//     }
//
//     let middle = Math.floor(arr.length /2 );
//     let left = arr.slice(0,middle);
//     let right = arr.slice(middle);
//
//     return merge( mergeSort(left), mergeSort(right));
// }
//
// function merge(left,right){
//     let ar = [];
//     let i = j = 0;
//
//     while ( i < left.length && j < right.length) {
//         ar.push(left[i] < right[j] ? left[i++] : right[j++]);
//     }
//     return [
//         ...ar,
//         ...left.slice(i),
//         ...right.slice(j)
//     ];
// }

// function sort(array){
//     if(array.length < 2){
//         return array;
//     }
//     let left =[];
//     let right = [];
//     let pivotIndex = Math.floor(array.length /2 );
//     let pivot = array[pivotIndex];
//
//    for (let i = 0; i < array.length; i++){
//
//        if(array[i] === pivot) {
//            continue
//        }
//        array[i] < pivot ?   left.push(array[i]) : right.push(array[i]);
//     }
//
//     return sort(left).concat(pivot,sort(right))
// }
// let arr = [1,9,2,8,3,7,4,6,5];
// console.log(sort(arr));


// let ar = ['js', 'html', 'react', 'redux', 'css'];
// console.log(ar);
// let [a,b,c,,e] = ar;
// console.log(a,b,c,e);

// let obj = {
//     name: 'Petya',
//     age: 19,
//     sex: 'man',
// };
//
// let {name,sex} = obj;
//
// console.log(name, sex);

// let a = 0;
//
// function name(){
//     let a = 1;
//     return a + 1;
// }
// name();
//
// function mane(){
//     return a = a + 1;
// }
//
// function func(){
//     let a = 0;
//     return function (){
//         return a += 1;
//     }
// };
//
//
//
// let fu = func();
// console.log(fu());
// console.log(fu());
// console.log(func());
//
// mane();

class Node{
    constructor(value){
        this.next = null;
        this.prev = null;
        this.value = 0;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    size(){
        return this.length;
    }

    addToHead(value){
        let oldFirst = this.head;
        this.head = new Node(value);


        if(this.head){
            this.head.prev = oldFirst;
        }
        else{
            this.tail = oldFirst;
        }
        this.head = oldFirst;
        this.length++;
    }

    addToTail(value){
        let oldFirdst = this.tail;
        this.head = newNode(value);

        if(this.head){

        }
    }
}



















//Двухсвязный список удаление из конца.
// Удаление из конца списка.
// Хакер ранк на гит
//         варм ап
//             носки пары

// Алгоритмы и структцры данных
//      сортировки
//         фибаначи
//         рекурсии
//         оченредь
//         стек
//         двухсвязный список
//         односвязный список
//
// прототипированное програмирование














