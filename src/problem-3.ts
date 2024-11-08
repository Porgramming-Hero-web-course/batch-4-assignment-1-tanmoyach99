// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

// Example:

// Input: "I love typescript", "typescript"
// Output: 1



const countWordOccurrences=(sentence:string,word:string):number=>{

    let sentenceToLowercase=sentence.toLowerCase()
    let wordToLowercase=word.toLowerCase();

    let sentenceWords=sentence.split(" ")
   return  sentenceWords.filter(word=>word===wordToLowercase).length
    
}


const str:string="i love typescript "
const wrd:string="typescript"


console.log(countWordOccurrences(str,wrd))