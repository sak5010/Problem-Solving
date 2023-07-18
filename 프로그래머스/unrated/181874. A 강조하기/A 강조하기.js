function solution(myString) {
    return [...myString].map((c) => c === 'a' || c === 'A' ? 'A' : c.toLowerCase()).join('');
}