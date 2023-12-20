//  The function takes a single parameter str, which represents the input string containing words.
function countword(string){

    const words=string.split(" ");

    const newword=new Map();

    for (word of words){
        if(newword.has(word)){
        newword.set(word, newword.get(word) + 1);
    }
// // if (newword.has(word)) {
//     const currentCount = newword.get(word); // Get current count
//     const updatedCount = currentCount + 1;   // Increment count
//     newword.set(word, updatedCount);         // Set updated count in Map
// }



       else {
            newword.set(word, 1);
        }
    }

return newword;
}

const sentance ="I am Amin. I am learning web development from PW Skills."

console.log(countword(sentance));