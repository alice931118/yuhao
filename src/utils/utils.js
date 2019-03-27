let utils = {};

//不够10， 补0
utils.toFillZero = function(str){
    if(Number(str) < 10) {
        return '0' + str;
    }else {
        return str;
    }
}
utils.switchMonthName = function(month){
    switch(Number(month)){
        case 1: 
            return 'Jan';
        case 2: 
            return 'Feb';
        case 3: 
            return 'Mar';
        case 4: 
            return 'Apr';
        case 5: 
            return 'May';
        case 6: 
            return 'Jun';
        case 7: 
            return 'Jul';
        case 8: 
            return 'Aug';
        case 9: 
            return 'Sep';
        case 10: 
            return 'Oct';
        case 11: 
            return 'Nov';
        case 12: 
            return 'Dec';
        default: 
            return '';
    }
}

function op_preced(_options){
    switch(_options)    {
        case '!':
            return 3;
        case '&':
            return 2;
        case '|':
            return 1;
        default:
            return 0;
    }
}
function isOption(_options){
    switch(_options)    {
        case '!': case '&': case '|': case '(': case ')':
            return true;
        default:
            return false;
    }
}

// 调度场算法使用示例：
//     let myString = '((P1 | P2) | P3) | ((O1 & O2) & O3)'.replace(/\s+/g,"");
//     let myOutput = '';
//     myOutput = ShuntingYard(myString, myOutput);
utils.ShuntingYard = function(_input, _output){
    let stack = [];

    for (let i = 0; i < _input.length; i++) {
        let _item = _input[i];
        if(isOption(_item)){
            // console.log('***运算符号：'+ _item);
            if(_item == '('){
                stack.unshift(_item);
                // console.log('stack中加入:'+ _item);
                // console.log('stack变为:'+ JSON.stringify(stack));
            }else if(_item == ')'){
                let _stack = JSON.parse(JSON.stringify(stack));
                let isOptionHandled = false;

                for(let s = 0; s < _stack.length; s++){
                    if(_stack[s] != '('){
                        _output = _output + _stack[s];
                        // console.log('output变为:'+ _output);
                        stack.shift();
                        // console.log('stack现在是:'+ JSON.stringify(stack));
                        // console.log('=======================')
                    }else{
                        stack.shift();
                        isOptionHandled = true;
                        // console.log('括号已匹配，stack现在是:'+ JSON.stringify(stack));
                        break;
                    }
                }
                if(!isOptionHandled){
                    // console.log('括号无法对应，请检查')
                }
            }else{

                if(stack.length == 0){
                    stack.unshift(_item);
                    // console.log('stack中加入:'+ _item);
                    // console.log('stack变为:'+ JSON.stringify(stack));
                }else{
                    // console.log('stack:'+ JSON.stringify(stack));
                    let _stack = JSON.parse(JSON.stringify(stack));
                    let isOptionHandled = false;

                    for(let s = 0; s < _stack.length; s++){
                        if(op_preced(_item) > op_preced(_stack[s])){
                            stack.unshift(_item);
                            isOptionHandled = true;
                            // console.log('优先级更大，stack中加入:'+ _item);
                            // console.log('stack变为:'+ JSON.stringify(stack));
                            break;
                        }
                        else{
                            _output = _output + _stack[s];
                            // console.log('output变为:'+ _output);
                            stack.shift();
                            // console.log('stack现在是:'+ JSON.stringify(stack));
                            // console.log('=======================')
                        }
                    }

                    if(!isOptionHandled){
                        stack.unshift(_item);
                        // console.log('stack中加入:'+ _item);
                        // console.log('stack变为:'+ JSON.stringify(stack));
                    }
                }
            }

        }else{
            // console.log('***函数：'+ _item);
            _output = _output + _item;
            // console.log('output变为:'+ _output);
            // console.log('stack现在是:'+ JSON.stringify(stack));
            // console.log('=======================')
        }
    }
    return _output + stack.join('')
}


export default utils;