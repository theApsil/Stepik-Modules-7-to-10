newBooks.where = function()
{
    for(let i in arguments)
    {
        if(!(arguments[i]["key"] in books)) return "Ошибка в названии поля";
    }

    intersection = function(arr1, arr2)
    {
        result = [];
        for(let i in arr1)
        {
            if(arr2.includes(arr1[i])) result.push(arr1[i]);
        }
        return result;
    }

    indexTrue = [];
    for(let i in this[arguments[0]["key"]])
        indexTrue.push(parseInt(i));
        for(let i in arguments)
        {
        arrTrue = [];
        for (let j = 0; j < this[arguments[i]["key"]].length; j++)
        {
            if (this.getResultLogOpr(this[arguments[i]["key"]][j],arguments[i]["operation"],arguments[i]["value"]))             {
                arrTrue.push(j);
            }
        }

        indexTrue = intersection(indexTrue, arrTrue);
    }

    keysThis = this.getAllKey();

    for (let k in keysThis)
    {
    let newValue = [];
    for (let i in indexTrue)
    {
    newValue.push(this[keysThis[k]][indexTrue[i]]);
    }
    this[keysThis[k]] = newValue;
    }

}