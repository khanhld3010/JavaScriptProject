
function handleSubmit1(){
    let physicScore = parseInt(document.getElementById("physic").value);
    let chemistryScore = parseInt(document.getElementById("chemistry").value);
    let biologyScore = parseInt(document.getElementById("biology").value);
    let averageScore = (physicScore + chemistryScore + biologyScore)/3;
    let totalScore = physicScore + chemistryScore + biologyScore;
    console.log("Vật lý " + physicScore);
    console.log("Hóa " + chemistryScore);
    console.log("Sinh " + biologyScore);
    console.log("Tổng điểm: "+totalScore);
    console.log("Điểm trung bình: "+averageScore);

}

function handleSubmit2(){
    let celsius = parseInt(document.getElementById("celsius").value);
    let fahrenheit = convertCeltoFah(celsius);
    console.log("Độ F bằng: " + fahrenheit);
}

function handleSubmit3(){
    let radius = parseInt(document.getElementById("radius").value);
    let dientich = dienTichHinhTron(radius);
    console.log("dientich: " + dientich);
}

function handleSubmit4(){
    let diameter = parseInt(document.getElementById("diameter").value);
    let chuViHinhTron = chuViHinhTronByDiameter(diameter);
    console.log("Chu vi hinh tron: " + chuViHinhTron);
}

function convertCeltoFah(number){
    var fahrenheit = (number * 9 / 5) + 32;
    return parseFloat(fahrenheit);
}

function dienTichHinhTron(number){
    return number * number * Math.PI;
}

function chuViHinhTronByDiameter(number){
    return number * Math.PI;
}
