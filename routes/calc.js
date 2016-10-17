
exports.calcValue = function(req,res) {
    var json_responses;
    var num1 = req.query.num1;
    var num2= req.query.num2;
    var operator = req.query.operator;
    var result = 0;

    if(num1 && num2 && operator) {
        switch(operator){
            case '+':
                result = parseInt(num1) + parseInt(num2);
                break;
            case '-':
                result = num1-num2;
                break;
            case 'x':
                result = num1*num2;
                break;
            case '÷':
                result = (num2 == 0) ? "Operation not allowed":(num1/num2);
                break;
            default:
                break;
        }
        json_responses = {"statusCode" : 200, "result" : result};
        console.log("Valid Entry, num1 %s num2 %s", num1, num2);
        res.send(json_responses);
    }
    else
    {
        json_responses = {"statusCode" : 401};
        console.log("Invalid Entry, num1 %s num2 %s", num1, num2);
        res.send(json_responses);
    }
};

