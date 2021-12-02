function gcd(a, b) {
    if ((a % b) == 0) {
        return b;
    } else {
        return gcd(b, a % b);
    }
}

function solution(A, B) {
    var res = 0;

    for (var i = 0; i < A.length; i++) {
        var a = A[i];
        var b = B[i];

        var d = gcd(a, b);
        var c;
        c = 0;

        while (c != 1) {
            c = gcd(a, d);
            a /= c;
        }

        c = 0;
        
        while (c != 1) {
            c = gcd(b, d);
            b /= c;
        }

        if (a == 1 && b == 1) {
            res++;
        }

    }
    
    return res;
}

let A=[15,10,3]
let B=[75,30,5]

console.log(solution(A,B))