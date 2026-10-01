# what is string in js?
A string is a sequence of characters used to represent text.
Note: JavaScript strings are primitive values and are immutable, meaning you cannot change the characters of an existing string directly.

Ways to Create a String
There are 3 common ways:
1. Using double quotes " "
2. Using single quotes ' '
3. Using template literals ` `
NOTE:Template literals are especially useful for string interpolation and multi-line strings.

# JavaScript String Inbuilt Methods
1. length	Get string length
2. charAt()	Get character at index
3. at()	Get character at index . it also accepts negative indexing.
4. indexOf()	Find first occurrence
5. lastIndexOf()	Find last occurrence
6. includes()	Check if text exists
7. startsWith()	Check beginning
8. endsWith()	Check ending
9. slice()	Extract part
10. substring()	Extract part
11. toUpperCase()	Convert to uppercase
12. toLowerCase()	Convert to lowercase
13. trim()	Remove whitespace from both sides
14. trimStart()	Remove beginning whitespace
15. trimEnd()	Remove ending whitespace
16. replace()	Replace first matching text
17. replaceAll()	Replace all matching text
18. split()	Convert string into array
19. concat()	Join strings
20. repeat()	Repeat string
21. padStart()	Add padding at beginning
22. padEnd()	Add padding at end
23. localeCompare()	Compare strings
24. toString()	Convert to string
25. charCodeAt() Returns the UTF-16 code unit of a character
26. String.fromCharCode() Returns Character from a UTF-16 code




#  problems

1. find the length of a string without length method.
2. Reverse a string
3. Check if a string is a palindrome
4. Count vowels and consonants
5. Count the frequency of each character
6. Remove duplicate characters ."programming" → "progamin"
7. Find the first non-repeating character."aabbcdde" → "c"
8. Find the first repeating character. "abcdbea" → "b"
9. Check whether two strings are anagrams.
 "listen", "silent" → true
10. Count the number of words in a string
// "JavaScript is awesome" → 3




 
11. Reverse the words in a sentence
// "I love JavaScript"
// → "JavaScript love I"

12. Find the longest word in a sentence
// "I love programming" → "programming"

13. Capitalize the first letter of every word
// "hello world" → "Hello World"

14. Check if a string contains only digits
// "12345" → true
// "123a5" → false

15. Find the most frequent character
// "javascript" → "a"

16. Remove spaces from a string
// "hello world js" → "helloworldjs"

17. Count occurrences of a specific character
"banana", 'a' → 3

18. Find the second most frequent character
"aabbbcc" → "a"

19. Remove all occurrences of a given character
"programming", 'm' → "prograing"

20. Check if one string is a rotation of another
"abcd", "cdab" → true

21. Find duplicate characters
"programming" → "r, g, m"

22. Find the longest substring without repeating characters
"abcabcbb" → "abc"

23. Find the shortest word in a sentence
"I love JavaScript" → "I"

24. Count uppercase, lowercase, digits, and special characters
"Hello@123" → uppercase:1, lowercase:4, digits:3, special:1

25. Toggle the case of every character
"Hello World" → "hELLO wORLD"

26. Replace every space with a hyphen
"hello world js" → "hello-world-js"

27. Find all words that occur more than once
"java is easy and java is popular" → "java, is"

28. Check if two strings are exactly equal without using ===
"hello", "hello" → true

29. Find the longest palindromic substring
"babad" → "bab" / "aba"

30. Compress consecutive repeated characters
"aaabbccccd" → "a3b2c4d1"

31. Find the character with the first highest frequency
"mississippi" → "i"