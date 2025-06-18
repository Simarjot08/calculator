let a=prompt("Enter First number :- ");
let b=prompt("Enter second number :- ");
let op=prompt("Which operation to be performed :-");
a=Number(a);
 b=Number(b);
function add(a,b){
        let sum=a+b;
        alert(`sum is : ${sum}`);
    }

    function sub(a,b){
        let sub=a-b;
        alert(`sub is ${sub}`);
    }
    function mul(a,b){
        let mul=a*b;
        alert(`mul is : ${mul}`);
    }

    function div(a,b){
        let div=a/b;
        alert(`div is : ${div}`);
    }
switch(op)
{
    case "+": 
    add(a,b);
    
    break;

      case"-": sub(a,b);
    break;

      case"*": mul(a,b);
    break;

      case"/": div(a,b);
    break;

}