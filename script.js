function clearSet(){
    document.getElementById('screen').innerHTML = '';
}

var varSum = false;
var varSub = false;
var varMult = false;
var varDiv = false;

document.getElementById('sum').addEventListener('click', ()=>{
    document.getElementById('screen').innerHTML+='+';
})

document.getElementById('subtract').addEventListener('click', ()=>{
    document.getElementById('screen').innerHTML+='-';
})

document.getElementById('multiplication').addEventListener('click', ()=>{
    document.getElementById('screen').innerHTML+='*';
})

document.getElementById('division').addEventListener('click', ()=>{
    document.getElementById('screen').innerHTML+='/';
})

function sum(values){
    
    var sum=Number(values[0]);
    let cont = 0
    for (let value of values){
        if(cont != 0){
            try{
                sum += Number(value);
            }catch{
                document.getElementById("screen").innerHTML='';
            }
        }
        cont++
    }
    return sum;
}

function subtract(values){
    var subtract=values[0];
    let cont = 0
    for (let value of values){
        if(cont != 0){
            subtract -= Number(value);
        }
        cont++
    }
    return subtract;
}

function multiplication(values){
    var mult=1;
    for (let value of values){
        mult *= Number(value);
    }
    return mult;
}

function division(values){
    var div=values[0];
    let cont = 0
    if(values[1]==0){
        return false;
    }
    else{
        for (let value of values){
            if(cont != 0){
                div /= Number(value);
            }
            cont++
        }
        return div;
    }
}

function selectButtons(num) {
    var append='';
    console.log(num);
    if (num){
        append += num
        return document.getElementById('screen').innerHTML += append;
    }
}

document.getElementById('result').addEventListener('click', function(){
    var values = document.getElementById('screen').textContent;
    try{
        for (let caractere of values){
            if(values.indexOf(caractere) == 0 && caractere == "-"){
                continue
            }else{   
                if (caractere == '+'){
                    try{
                        var adition = values.split('+');
                        document.getElementById('screen').innerHTML = String(sum(adition));
                        break;
                    } catch{
                        document.getElementById('screen').innerHTML = 'Erro';
                    }
                }
                else if (caractere == '-'){
                    try{
                        var sub = values.split('-');
                        document.getElementById('screen').innerHTML = String(subtract(sub));
                        break;
                    } catch{
                        document.getElementById('screen').innerHTML = 'Erro';
                    }
                }
                else if (caractere == '*'){
                    var mult = values.split('*');
                    document.getElementById('screen').innerHTML = String(multiplication(mult));
                    break;
                }
                else if (caractere == "/"){
                    var div = values.split('/');
                    if(division(div)==false){
                        document.getElementById('screen').innerHTML = "Não é possível dividir por zero :<  !";
                    }else{
                        document.getElementById('screen').innerHTML = String(division(div));
                    }
                    break;
                }
            }
        }
    } catch{
        document.getElementById('screen').innerHTML = 'Erro';
    }
})



