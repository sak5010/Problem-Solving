function solution(arr1, arr2) {
    const matrix = [];
    for (let i = 0; i < arr1.length; i++) {
        const row = [];
        for (let j = 0; j < arr1[0].length; j++) {
            row.push(arr1[i][j] + arr2[i][j]);
        }
        matrix.push(row);
    }
    return matrix;
}