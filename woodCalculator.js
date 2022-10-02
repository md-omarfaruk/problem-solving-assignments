function woodCalculator(chair, table, bed){
     chair = chair * 1;
     table = table * 3;
     bed = bed * 5;
    const total = chair + table + bed;
     return total;

}
const result = woodCalculator(1, 1, 1);
    console.log("Cubic foot = ",result,"foot");
