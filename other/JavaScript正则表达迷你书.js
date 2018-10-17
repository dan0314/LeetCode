/**
 * 横向模糊匹配
 * 横向模糊指的是，一个正则可匹配的字符串的长度不是固定的，可以是多种情况的。
 * 其实现的方式是使用量词。譬如 {m,n}，表示连续出现最少 m 次，最多 n 次。
 * 比如正则 /ab{2,5}c/ 表示匹配这样一个字符串:第一个字符是 "a"，接下来是 2 到 5 个字符 "b"，最后是字符 "c"。
 */
console.log('横向模糊匹配')
const regex1_1 = /ab{2,5}c/g;                                  // g代表全局 global缩写
const string1_1 = 'abc abbc abbbc abbbbc abbbbbc abbbbbbc';
console.log(string1_1.match(regex1_1));
console.log('\n');

/**
 * 纵向模糊匹配
 * 纵向模糊指的是，一个正则匹配的字符串，具体到某一位字符时，它可以不是某个确定的字符，可以有多种 可能。
 * 其实现的方式是使用字符组。譬如 [abc]，表示该字符是可以字符 "a"、"b"、"c" 中的任何一个。
 * 比如 /a[123]b/ 可以匹配如下三种字符串: "a1b"、"a2b"、"a3b"。
 */
console.log('纵向模糊匹配');
const regex1_2 = /a[123]b/g;
const string1_2 = 'a0b a1b a2b a3b a4b';
console.log(string1_2.match(regex1_2));
console.log('\n');


/**
 * 字符组
 * 例如 [abc]，表示匹配一个字符，它可以是 "a"、"b"、"c" 之一。
 */


/**
 * 范围表示法
 * 比如 [123456abcdefGHIJKLM]，可以写成 [1-6a-fG-M]。用连字符 - 来省略和简写。
 * 因为连字符有特殊用途，那么要匹配 "a"、"-"、"z" 这三者中任意一个字符 [-az] 或 [az-] 或 [a\-z]
 */

/**
 * 排除字符组
 * 纵向模糊匹配，还有一种情形就是，某位字符可以是任何东西，但就不能是 "a"、"b"、"c"。
 * 此时就是排除字符组(反义字符组)的概念。例如 [^abc]，表示是一个除 "a"、"b"、"c"之外的任意一个字 符。字符组的第一位放 ^(脱字符)，表示求反的概念。
 */

/**
 * 常见简写形式
 * \d 【表示 [0-9]。表示是一位数字。】
 * \D 【表示 [^0-9]。表示除数字外的任意字符。】
 * \w 【表示 [0-9a-zA-Z_]。表示数字、大小写字母和下划线。】
 * \W 【表示 [^0-9a-zA-Z_]。非单词字符。】
 * \s 【表示 [ \t\v\n\r\f]。表示空白符，包括空格、水平制表符、垂直制表符、换行符、回车符、换页 符。】
 * \S 【表示 [^ \t\v\n\r\f]。 非空白符。】
 * .  【表示 [^\n\r\u2028\u2029]。通配符，表示几乎任意字符。换行符、回车符、行分隔符和段分隔符 除外。】
 * 
 * 如果要匹配任意字符怎么办?可以使用 [\d\D]、[\w\W]、[\s\S] 和 [^] 中任何的一个。
 */
console.log('常见简写形式');
const regex1_3 = /\d\D\w\W\s\S.[^]/g;
const string1_3 = 'xiaos @#￥%……&*（）。.sFJKL';
console.log(string1_3.match(regex1_3));     //null'
console.log('\n');


/**
 * 量词的简写形式
 * {m,} 【表示至少出现 m 次。】
 * {m}  【等价于 {m,m}，表示出现 m 次。】
 * ?    【等价于 {0,1}，表示出现或者不出现。】
 * +    【等价于 {1,}，表示出现至少一次。】
 * *    【等价于 {0,}，表示出现任意次，有可能不出现。】
 */


/**
 * 贪婪匹配和惰性匹配
 * 通过在量词后面加个问号就能实现惰性匹配
 * {m,n}? {m,}? ?? +? *?
 */
console.log('贪婪匹配和惰性匹配');
const regex1_4 = /\d{2,5}/g;          // 表示数字连续出现 2 到 5 次。会匹配 2 位、3 位、4 位、5 位连续数字。
const string1_4 = '123 1234 12345 123456';
console.log(string1_4.match(regex1_4));

const regex1_5 = /\d{2,5}?/g;          //  2 到 5 次都行，当 2 个就够的时候，就不再往下尝试了。
const string1_5 = '23 1234 12345 123456';
console.log(string1_5.match(regex1_5));
console.log('\n');


/**
 * 多选分支 |
 */
