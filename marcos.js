'use strict'
/*
    Created by: Joseph Matthew R. Marcos
    CMSC 128 Homework 2
    Class: AB-5L
    I use ES6 because I lavet
*/

/*
    function getHammingDistance(string, string):
    Given two strings string1 and string2 of same length (length must never be 0 or
    negative!), the Hamming Distance of those two strings are the number of inversions per
    character need to transform string1 to string2 or vise-versa. Simply put, the Hamming Distance
    of two strings is the number of characters that differ in ith position from position 1 to
    strlen(string1).
*/
const getHammingDistance = (string1, string2) => {

    let hammingDistance = 0;

    if(string1.length !== string2.length) {
        // Check if length of strings are equal
        return new Error('Error! Strings are not equal length!');
    }

    if(typeof string1 !== 'string' && typeof string2 !== 'string') {
        // Check if both parameters are strings
        return new Error('Parameters are not strings!');
    }

    if(string1.length === 0 || string2.length === 0) {
        // Check if one of the parameters have length 0
        return new Error('No empty strings allowed');
    }

    for(let i = 0 ; i < string1.length ; i++) {
        // Iterate through entire string length
        if(string1[i].toLowerCase() !== string2[i].toLowerCase()) {
            hammingDistance++;
        }
    }

    return Number(hammingDistance);

};


/*
    function countSubstrPattern(string, string):
    Given a string original and pattern, we will count the number of occurrence
    of pattern in original.
*/
const countSubstrPattern = (original, pattern) => {

    let substrCount = 0;

    if(typeof original != 'string' && typeof pattern != 'string') {
        // Check if both parameters are string
        return new Error('Error! A parameter is not a string');
    }

    if(original.length === 0) {
        // Check if length of original string is 0
        return new Error('Error! Empty string as first parameter!');
    }

    if(pattern.length > original.length) {
        return 0;
    }

    for(let i = 0 ; i <= original.length - pattern.length ; i++) {

        if(original.substring(i, i + pattern.length) === pattern) {
            substrCount++;
        }
    }

    return Number(substrCount);
};


/*
    function getSkew(string, int):
    Given a genome str of some length q (where q>0), it returns the number of
    Gs minus the number of Cs in the first n nucleotides (q>=n). The value can be zero,
    negative or positive. The first position is one (1) not zero(0) as we typically associate with
    string implementations.
*/
const getSkew = (string, n) => {

    let cCount = 0,
        gCount = 0;

    if(typeof string != 'string' && typeof n != 'number') {
        return new Error('Error! A parameter is not a string');
    }

    if(n <= 0) {
        return new Error('Cannot have ' + n + ' length!');
    }

    for (let i = 0 ; i < n ; i++) {

        // Iterate through entire string until n
        if(string[i].toLowerCase() === 'c') {
            cCount++;
        }
        else if(string[i].toLowerCase() === 'g') {
            gCount++;
        }
    }

    return Number(gCount - cCount);
};


/*
    function getMaxSkewN(string, int):
    Given a genome str of some length q (where q>0), it returns the maximum
    value of the number of Gs minus the number of Cs in the first n nucleotides (q>=n). The
    value can be zero, negative or positive. The first position is one (1) not zero(0) as we
    typically associate with string implementations.
*/
const getMaxSkewN = (string, n) => {

    let myStack = [],
        cCount = 0,
        gCount = 0,
        max = 0;

    if(typeof string != 'string' && typeof n != 'number') {
        return new Error('Error! A parameter is of wrong type!');
    }

    if(n <= 0) {
        return new Error('Error! Cannot have ' + n + ' length!');
    }

    if(string.length === 0) {
        return new Error('Error: Cannot have empty string!');
    }

    n = n + 1;

    // Get all skews of strings between 0 to n
    for(let j = 1 ; j < n ; j++) {
        for (let i = 0 ; i < j ; i++) {
            // Iterate through entire string until j
            if(string[i].toLowerCase() === 'c') {
                cCount++;
            }
            else if(string[i].toLowerCase() === 'g') {
                gCount++;
            }
        }
        myStack.push(gCount - cCount);
        console.log(myStack);
        gCount = cCount = 0;
    }

    // Get the max skew.
    for(let i = 0 ; i < myStack.length ; i++) {
        if(myStack[i] > max) {
            max = myStack[i];
        }
    }

    return Number(max);
};


/*
    function isValidString(string, string):
    Given an alphabet string where all letters are assumed to be unique, this
    function returns true if the string str is a valid string based on the letters of alphabet.
*/
const isValidString = (string, alphabet) => {

    /*
        function isPartOf:
        Determines if unit is a member of set/string
    */
    const isPartOf = (unit, set) => {
        for(let i = 0 ; i < set.length ; i++) {
            if(unit === set[i]) {
                return true;
            }
        }

        return false;
    };

    if(typeof string !== 'string' || typeof alphabet != 'string') {
        // Check if both parameters are strings
        return new Error('Error: Both parameters must be strings');
    }

    if(alphabet.length === 0) {
        // Check if alphabet has 0 length
        return new Error('Error: Second parameter must have contents');
    }

    if(string.length === 0) {
        // Check if string has 0 length
        return new Error('Error: First parameter must have contents');
    }

    for(let i = 0 ; i < string.length ; i++) {
        if(!isPartOf(string[i], alphabet)) {
            return false;
        }
    }

    return true;
};
