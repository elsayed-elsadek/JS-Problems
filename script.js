const myNumbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];
console.log("Original Numbers:", myNumbers);

// First problem (Even nums)
const evenNums = () => myNumbers.filter((e) => e % 2 === 0); 
console.log(`Even numbers: ${evenNums()}`);

// Second problem (Largest num)
const findLargestNum = (arr) => Math.max(...arr);  
console.log(`Largest number: ${findLargestNum(myNumbers)}`);

// Third problem (Reverse text)
const myText = 'Hello Web Masters';
const reverseText = (text) => text.split('').reverse().join('');  
console.log(`Reversed Text: ${reverseText(myText)}`);

// Fourth problem (Remove Duplicates)
const nonDuplicatedNums = (arr) => [...new Set(arr)];  
console.log(`Non-Duplicated Numbers: ${nonDuplicatedNums(myNumbers)}`);
