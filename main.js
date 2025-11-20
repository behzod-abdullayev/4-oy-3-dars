// 1-masala

// const path = require("path")
// const fullPath = path.join("/home", "user", "documents", "notes.txt" )
// console.log(fullPath);



// 2-masala

// const path = require("path")
// const files = ["document.pdf", "photo.jpeg", "archive.zip"]
// for (let i = 0; i < files.length; i++) {
// console.log(path.extname(files[i]));
// }



// 3-masala

// const path = require ("path")
// const file = ("D:/movies/horror/movie.mkv")
// const newFile = "E:" + file.slice(2)
// console.log(newFile);



// 4-masala

// const os = require('os');
// const username = os.userInfo().username;
// const homeDirectory = os.userInfo().homedir;
// console.log(`Foydalanuvchi: ${username}`);
// console.log(`Home katalogi: ${homeDirectory}`);



// 5-masala

// const os = require("os");
// const interfaces = os.networkInterfaces();
// console.log(interfaces);



// 1-masala (leetcode)
// https://leetcode.com/problems/reverse-words-in-a-string-iii/

// function reverseWords(s) {
//   let words = s.split(" ");
//   let result = [];
//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     let reversed = "";
//     for (let j = word.length - 1; j >= 0; j--) {
//       reversed += word[j];
//     }
//     result.push(reversed);
//   }
//   return result.join(" ");
// }
// console.log(reverseWords("who are you"));



// 2-masala (leetcode)
// https://leetcode.com/problems/reverse-only-letters/

// function reverseOnlyLetters(s) {
//   let letters = [];
//   for (let i = 0; i < s.length; i++) {
//     if (/[a-zA-Z]/.test(s[i])) letters.push(s[i]);
//   }
//   let result = "";
//   for (let i = 0; i < s.length; i++) {
//     if (/[a-zA-Z]/.test(s[i])) {
//       result += letters.pop();
//     } else {
//       result += s[i];
//     }
//   }

//   return result;
// }
// console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"));



// 3-masala (leetcode)
// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

// function removeDuplicates(s) {
//   const result = [];

//   for (let i = 0; i < s.length; i++) {
//     const res1 = s[i];
//     if (result.length > 0 && result[result.length - 1] === res1) {
//       result.pop();
//     } else {
//       result.push(res1);
//     }
//   }

//   return result.join("");
// }
// console.log(removeDuplicates("abbaca"));



// 4-masala (leetcode)
// https://leetcode.com/problems/robot-return-to-origin/

// function judgeCircle (moves) {
//     let x = 0
//     let y = 0
//     for (let i = 0; i < moves.length; i++) {
// let res1 = moves[i]
// if (res1 === "U") y++
// if (res1 === "D") y--
// if (res1 === "R") x++
// if (res1 === "L") x--
//     }
//     return x === 0 && y === 0
// };
// console.log(judgeCircle("ULLDRR"));



// 5-masala (leetcode)
// https://leetcode.com/problems/sort-array-by-parity/

// function sortArrayByParity (nums) {
//     let even = []
//     let odd = []
//     if (nums == 0) return [0]
//     for (let i = 0; i < nums.length; i++) {
// if (nums[i] % 2 === 0) {
//     even.push(nums[i])
// } else {
//     odd.push(nums[i])
// }
//     }
//     return even.concat(odd)
// };
// console.log(sortArrayByParity([3,1,2,4]));



// 6-masala (leetcode)
// https://leetcode.com/problems/shuffle-string/

// function restoreString(s, indices) {
//   let result = [];
//   for (let i = 0; i < s.length; i++) {
//     result[indices[i]] = s[i];
//   }
//   return result.join('');
// }
// console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3]));
