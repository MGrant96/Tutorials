// Given two strings determine if they are anagrams of each other.
// check all the permutations of s1
// and then see if it is equal to s2
// If they are then the strings are anagrams
// If no permutation matched then they are not anagrams
function areAnagrams(s1, s2) {
    var charCount = new Map();
    for (var _i = 0, _a = s1.split(''); _i < _a.length; _i++) {
        var char = _a[_i];
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    for (var _b = 0, _c = s2.split(''); _b < _c.length; _b++) {
        var char = _c[_b];
        if (!charCount.has(char))
            return false;
        charCount.set(char, charCount.get(char) - 1);
    }
    return Array.from(charCount.values()).every(function (val) { return val === 0; });
}
areAnagrams('year', 'reay');
