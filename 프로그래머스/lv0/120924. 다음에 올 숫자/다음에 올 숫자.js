function solution(common) {
    if ( (common[2] - common[1]) === (common[1] - common[0]) ) { // 등차수열
        return common[common.length-1] + (common[1] - common[0]);
    } else { // 등비수열
        return common[common.length-1] * (common[1] / common[0]);
    }
}