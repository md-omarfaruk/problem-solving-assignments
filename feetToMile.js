function feetToMile(feet){
    const element = feet / 5280;
    const mile = element.toFixed(4);
    return mile;
}
const result = feetToMile(40000);
    console.log(result);