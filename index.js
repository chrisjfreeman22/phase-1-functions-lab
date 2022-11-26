function distanceFromHqInBlocks(someValue) {
    const headquarters = 42
    if (someValue > headquarters){
        return someValue - headquarters
    } else if (someValue < headquarters) {
        return headquarters - someValue
    } else {
        return 0
    }
}

function distanceFromHqInFeet(someValue) {
    let blocksFromHq = distanceFromHqInBlocks(someValue);
    let blocksFromHqInFeet = blocksFromHq *264
    return blocksFromHqInFeet
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination){
        return (start - destination)*264
    } else if (destination > start) {
        return (destination - start)*264
    } else {
        return 0
    }
}
function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
        if (distance < 400){
            return 0
        }
        else if (distance > 400 && distance < 2000){
            return ((distance-400) * 0.02)
        }
        else if (distance > 2000 && distance < 2500){
            return (25)
        }

        else {
            return "cannot travel that far"
        }

}