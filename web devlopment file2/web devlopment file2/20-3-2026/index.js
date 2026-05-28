function findMax(arr) {
    if (arr.length === 0) return null;

    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Example
console.log(findMax([3, 7, 2, 9, 5]));

function capitalizeWords(str) {
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

// Example
console.log(capitalizeWords("welcome to javascript"));


function printCharFrequency(str) {
    let freq = {};

    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for (let key in freq) {
        console.log(`${key}:${freq[key]}`);
    }
}

// Example
printCharFrequency("hello");