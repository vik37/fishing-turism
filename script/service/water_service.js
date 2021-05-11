import { water } from '../db/water_db.js';

// THIS FUNCTION RETURN ARRAY OF NATURAL LAKES
export const allNaturalLakes = () =>{
    let lakes = water.lake.natural;
    return lakes;
}
// THIS FUNCTION RETURN ARRAY OF ARTIFICIAL LAKES
export const allArtificialLakes = () =>{
    let lakes = water.lake.artificial;
    //console.log(lakes)
    return lakes;
}
//THIS FUNCTION RETURN ARRAY OF RIVVERS
export const allRivers = () =>{
    let rivers = water.river;
    //console.log(rivers);
    return rivers;
}
//THIS FUNCTION GET ID  AND RETURN NATURAL LAKE BY THIS ID
export const naturalLakeById = (id) =>{  
    let naturals = water.lake.natural;
    let natural = naturals.find(x => x.id === id);
                                                      
    //console.log(natural);
    return natural;
}
//THIS FUNCTION GET ID AND RETURN ARTIFICIAL LAKE BY THIS ID
export const artificialLakeById = (id) =>{  
    let artificials = water.lake.artificial;
    let artificial = artificials.filter(n => n.id === id)
                                .find(x => x.id === id);                          
    return artificial;
}
//THIS FUNCTION GET ID AND RETURN RIVER BY THIS ID
export const riverById =(id) =>{
    let rivers = water.river;
    let river = rivers.find(x => x.id === id);
    return river;
}