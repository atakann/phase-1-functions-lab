// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    if (someValue > 42){
        return someValue - 42;
    }
    else {
        return 42 - someValue
    }
}

function distanceFromHqInFeet(someValue){
    let dist = distanceFromHqInBlocks(someValue);
    return dist * 264;
}

function distanceTravelledInFeet(start, destination){
    if (start > destination){
        return 264 * (start - destination)
    } else {
        return 264 * (destination - start)
    }
}

function calculatesFarePrice(start, destination){
    let dist = distanceTravelledInFeet(start, destination);
    if(dist < 400 ){
        return 0;
    } else if ( dist >= 400 && dist < 2000){
        let calc = dist - 400;
        return calc * 0.02
    } else if (dist >= 2000 && dist <= 2500){
        return 25
    } else {
        return "cannot travel that far"
    }
}