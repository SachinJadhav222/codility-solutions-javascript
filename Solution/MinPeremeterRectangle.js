function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    for (var i = parseInt(Math.sqrt(N), 10); true ; i--)
            if (N % i == 0)
                return 2 * i + 2 * (N / i);
}

console.log(solution(30));