function brickCalculator(tola){
    if(tola<=10){
        tola = tola*15000;
        return tola;
    }
    else if(tola<=20 && tola>10){
            tola = tola*12000;
        return (tola+30000);
    }
    else{
        tola = tola*10000;
        return (tola+70000);
    }
}
let floor = brickCalculator(15);
    console.log(floor);