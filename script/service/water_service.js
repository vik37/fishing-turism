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
export const naturalLakeById = (id) =>{  
    let naturals = water.lake.natural;
    let natural = naturals.find(x => x.id === id);
                                                      
    //console.log(natural);
    return natural;
}

export const artificialLakeById = (id) =>{  
    let artificials = water.lake.artificial;
    let artificial = artificials.filter(n => n.id === id)
                                .find(x => x.id === id);                          
    return artificial;
}

export const riverById =(id) =>{
    let rivers = water.river;
    let river = rivers.find(x => x.id === id);
    return river;
}