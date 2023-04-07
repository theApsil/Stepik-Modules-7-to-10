newBooks.calcGroupFunction = function(aggregateDict, value)
{
    if ('sum' in aggregateDict)
    {
        return aggregateDict['sum'] + value;
    }
    if ('count' in aggregateDict)
    {
        return aggregateDict['count'] + 1;
    }
    if ('avg' in aggregateDict)
    {
        return [aggregateDict.avg[0] + value, aggregateDict.avg[1] + 1];
    }
    if ('min' in aggregateDict)
    {
        if (aggregateDict['min'] < value)
            return aggregateDict['min'];
        else
            return value;
    }
    if ('max' in aggregateDict)
    {
        if (aggregateDict['max'] < value)
            return value;
        else
            return aggregateDict['max'];
    }
}

newBooks.groupBy = function (aggregateField, aggregateFunction)
{
    if (!this.getAllKey().includes(aggregateField) || !this.getAllKey().includes(aggregateFunction.field))
        return "Ошибка в названии поля";

    let distinctField = {};
    for (let i = 0; i < this[aggregateField].length; i++)
    {
        let current = this[aggregateField][i];
        if(current in distinctField)
        {
            if (aggregateFunction.groupFunction === 'avg')
            {
                distinctField[current][aggregateFunction.groupFunction] = this.calcGroupFunction(distinctField[current], this[aggregateFunction.field][i]);
            }
            else
            {
                distinctField[current][aggregateFunction.groupFunction] = this.calcGroupFunction(distinctField[current], this[aggregateFunction.field][i]);
            }
        }
        else
        {
            switch (aggregateFunction.groupFunction)
            {
            case 'count':
                distinctField[current] = {field: aggregateFunction.field};
                distinctField[current][aggregateFunction.groupFunction] = 1;
            break;
            case 'avg':
                distinctField[current] = {field: aggregateFunction.field};
                distinctField[current][aggregateFunction.groupFunction] = [this[aggregateFunction.field][i], 1];
            break;
                default:
                distinctField[current] = {field: aggregateFunction.field};
                distinctField[current][aggregateFunction.groupFunction] = this[aggregateFunction.field][i];
            break;
            }
        }
    }

    if (Object.values(aggregateFunction).includes('avg'))
    {
        for (let key in distinctField)
        {
            distinctField[key].avg = Math.round(distinctField[key].avg[0] / distinctField[key].avg[1] * 100) / 100;
        }
    }

    this[aggregateField + '_distinct'] = [];
    let newField = `${aggregateFunction.field}_${aggregateFunction.groupFunction}`;
    this[newField] = [];
    for(let key in distinctField)
    {
        this[aggregateField + '_distinct'].push(key);
        this[newField].push(distinctField[key][aggregateFunction.groupFunction]);
    }

    return true;
}