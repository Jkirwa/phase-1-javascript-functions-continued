// code your solution here
function saturdayFun (fun="roller-skate"){
    return `This Saturday, I want to ${fun}!`;
    }
    saturdayFun();
    saturdayFun("bathe my dog");


    let mondayWork = function(doWhat="go to the office"){
        return `This Monday, I will ${doWhat}.`
    }
    mondayWork()
    mondayWork("work from home")
        

    function wrapAdjective(adjective="*"){
        return function(myPar="awesome" ){
            return `You are ${adjective}${myPar}${adjective}!`;
        }
    }
    wrapAdjective()("a hard worker");
    wrapAdjective("||")("a dedicated programmer");
    
    


    