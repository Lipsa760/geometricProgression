let s = 2;
let r = 2;
let N = 4;
console.log(nthGP(s, r, N));


function nthGP(s, r, N) { 
    return( s * Math.floor(Math.pow(r, N - 1)) ); 
       
} 
   