// // Create an array that contains the words in the sentence
// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

// /*   
//     The addExcitement function should be an impure function, and accept
//     the array as the sole argument. It should iterate over the array
//     and output the words to the browser console.
// */
// function addExcitement (theWordArray) {

//     // Each time the for loop executes, you're going to add one more word to this string
//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++) {
//   add ! every 3rd word    
//         if( (i+1) % 3 === 0){
//        buildMeUp=   buildMeUp + ` `+ theWordArray[i]+`!`}
//        // Concatenate the new word onto buildMeUp
//   else {
// buildMeUp = buildMeUp+ ` ` + theWordArray[i];

// }
//         // Print buildMeUp to the console
//         console.log(buildMeUp)
//     }

// }

// // Invoke the function and pass in the array
// addExcitement(sentence)


let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

 function addExcitement (theWordArray,punctuation, multiply) {

//     // Each time the for loop executes, you're going to add one more word to this string
     let buildMeUp = ""

     for (let i = 0; i < theWordArray.length; i++) {
       
         if( (i+1) % 3 === 0){
        buildMeUp=   buildMeUp + ` `+ theWordArray[i]+(punctuation.repeat(multiply))}
//        // Concatenate the new word onto buildMeUp
   else {buildMeUp = buildMeUp+ ` ` + theWordArray[i];
 //   add ! every 3rd word
 }
//         // Print buildMeUp to the console
         console.log(buildMeUp)
     }
    }
 

// // Invoke the function and pass in the array
 addExcitement(sentence,"?",4)