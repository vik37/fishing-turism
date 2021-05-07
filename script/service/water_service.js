import { water } from '../db/water_db.js';

export const allNaturalLakes = () =>{
    let lakes = water.lake.natural;
    return lakes;
}
export const allArtificialLakes = () =>{
    let lakes = water.lake.artificial;
    //console.log(lakes)
    return lakes;
}
export const allRivers = () =>{
    let rivers = water.river;
    //console.log(rivers);
    return rivers;
}
export const naturalLakeDetail = () =>{
    
}