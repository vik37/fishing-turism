//THIS FUNCTION CONVERT KILOMETER TO MILE
const convertedKilometerToMile = km => km * 0.62137;
//THIS FUNCTION CONVERT METER TO FEET
const convertedMeterToFeet = m => m * 3.2808;
//THIS FUNCTION CONVERT KILOGRAM TO POUND
const convertedKilogramToPounds = kg => kg * 2.2046;
//THIS FUNCTION CONVERT CENTIMETAR TO INCH
const convertedCentimeterToInch = cm => cm * 0.3937008;
//THIS FUNCTION GET OBJ. OF LONG AND WIDE (NATURAL LAKE), RETURN CONVERTED THIS ATTRIBUTE
export const convertedLengthNaturalLake = ({long,wide}) =>{    
    return {long : convertedKilometerToMile(long).toFixed(2), 
        wide : convertedKilometerToMile(wide).toFixed(2)};
}
//THIS FUNCTION GET OBJ. OF LONG (ARTIFICIAL LAKE), RETURN CONVERTED THIS ATTRIBUTE
export const convertedLengthArtificialLake = ({long}) =>{    
    return {long:convertedKilometerToMile(long).toFixed(2)};
}
//THIS FUNCTION GET OBJ. OF MAIN AND MAXIMUM DEPTH (NATURAL LAKE), RETURN CONVERTED THIS ATTRIBUTE
export const convertedDeptLake = ({mainDepth, maxDepth}) =>{
    return {mainDepth : convertedMeterToFeet(mainDepth).toFixed(2), 
        maxDepth : convertedMeterToFeet(maxDepth).toFixed(2)};
}
//THIS FUNCTION GET OBJ. OF RIVER LENGTH, RETURN CONVERTED THIS ATTRIBUTE
export const convertedRiverLong = ({length}) =>{
    return {length: convertedKilometerToMile(length).toFixed(2)};
}
//THIS FUNCTION GET OBJ. OF FISH WEIGH, RETURN CONVERTED THIS ATTRIBUTE
export const convertedFishWeigh = ({weigh}) =>{
    return {weigh: convertedCentimeterToInch(weigh).toFixed(2)}
}
//THIS FUNCTION GET OBJ. OF FISH AVERAGE AND MAXIMUM SIZE, RETURN CONVERTED THIS ATTRIBUTE
export const convertedFishSize = ({average,max}) =>{
    return {average: convertedKilogramToPounds(average).toFixed(2),
            max: convertedKilogramToPounds(max).toFixed(2)}
}