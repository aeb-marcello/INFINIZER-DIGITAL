var filter = ["data de início", "data de fim", "valor mínimo", "cidade"];
var args = {};
function getQuery(item, index){
    let answer = (item[0]=="v") ? prompt(`Indique o ${item}`) : prompt(`Indique a ${item}`);
    args[item] = answer;
    document.getElementById("filtros").innerHTML += `${item}: ${answer} <br>`;
}
