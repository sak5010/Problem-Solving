// 1. wallpaper[i]를 split해서 배열로 만들어 2차원 배열로 만든다.
// 2. 2차원 배열을 순회하면서 처음 만나는 #의 lux, luy를 저장한다. 이 때, rdx, rdy은 각각 lux+1, luy+1로 저장한다.
// 3. 그 다음 #을 만날 때 마다 rdx, rdy를 최대로 유지하며 갱신해준다. (+1 실수 하지 않기)
//    이 #이 luy 보다 작은게 있으면 luy를 그만큼 줄인다.
// 4. result에 [lux, luy, rdx, rdy]를 넣고 반환
function solution(wallpaper) {
    for (let i = 0; i < wallpaper.length; i++) {
        wallpaper[i] = wallpaper[i].split('');
    }
    let lux, luy;
    let rdx, rdy;
    let isFirst = true;
    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[0].length; j++) {
            if (isFirst && wallpaper[i][j] === "#") {
                isFirst = false;
                lux = i;
                luy = j;
                rdx = lux + 1;
                rdy = luy + 1;
            }
            if (!isFirst && wallpaper[i][j] === "#") {
                rdx = i + 1 > rdx ? i + 1 : rdx;
                rdy = j + 1 > rdy ? j + 1 : rdy;
                luy = j < luy ? j : luy;
            }
        }
    }
    return [lux, luy, rdx, rdy];
}