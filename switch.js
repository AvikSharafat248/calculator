let day = 6;
switch(day){
    case 1:
        console.log("It is Monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    case 4:
        console.log("It is Thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
        break;
    case 7:
        console.log("It is Sunday");
        break;

    default:
        console.log(`${day} is not a day`)    
}


let test = 33;
let grade;

switch(true){
    case test >= 90:
    grade = "A";
    break;
    case test >= 80:
    grade = "B";
    break;
    case test >= 70:
    grade = "C";
    break;
    case test >= 60:
    grade = "D";
    break;

    default:
        grade = "F"
}

console.log(grade)