
const convertedKilometerToMile = num => num * 0.62137;
const convertedMeterToFeet = num => num * 3.2808;

export const convertedLengthLake = ({long,wide},longArt) =>{    
    return {long : convertedKilometerToMile(long).toFixed(3), 
        wide : convertedKilometerToMile(wide).toFixed(3),longArt:convertedKilometerToMile(longArt)};
}
export const convertedDeptLake = ({mainDepth, maxDepth}) =>{
    return {mainDepth : convertedMeterToFeet(mainDepth).toFixed(3), 
        maxDepth : convertedMeterToFeet(maxDepth).toFixed(3)};
}
export const convertedRiverLong = ({length}) =>{
    return {length: convertedKilometerToMile(length)};
}