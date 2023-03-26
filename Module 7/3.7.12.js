function isEqual(a, b) {
    if (typeof a === "object" && typeof b === "object") {
        if (a.length !== b.length) {
            return false;
        }
        for (let i in a) {
            if (!isEqual(a[i], b[i])) {
                return false;
            }
        }
        return true;
    }
    return a === b;
}

function distinctElements(arr) {
    result = [];
    for (let i = 1; i < arr.length; i++) {
        flag = true;
        for (let j = 0; j < i; j++) {
            if (isEqual(arr[j], arr[i])) flag = false;
        }

        if (flag) result.push(arr[i]);
    }

    result.unshift(arr[0]);

    return result;
}

function unionArrays(arr1, arr2) {
    result = arr1;

    for (let i = 0; i < arr2.length; i++) {
        flag = true;
        for (let j = 0; j < result.length; j++)
            if (isEqual(result[j], arr2[i])) flag = false;
        if (flag) result.push(arr2[i]);
    }

    return result;
}

function createArrUnion(arr, arr1) {
    first_array = distinctElements(arr);
    second_array = distinctElements(arr1);

    result = unionArrays(first_array, second_array);

    return result;
}