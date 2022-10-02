function isJavaScriptFile(input){
    if(input.split(".").pop() == "js"){
        return true;
    }
    else{
        return false;
    }
}

const isJsExtFile = isJavaScriptFile("image.jpg.js");
console.log(isJsExtFile);