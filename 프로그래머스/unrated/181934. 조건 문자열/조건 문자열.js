function solution(ineq, eq, n, m) {
    if (eq === "=") {
        if (ineq === "<") {
            if (n <= m) return 1;
            return 0;
        } else if (ineq === ">") {
            if (n >= m) return 1;
            return 0;
        }
    } else {
        if (ineq === "<") {
            if (n < m) return 1;
            return 0;
        } else if (ineq === ">") {
            if (n > m) return 1;
            return 0;
        }
    }
}