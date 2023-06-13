class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;
        const dequeuedNode = this.first;
        if (this.first === this.last) {
            this.first = null;
            this.last = null;
        } else {
            this.first = dequeuedNode.next;
            dequeuedNode.next = null;
        }
        this.size--;
        return dequeuedNode.value;
    }
}

function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    
    const distances = Array.from({length: n}, () => new Array(m).fill(-1));
    
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];
    
    const queue = new Queue();
    queue.enqueue([0, 0]);
    maps[0][0] = 2;
    distances[0][0] = 1;
    while (queue.size !== 0) {
        const [queuedX, queuedY] = queue.dequeue();
        for (let dir = 0; dir < 4; dir++) {
            const dirX = queuedX + dx[dir];
            const dirY = queuedY + dy[dir];
            if (dirX < 0 || dirY < 0 || dirX >= n || dirY >= m) continue;
            if (maps[dirX][dirY] !== 1) continue;
            queue.enqueue([dirX, dirY]);
            maps[dirX][dirY] = 2;
            distances[dirX][dirY] = distances[queuedX][queuedY] + 1;
        }
    }
    return distances[n-1][m-1];
}