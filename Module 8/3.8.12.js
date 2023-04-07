// метод меняет местами k-ый и p-ый элементы массива каждого поля
newBooks.change = function(k, p) {
    let allKey = this.getAllKey();
    for(let key in allKey) {
        let w = this[allKey[key]][k];
        this[allKey[key]][k] = this[allKey[key]][p];
        this[allKey[key]][p] = w;
    }
}
function doCompare (elem1, elem2, sortOrder)
{
    switch (sortOrder)
    {
    case 'asc':
        if (elem1 > elem2) return true;
    else return false;
        break;
    case 'desc':
        if (elem1 < elem2) return true;
    else return false;
        break;
    }
}
// возвращает true, если элементы менять местами надо, false - в противном случае
newBooks.isCompareOrder = function(n, arrCompare) {
    for(let k = 0; k < arrCompare.length; k += 2)
    {
        //if(this[arrCompare[k]][n] > this[arrCompare[k]][n + 1])
        if (doCompare(this[arrCompare[k]][n], this[arrCompare[k]][n + 1], arrCompare[k+1]))
        {
            return true;
        }
        else if(this[arrCompare[k]][n] === this[arrCompare[k]][n + 1])
        {
            continue;
        }
        else
        {
            return false;
        }
    }
    return false
}

newBooks.sorted = function() {
    for (let i = 0; i < arguments.length; i+=2)
    if (!(arguments[i] in newBooks)) return "Ошибка в названии поля";

    let n = this[arguments[0]].length;
    for(let i = 0; i < n - 1; i += 1) {
        for (let j = 0; j < n - i - 1; j++) {
            if (this.isCompareOrder(j, arguments)) {
                newBooks.change(j, j + 1);
            }
        }
    }
    return true;
}