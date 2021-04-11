function insertSort(len) {
    let len = arr.length
    for(let i = 0; i < len; i++) {
        for(let j = i; j > 0; j --) {
            if(a[j] < [i]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }else {
                break
        }
        }
    }
    return arr
}


var arr = [23, 44, 23, 90, 87, 100]
var result = insertSort(arr)
console.log(result)

/**
 * 外出循环表示排好的有序序列，内存循环将第i位与前面的i-1位进行比较，然后插入合适的位置。
 */
