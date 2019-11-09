function solve(a,b){
    function factorial(n){
        let rval = 1;
        for (let i = 2; i <= n; i++)
            rval = rval * i;
        return rval;
    }
    console.log((factorial(a)/factorial(b)).toFixed(2));
}
solve(5,2)