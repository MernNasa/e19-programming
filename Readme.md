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


# Array inbuilt methods

1. length --- it returns how many values present in an array.
# edit
2. push() ---- it adds an element in the last index.
3. pop()----- it removes an element in the last index
4. unshif()---- it adds an element in the first index.
5. shift()---- it removes an element in the first index.
6. splice()---- it can remove or add the element at a time in any index position.

# Search / Check
7. indexOf() — it returns the index position of an element.

8. lastIndexOf() — it returns the last index position of an element.

9. includes() — it checks whether an element is present in an array.

10. find() — it returns the first element that satisfies a condition.

11. findLast() — it returns the last element that satisfies a condition.

# Add / Remove / Convert
12. concat() — it joins two or more arrays and returns a new array.

13. slice() — it copies a portion of an array into a new array without changing the original array.

14. join() — it converts all array elements into a string and joins them with a separator.

15. flat() — it converts nested arrays into a single-level array.

16. flatMap() — it maps each element and then flattens the result.

# Loop / Iterate
17. forEach() — it executes a function for each element in an array.
18. map() — it creates a new array by changing each element.
19. filter() — it creates a new array containing elements that satisfy a condition.
20. reduce() — it reduces all array elements to a single value.
21. reduceRight() — it reduces all array elements to a single value from right to left.
22. some() — it checks whether at least one element satisfies a condition.
23. every() — it checks whether all elements satisfy a condition.

# Sorting / Reversing
24. sort() — it sorts the elements of an array.

25. reverse() — it reverses the order of elements in an array.

26. toSorted() — it returns a new sorted array without changing the original array.

27. toReversed() — it returns a new reversed array without changing the original array.

# special methods
28. at() — it returns the element at a specified index; it can also access elements from the end using negative indexes.
29. toString() — it converts an array into a string.

# Array static methods
30. Array.isArray() — it checks whether a value is an array.

31. Array.from() — it creates an array from an iterable or array-like object.

32. Array.of() — it creates a new array from the given values.



# ARRAY PROGRAMMING QUESTIONS — FRESHER LEVEL

# 🟢 EASY LEVEL
1. Find the Largest Element
Given an integer array, find the largest element without using built-in sorting methods.

Example:

Input: [10, 25, 7, 45, 18] Output: 45






2. Find the Smallest Element
Find the smallest element in an integer array.

Example:

Input: [12, 5, 18, 3, 9] Output: 3







3. Calculate Sum and Average
Find the sum and average of all elements in an array.
Example:
Input: {10, 20, 30, 40, 50}

Sum: 150 Average: 30.0

4. Count Even and Odd Numbers
Count how many even and odd numbers are present in an array.

Example:
Input: {10, 15, 22, 7, 8, 13}
Even: 3 Odd: 3

5. Search an Element
Given an array and a target value, check whether the target exists in the array. If it exists, print its index.

Example:

Input: {10, 20, 30, 40, 50} Target: 30

Output: Element found at index 2




# 🟡 MEDIUM LEVEL
6. Reverse an Array
Reverse the elements of an array without creating another array.

Example:

Input: {10, 20, 30, 40, 50} Output: {50, 40, 30, 20, 10}

7. Find the Second Largest Element
Find the second largest distinct element in an array without using sorting.

Example:

Input: {10, 25, 7, 45, 25, 18} Output: 25

8. Count Frequency of Each Element
Find how many times each element occurs in an array.
Example:
Input: {10, 20, 10, 30, 20, 10}

Output: 10 → 3 20 → 2 30 → 1

9. Print Duplicate Elements
Find and print all duplicate elements in an array.

Example:
Input: {10, 20, 30, 20, 40, 10, 50}

Output: 10 20

10. Remove Duplicate Elements
Create an array containing only unique elements.

Example:

Input: {10, 20, 10, 30, 20, 40}

Output: {10, 20, 30, 40}

# 🟠 MEDIUM+ LEVEL
11. Find the Missing Number
An array contains numbers from 1 to n, but one number is missing. Find the missing number.

Example:

Input: {1, 2, 3, 5, 6} Output: 4

12. Move All Zeros to the End
Move all 0s to the end of the array while maintaining the relative order of the non-zero elements.

Example:

Input: {0, 10, 0, 20, 30, 0, 40}

Output: {10, 20, 30, 40, 0, 0, 0}

13. Find Common Elements Between Two Arrays
Find the elements that are present in both arrays.

Example:

Array 1: {10, 20, 30, 40, 50} Array 2: {30, 40, 60, 70}

Output: 30 40

14. Separate Positive and Negative Numbers
Separate the positive and negative numbers present in an array.

Example:

Input: {10, -5, 20, -8, -2, 30}

Output: Positive: 10 20 30 Negative: -5 -8 -2

15. Find the Pair with Given Sum
Given an array and a target sum, find two elements whose sum is equal to the target.

Example:

Input: Array = {10, 5, 20, 15, 7} Target = 22

Output: 15 + 7 = 22