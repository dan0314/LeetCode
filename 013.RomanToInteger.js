/**
 * Given a roman numeral, convert it to an integer.
 * Input is guaranteed to be within the range from 1 to 3999.
 * 
 * 
 * 罗马数字采用七个罗马字母作数字、即Ⅰ（1）、X（10）、C（100）、M（1000）、V（5）、L（50）、D（500）。
 *     1.相同的数字连写，所表示的数等于这些数字相加得到的数，如 Ⅲ=3；
 *     2.相同的数字连写，所表示的数等于这些数字相加得到的数，如 Ⅲ=3；
 *     3.小的数字（限于 Ⅰ、X 和 C）在大的数字的左边，所表示的数等于大数减小数得到的数，如 Ⅳ=4、Ⅸ=9
 *     4.在一个数的上面画一条横线，表示这个数增值 1,000 倍，如 （此处被IDE马赛克了） =5000。
 * 
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    
    var numArr = toNumArr(s),
        total = numArr[0],
        len = numArr.length;
    for(var i = 1; i < len;i++){
        var cur = numArr[i],
            pre = numArr[i - 1];
        if (cur <= pre) {  
            total += cur;  
        } else {  
            total = total - pre * 2 + cur;  
        }  
    }
    return total;
};


function toNumArr(s){
    var roman = {
        'I': 1,
        'X': 10,
        'C': 100,
        'M': 1000,
        'V': 5,
        'L': 50,
        'D': 500
    };
    return s.split('').map(v => roman[v]);
}
romanToInt('CMLII');