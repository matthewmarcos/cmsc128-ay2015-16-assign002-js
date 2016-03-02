'use strict'
/*
    Created by: Joseph Matthew R. Marcos
    CMSC 128 Homework 2
    Class: AB-5L
*/

// We use ES6 because we are cool
/*
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
        return console.error('Parameters are not of equal length!');
    }

    if(typeof string1 !== 'string' && typeof string2 !== 'string') {
        // Check if both parameters are strings
        return console.error('Parameters are not strings!');
    }

    if(string1.length === 0 || string2.length === 0) {
        // Check if one of the parameters have length 0
        return console.error('No empty strings allowed');
    }

    for(let i = 0 ; i < string1.length ; i++) {
        if(string1[i].toLowerCase() !== string2[i].toLowerCase()) {
            hammingDistance++;
        }
    }

    return Number(hammingDistance);

};
