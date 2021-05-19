//THIS FUNCTION CONVERT KILOMETER TO MILE (LONG OR WIDE)
const convertedKilometerToMile = km => km * 0.62137;
//THIS FUNCTION CONVERT METER TO FEET (DEEP)
const convertedMeterToFeet = m => m * 3.2808;
//THIS FUNCTION GET OBJ. OF LONG AND WIDE (NATURAL LAKE) AND LONG (ARTIFICIAL LAKE), RETURN CONVERTED THIS ATTRIBUTE
const convertedKilogramToPounds = kg => kg * 2.2046;
const convertedCentimeterToInch = cm => cm * 0.3937008;
export const convertedLengthNaturalLake = ({long,wide}) =>{    
    return {long : convertedKilometerToMile(long).toFixed(3), 
        wide : convertedKilometerToMile(wide).toFixed(3)};
}
export const convertedLengthArtificialLake = ({long}) =>{    
    return {long:convertedKilometerToMile(long).toFixed(3)};
}
//THIS FUNCTION GET OBJ. OF MAIN AND MAXIMUM DEPTH (NATURAL LAKE), RETURN CONVERTED THIS ATTRIBUTE
export const convertedDeptLake = ({mainDepth, maxDepth}) =>{
    return {mainDepth : convertedMeterToFeet(mainDepth).toFixed(3), 
        maxDepth : convertedMeterToFeet(maxDepth).toFixed(3)};
}
//THIS FUNCTION GET OBJ. OF RIVER LENGTH, RETURN CONVERTED THIS ATTRIBUTE
export const convertedRiverLong = ({length}) =>{
    return {length: convertedKilometerToMile(length).toFixed(3)};
}
export const convertedFishWeigh = ({weigh}) =>{
    return {weigh: convertedCentimeterToInch(weigh).toFixed(3)}
}
export const convertedFishSize = ({average,max}) =>{
    return {average: convertedKilogramToPounds(average).toFixed(3),
            max: convertedKilogramToPounds(max).toFixed(3)}
}