console.log('多选分支');
const regex1_6 = /good|nice/g;
const string1_6 = 'good idea, nice try.';
console.log(string1_6.match(string1_6));
// * 但有个事实我们应该注意，比如我用 /good|goodbye/，去匹配 "goodbye" 字符串时，结果是 "good": 而把正则改成 /goodbye|good/，结果是:
console.log('\n');


/**
 * 匹配 16 进制颜色值
 * 
 * #ffbbad
 * #Fc01DF
 * #FFF
 * #ffE
 * 表示一个 16 进制字符，可以用字符组 [0-9a-fA-F]。
 */
console.log('匹配 16 进制颜色值');
const regex1_7 = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;
const string1_7 = '#ffbbad #Fc01DF #FFF #ffE';
console.log(string1_7.match(regex1_7));
console.log('\n');


/**
 * 匹配时间
 */
console.log('匹配时间');
const regex1_8 = /^([01][0-9]|[2][0-3]):[0-5][0-9]$/;     // 正则中使用了 ^ 和 $，分别表示字符串开头和结尾
const string1_8_1 = '03:19';
console.log(regex1_8.test(string1_8_1));
// 如果也要求匹配 "7:9"，也就是说时分前面的 "0" 可以省略。
const regex1_8_2 = /^(0?[0-9]|1[0-9]|[2][0-3]):(0?[0-9]|[1-5][0-9])$/;
console.log(regex1_8_2.test('7:9'));
console.log(regex1_8_2.test('02:07'));
console.log('\n');


/**
 * window 操作系统文件路径
 *   F:\study\javascript\regex\regular expression.pdf
 *   F:\study\javascript\regex\
 *   F:\study\javascript
 *   F:\study\javascript
 */

const regex1_9 = /^[a-zA-Z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/]+)?$/;
console.log('window 操作系统文件路径');
console.log(regex1_9.test('F:\\study\\javascript\\regex\\regular expression.pdf'));
console.log(regex1_9.test('F:\\study\\javascript\\regex\\'));
console.log(regex1_9.test('F:\\'));
console.log('\n');




/**
 * 匹配id
 * <div id="container" class="main"></div>
 */

console.log('匹配id');
const regex1_10 = /".*?"/;
const string1_10 = '<div id="container" class="main"></div>';
console.log(string1_10.match(regex1_10)[0]);   // 据说这种效率低 但是浏览器测试一下感觉没啥区别
const regex1_10_1 = /"[^]*?"/;
console.log(string1_10.match(regex1_10_1)[0]);
console.log('\n');


/**
 * 位置匹配
 * ES5中共有六个锚
 * ^ $ \b \B (?=p) (?!p)
 * ^ (脱字符) 匹配开头 在多行匹配中匹配行开头
 * $ (美元符号) 匹配结尾 在多行匹配中匹配行结尾
 * \b 单词边界 具体就是\w \W 之间的位置 也包括\w 与^ 之间的位置 和\w 与$之间的位置
 * (?=p) 其中p是一个子模式，即p前面的位置，或者说，该位置后面的字符要匹配p
 *      比如(?=l) 表示l字符前面的字符
 *      (?!p) 就是 (?=p)反面意思
 */
console.log('把字符串的开头和结尾用‘#’替换');
console.log('hello'.replace(/^|$/g, '#'));
console.log('\n');
console.log('多行匹配模式');
console.log('I\nlove\njavascript'.replace(/^|$/gm, '#'));
console.log('\n');
console.log('\\b');
console.log('[JS] Lesson_01.mp4'.replace(/\b/g, '#'));
console.log('\n');
console.log('(?=p)');
console.log('hello'.replace(/(?=l)/g, '#'));
console.log('hello'.replace(/(?!l)/g, '#'));
console.log('hello'.replace(/(?<=l)/g, '#'));
console.log('hello'.replace(/(?<!l)/g, '#'));
console.log('\n')


/**
 * 位置特性
 * 'hello' == '' + 'h' + 'e' + 'l' + 'l' + 'o' + '';
 * 也等价于 'hello' == '' + '' + 'hello';
 */
console.log('位置特性');
console.log(/^^hello$$$/.test('hello'));
console.log(/(?=he)^^he(?=\w)llo$\b\b$/.test('hello'));
console.log('\n');

/**
 * 数字千位分隔符表示法
 */
console.log('数字千位分隔符表示法');
console.log('弄出最后一个逗号');
console.log('12345678'.replace(/(?=\d{3}$)/g, ','));
console.log('弄出所有的逗号');
console.log('12345678'.replace(/(?!^)(?=(\d{3})+$)/g, ','));
console.log('支持其他形式');
console.log('12345678 123456789'.replace(/\B(?=(\d{3})+\b)/g, ','));
console.log('格式化货币');
function format(num) {
    return num.toFixed(2).replace(/\B(?=(\d{3})+\b)/g, ',').replace(/^/, '$$ ');
}
console.log(format(2004));
console.log('\n');
