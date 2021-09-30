

module.exports = (list, limit, by) => {

    var start = 0, end = limit - 1, size = list.length, filenum = 0, splitedList = [], first = 0

    // handle case limit larger than size
    if(limit >= size) {
        splitedList[filenum] = [first, end]
    }

    while (start < size) {

        var repetitionNum = 0

        if (compare(list[end], list[end + 1], by)) {

            repetitionNum = lookBack(end, list, by)

            //if(repetitionNum === 0)
            repetitionNum++

            // while (start <= end - repetitionNum) {
            //     //   this.stick(this.keyList[start], filenum)
            //     start++
            // }

            splitedList[filenum] = [first, end - repetitionNum]

            first = start = end - repetitionNum + 1 

            let temp = end + limit
            
            end = temp <= size ? temp : size - 1

            filenum++

        } else {

            splitedList[filenum] = [first, end]

            start = first = end + 1

            // while (start <= end) {
            //     //this.stick(this.keyList[start], filenum)
            //     start++
            // }

            var temp = end + limit

            end = temp <= size ? temp : size - 1


            filenum++

        }
    }

    return splitedList
}


const lookBack = (start, list, by) => {

    if (start < 0)
        return 0
    if (!compare(list[start], list[start - 1], by)) {
        return 0
    }
    return lookBack(start - 1, list, by) + 1
}

const compare = (obj1, obj2, by) => {

    if ( typeof obj1 == 'undefined' || typeof obj2 == 'undefined' )
        return false

    let str1 = getValue(obj1, by),
        str2 = getValue(obj2, by)

    return str1 === str2
}

const getValue = (obj, keys) => {
    let arr = []
    for (let key of keys)
        arr.push(obj[key])
    return arr.join('.')
}