const findStartIndex = (park) => {
    const parkColLen = park[0].length;
    for (let i = 0; i < park.length; i++) {
        for (let j = 0; j < parkColLen; j++) {
            if (park[i][j] === "S") return [i, j];
        }
    }
}

const isObstacle = (park, afterOperationRow, afterOperationCol, nextRowPosition, nextColPosition) => {
    let startRow, endRow;
    let startCol, endCol;
    if (afterOperationRow <= nextRowPosition) {
        startRow = afterOperationRow;
        endRow = nextRowPosition;
    } else {
        startRow = nextRowPosition;
        endRow = afterOperationRow;
    }
    if (afterOperationCol <= nextColPosition) {
        startCol = afterOperationCol;
        endCol = nextColPosition;
    } else {
        startCol = nextColPosition;
        endCol = afterOperationCol;
    }
    
    for (let i = startRow; i <= endRow; i++) {
        for (let j = startCol; j <= endCol; j++) {
            console.log("i, j: ", i, j);
            if (park[i][j] === "X") return true;
        }
    }
    return false;
}

function solution(park, routes) {
    const direction = {
        E: [0, 1],
        W: [0, -1],
        S: [1, 0],
        N: [-1, 0]
    };
    const result = [];
    park = park.map((row) => row.split(''));
    const height = park.length;
    const width = park[0].length;
    const S = findStartIndex(park);
    let afterOperationRow = S[0];
    let afterOperationCol = S[1];
    for (let i = 0; i < routes.length; i++) {
        const [op, n] = routes[i].split(' ');
        const distanceOfWalking = [direction[op][0] * Number(n), direction[op][1] * Number(n)];
        const nextRowPosition = afterOperationRow + distanceOfWalking[0];
        const nextColPosition = afterOperationCol + distanceOfWalking[1];
        const isOverBoundary = nextRowPosition < 0 || nextRowPosition >= height
                                || nextColPosition < 0 || nextColPosition >= width;
        if (!isOverBoundary && !isObstacle(park, afterOperationRow, afterOperationCol, nextRowPosition, nextColPosition)) {
            afterOperationRow = nextRowPosition;
            afterOperationCol = nextColPosition;
        }
    }
    return [afterOperationRow, afterOperationCol];
}