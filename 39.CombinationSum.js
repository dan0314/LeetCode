
var combinationSum = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    return combinationSumDFS(candidates, target, 0, 0, [], []);
}

function combinationSumDFS(candidates, target, startIdx, curSum, curComb, sumCombs) {
    for (let i = startIdx; i < candidates.length; i++) {
        let val = candidates[i];
        let newSum = curSum + val;

        if (newSum === target) {
            sumCombs.push(curComb.concat(val))
            break;
        }
        if (newSum < target) {
            combinationSumDFS(candidates, target, i, newSum, curComb.concat(val), sumCombs);
        }
    }

    return sumCombs;

}
// console.log(combinationSum([2, 3, 6, 7], 7));
// console.log(combinationSum([2, 3, 5], 8));
// console.log(combinationSum([1, 2], 3));
console.log(combinationSum([1, 2], 4));


// 最终还是参考了别的递归方式……