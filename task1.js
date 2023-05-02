const arr = [0, 1, 2, 3, 4, null];
let even = 0;
let odd = 0;
let zero = 0;
let notAnumber = null
function getEvenOdd() {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            if (arr[i] === 0) {
                zero++;
            } else if (arr[i]%2 === 0) {
                even++;
            } else {
                odd++;
            } 
            
        } else {
              notAnumber++;
        }  
    }
    console.log(`zero ${zero}; even ${even}; odd ${odd}; notAnumber ${notAnumber}`)
}
getEvenOdd()
