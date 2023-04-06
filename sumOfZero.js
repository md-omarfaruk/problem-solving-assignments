function sumOfZero (inputArray){
    let positiveArray = [];
    let negativeArray = [];
    for (let i = 0; i < inputArray.length; i++) {
            let element = inputArray[i];
                if(element > 0 ){
                    positiveArray.push(element);
                }
                else{
                    negativeArray.push(element);
                }
    }
    console.log(positiveArray);
    console.log(negativeArray);
    console.log(Math.abs(negativeArray[0]));
    let sumItems = [];
    for (let i = 0; i < positiveArray.length; i++) {
        let posElement = positiveArray[i];
        for (let j = 0; j < negativeArray.length; j++) {
            let negElement = Math.abs(negativeArray[j]);
                if(negElement === posElement) {
                    sumItems.push(posElement, negativeArray[j]);
                }
                else{
                    for (let k = j+1; k < negativeArray.length; k++) {
                        let anotherElement = Math.abs(negativeArray[k]);
                            if(anotherElement + negElement === posElement) {
                                sumItems.push(posElement, negativeArray[j], negativeArray[k])
                            }                      
                    }
                }            
        }
        console.log(sumItems); 
        break;
    }
    
}
    // FORTUNATELY I SPEND ONE HOUR FOR THIS, COULD BE ONE HOUR 10 MINUTES OR SOMETHING LIKE THIS;
    // FORTUNATELY I SPEND ONE HOUR FOR THIS, COULD BE ONE HOUR 10 MINUTES OR SOMETHING LIKE THIS;
const output = sumOfZero([-3, 4, 3, -2, -1]);
