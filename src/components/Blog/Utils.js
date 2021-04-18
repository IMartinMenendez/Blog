export function transformArray(collection, num) {
    const newArray = [];
    let otherArray = [];

    for (let i = 1; i <= collection.length; i++) {

        if (i % num === 0) {
            otherArray.push(collection[i - 1]);
            newArray.push(otherArray);
            otherArray = [];

        } else {
            otherArray.push(collection[i - 1]);
        }
    }
    return newArray;
}