function search(nameList, searchTerm) {
    let newList = []
    let FinalArray = []
    searchTerm = searchTerm.toLowerCase()
    for (let index = 0; index < nameList.length; index++) {
        newList.push(nameList[index].toLowerCase())
    }
    for (let i = 0; i < newList.length; i++) {
        if (newList[i].search(searchTerm) !== -1) {
            FinalArray.push(nameList[i])
        }
    }
    return FinalArray
}



/* 2.  Given an array of names, write a function named search which takes two parameters: a list of names
    and a string to search for, and returns an array of all the names that contain the specified string.
    Your function should be case insensitive.

    function search(nameList, searchTerm) {...}

    Example:
       search(['Bryce', 'Ron', 'Sarah', 'Brett', 'Steven', 'Benjamin'], 'B') => ['Bryce', 'Brett', 'Benjamin']
       search(['Bryce', 'Ron', 'Sarah', 'Brett', 'Steven', 'Benjamin'], 'br') => ['Bryce', 'Brett']
       search(['Bryce', 'Ron', 'Sarah', 'Brett', 'Steven', 'Benjamin'], 'bry') => ['Bryce']

    Hint:  You can get an all uppercase copy of a string by calling .toUpperCase(), or an all lowercase copy by calling .toLowerCase() */