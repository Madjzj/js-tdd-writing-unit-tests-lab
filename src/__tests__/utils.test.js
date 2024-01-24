// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", ()=>{
    it("detects if an inputted word spelt the same front to back",()=>{
        const word = "racecar"
        expect(isPalindrome(word)).toBe(true)
    })
})

describe("isPalindrome", ()=>{
    it("returns false if the word is not a palindrome",()=>{
        const word = "car"
        expect(isPalindrome(word)).toBe(false)
    })
})

describe("isPalindrome", ()=>{
    it("returns true reguardless of case",()=>{
        const word = "RaceCar"
        expect(isPalindrome(word)).toBe(true)
    })
})

describe("isPalindrome", ()=>{
    it("returns false for an empty string",()=>{
        const word = ""
        expect(isPalindrome(word)).toBe(false)
    })
})

