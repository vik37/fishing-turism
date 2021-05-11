//THIS FUNCTION CONVERT KILOMETER TO MILE (LONG OR WIDE)
const convertedKilometerToMile = num => num * 0.62137;
//THIS FUNCTION CONVERT METER TO FEET (DEEP)
const convertedMeterToFeet = num => num * 3.2808;
//THIS FUNCTION GET OBJ. OF LONG AND WIDE (NATURAL LAKE) AND LONG (ARTIFICIAL LAKE), RETURN CONVERTED THIS ATTRIBUTE
export const convertedLengthLake = ({long,wide},longArt) =>{    
    return {long : convertedKilometerToMile(long).toFixed(3), 
        wide : convertedKilometerToMile(wide).toFixed(3),longArt:convertedKilometerToMile(longArt)};
}
//THIS FUNCTION GET OBJ. OF MAIN AND MAXIMUM DEPTH (NATURAL LAKE), RETURN CONVERTED THIS ATTRIBUTE
export const convertedDeptLake = ({mainDepth, maxDepth}) =>{
    return {mainDepth : convertedMeterToFeet(mainDepth).toFixed(3), 
        maxDepth : convertedMeterToFeet(maxDepth).toFixed(3)};
}
//THIS FUNCTION GET OBJ. OF RIVER LENGTH, RETURN CONVERTED THIS ATTRIBUTE
export const convertedRiverLong = ({length}) =>{
    return {length: convertedKilometerToMile(length)};
}