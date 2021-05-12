// Given two strings determine if they are anagrams of each other.
// check all the permutations of s1
// and then see if it is equal to s2
// If they are then the strings are anagrams
// If no permutation matched then they are not anagrams
function areAnagrams(s1: string, s2: string): boolean {
    const charCount = new Map<string, number> ();
    for (const char of s1.split('')) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    for (const char of s2.split('')) {
        if (!charCount.has(char)) return false;
        charCount.set(char, charCount.get(char) - 1);
    }

    return Array.from(charCount.values()).every(val => val === 0);
    
}

areAnagrams('year', 'reay')