function largestName(names){
    let larger = names[0];
    for(let i = 0; i < names.length; i++){
        let element = names[i];
        if(element.length > larger.length){
            larger = element;
        }
    }
    return larger;
}
let result = largestName(["Md. Omar Faruk", "Sujon", "Himu", "Fahim", "kaium"]);
    console.log(result);

const realName = largestName(["YAA RAHIM(SWT)","MUHAMMAD(SAW)", "Md. Toyab Ali", "Sajeda Begum"]);
    console.log(realName);