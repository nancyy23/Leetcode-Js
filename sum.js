var getConcatenation = function(nums) {
    let ans = [];
    for(let i = 0; i < nums.length * 2; i++) {
        ans[i] = nums[i % nums.length];
    }
    return ans;
};