module.exports=a=>[a=>0===a,a=>a%10,a=>a.reduce((b,a)=>+b+ +a,0),a=>a.map((a,b)=>0==(b+1)%2?(a=>9<a?(b=>+b[0]+ +b[1])(a.split("")):a)(2*a):a),a=>a.split("").reverse(),a=>"string"==typeof a?(()=>a)():(()=>{throw Error("Expects type String")})()].reduceRight((a,b)=>b(a),a);