
// 1. remove the falsy values


// let arr = [1, 2, 0, "", null, undefined, false,6,7,9,0];
// let result = [];

// for (let i = 0; i < arr.length; i++) {

//     if (!arr[i]) {
//         result[result.length]=(arr[i]);
//     }
// }

// console.log(result); 

// _____________________________________________________________________



// 2. flated the nested array  arr1=[1,[2,3],[8,4,0],3,9] 

// let arr=[1,[2,3],[8,4,0],3,9];
//     let result=[]

// for(let i=0;i<arr.length;i++){
//     let arr1=arr[i]
//     if(typeof arr1=='object'&& arr1!==""){

//         for(let j=0;j<arr1.length;j++){
//         result[result.length]=arr1[j];
//     }
//   }
//   else{
//     result[result.length]=arr1;
//   }
// }
// console.log(result);


// __________________________________________________________________________


//  3 captalsization the each first letter as const string = 'hello world';

// let arr = "hello world gopi";
// let result = "";

// if (arr[0] !== " ") {
//   result += arr[0].toUpperCase();
// }

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i - 1] === " " && arr[i] !== " ") {
//     result += arr[i].toUpperCase();
//   } else {
//     result += arr[i];
//   }
// }

// console.log(result);
 


// _______________________________________________________________

// 4 longest words in the sentences. string = "Hello, wellcome to program";


// let arr="Hello, wellcome to program"

// let temp=[];
// let longWord = [];
// let result = "";
// for(let i=0;i<=arr.length-1;i++){
   
    
//   if(arr[i]!== " "){
    
//     temp[temp.length] = arr[i]
//     console.log(temp);
    
//   }
//   else{
//     if(temp.length > longWord.length){

//       longWord = temp;
//       console.log("hii");
      
//       console.log(longWord);
      
//     }
//     temp = [];
//   }
// }
// for(let i=0;i<longWord.length;i++){
//   result += longWord[i]
// }
// console.log(result);


// _____________________________________________________________________


// 5. junk array 

// let value = 2
// let arr = [1,2,3,4,5,4,6,7,8,9]
// let temp = []
// let result = []
// let count = 0;

// for(let i=0;i<arr.length;i++){
//   temp[count]=arr[i]
//   count++
//   if(count == value || i == arr.length-1){
//     result[result.length]=temp
//     temp = []
//     count = 0;
//   }
// }
// console.log(result);
