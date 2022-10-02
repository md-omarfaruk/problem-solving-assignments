function animalsCounter(miles){
    let animal = 0;
    if(miles<=10){
        animal = miles*50;
    }
    else if(miles<=20){
        let first10 = 10*50;
        let second10 = (miles-10)*100;
        animal = first10+second10;
    }
    else{
        let first10 = 10*50;
        let second10 = 10*100;
        let after20 = (miles-20)*300;
            animal = first10+second10+after20;
    }
    return animal;
}
let animals = animalsCounter(25);
    console.log(animals);