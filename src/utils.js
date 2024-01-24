// Your code here
export function isPalindrome(word){
    let wo = ''
    let rd = ''
    for(let i = 0; i < word.length/2 ; i++ ){
        wo += word[i]
        rd += word[word.length-(i+1)]
    }
    if(wo){
        return (wo.toLocaleLowerCase() === rd.toLocaleLowerCase()) ? true : false; 
    }
    return false
    
}
