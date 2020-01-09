function solve() {
    let expressionField = document.getElementById('expressionOutput');
    let resultOutput = document.getElementById('resultOutput');
    let deleteBtn = document.querySelector("#calculator > div.top > button").addEventListener('click', function deleteAll(e){
        if(e.target.innerHTML === 'C'){
            resultOutput.innerHTML = '';
            expressionField.innerHTML = '';
        }
    });
    let buttons = Array.from(document
        .querySelectorAll('.keys'))
        .map((x) => x.addEventListener('click',  function nextBtn(e){
            if(e.target.innerHTML === '='){
                if(expressionField.innerHTML.startsWith('/') || expressionField.innerHTML.startsWith('x') ||
                expressionField.innerHTML.endsWith('/ ') || expressionField.innerHTML.endsWith('x ') ||
                expressionField.innerHTML.endsWith('+ ') || expressionField.innerHTML.endsWith('- ')){
                    resultOutput.innerHTML = 'NaN';
                }else{
                    let [num1, operator, num2] = expressionField.innerHTML.split(/([\/|x|\+|\-])/g);
                    if(operator === '+'){
                        resultOutput.innerHTML = Number(num1) + Number(num2);
                    }
                    else if(operator === '-'){
                        resultOutput.innerHTML = Number(num1) - Number(num2);
                    }
                    else if(operator === 'x'){
                        resultOutput.innerHTML = Number(num1) * Number(num2);
                    }
                    else if(operator === '/'){
                        resultOutput.innerHTML = Number(num1)/Number(num2);
                    }
                }
                
            } else if(e.target.innerHTML.match(/[\/|x|\+|\-]/g)){
                    expressionField.innerHTML += ' '+ e.target.innerHTML + ' ';
                }
            else{
                    expressionField.innerHTML += e.target.innerHTML;
                }
        }
        ))
}