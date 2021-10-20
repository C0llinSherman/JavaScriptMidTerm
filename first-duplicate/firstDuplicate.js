function firstDuplicate(array) {
    let matches = []
    for (let i = 0; i < array.length; i++) {
        let count = 0
        for (let j = 0; j < 10; j++) {
            if (array[i] == array[j]) {
                count += 1
                if (count === 2) {
                    matches.push(array[i])
                    count = 0
                }
            }
        }
    }
    console.log(matches)
    if (matches.length == 0) {
        return -1
    }
    else {
        for (let i = 0; i < matches.length; i++) {
            let count = 0
            for (let j = 0; j < 10; j++) {
                if (array[i] == array[j]) {
                    count += 1
                    if (count === 2) {
                        matches.push(array[i])
                        return matches[1]
                    }
                }
            }
        }
        return matches[0]
    }
}


/* function firstDuplicate(array) {
    console.log(array)
    let final = -1
    let matches = [0]
    let newArray = []
    let index = []
    for (let j = 0; j < 10; j++) {
        let count = 0
        for (let i = 0; i < array.length; i++) {
            if (array[i] == j) {
                count += 1
                if (count === 2) {
                    matches.unshift(array[i])
                    count = 0
                }
            }
        }
    }
    console.log(matches)
    if (matches[0] == 0) {
        return -1
    }
    else {
        let count = 0
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < matches.length; j++) {
                if (matches[j] == array[i]) {
                    count += 1

                    if (count == 2) {
                        console.log(matches[j])
                        return matches[j]
                    }
                }
            }
        }
        console.log(index)
        console.log(matches[0])
        return matches[0]
    }
} */



/* Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

    Example:
      For array = [2, 3, 3, 1, 5, 2], the output should be
      firstDuplicate(a) == 3.

    There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the answer is 3.

    For array = [2, 4, 3, 5, 1], the output should be firstDuplicate(array) == -1. */

