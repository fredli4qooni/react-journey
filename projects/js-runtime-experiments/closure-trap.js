function testVar() {
    console.log("--- USING VAR (Problem) ---");
    for (var i = 1; i <= 3; i++) {
        setTimeout(function() {
            console.log("Var i: " + i); 
        }, 1000);
    }
}

function testLet() {
    console.log("--- USING LET (Solution) ---");
    for (let j = 1; j <= 3; j++) {
        setTimeout(function() {
            console.log("Let j: " + j);
        }, 1000);
    }
}

testVar();
testLet();