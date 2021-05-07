export let water = {   
    lake : {
        natural :[ {
            id : 1,
            type : "natural",
            name : "Ohrid",                    
            mainDepth : 155,
            maxDepth : 300,
            long : 36.4,
            wide : 16.8                    
        },
        {
            id : 2,
            type : "natural",
            name : "Prespa",                    
            mainDepth : 54,
            maxDepth : 76,
            long : 28,
            wide : 17
            
        },
        {
            id : 3,
            type : "natural",
            name : "Dojran",                    
            mainDepth : 6.7,
            maxDepth : 10,
            long : 8.9,
            wide : 7.1
            
        }],              
        artificial : [{
            id : 1,
            name : "Kozjak",  
            type : "artificial",                 
            river : "Treska",
            long : 32
        },
        {      
            id : 2,                 
            name : "Tikvesh",  
            type : "artificial",                                                   
            river : "Crna",
            long : 29
        },
        {      
            id : 2,                 
            name : "Mavrovo",
            type : "artificial",                                                  
            river : "",
            long : 10
        },
        {   
            id : 3,
            name : "Mladost",
            type : "artificial",                                                 
            river : "Otovica",
            long : 1.5
        },
        {
            id : 4,
            name : "Debar",
            type : "artificial",                          
            river : "black drim and radica",
            long : 15
        },
        {
            id : 5,
            name : "Berovo", 
            type : "artificial",                           
            river : "Kleparska",
            long : 2.5                                            
        }, 
        {
            id : 6,
            name : "Kalimanci", 
            type : "artificial",                           
            river : "Bregalnica",
            long : 14                                            
        },
        {
            id : 7,
            name : "Mantovo", 
            type : "artificial",                           
            river : "Kriva Lakavica",
            long : 5.5                                          
        },
        {
            id : 8,
            name : "Matka", 
            type : "artificial",                           
            river : "Treska",
            long : 7                                          
        }       
    ]},   
    river : [{
        id:1,
        name : "Vardar",
        length : 388 ,
        source: "Vrutok",
        mouth : "Aegean Sea"
    },
    {
        id:2,
        name : "Black Drim",
        length : 149 ,
        source: "Struga (Ohrid Lake)",
        mouth : "Adriatic Sea"
    },
    {
        id:3,
        name : "Black River",
        length : 207 ,
        source : "Zeleznec",
        mouth : "Vardar"
    },
    {
        id:4,
        name : "Bregalnica",
        length : 211.5,
        source : "Malesevo mountains",
        mouth : "Vardar"
    },
    {
        id : 5,
        name : "Treska",
        length : 132,
        source : "Stogovo mountains",
        mouth : "Vardar"
    },
    {
        id : 6,
        name : "Pcinja", 
        length : 135,
        source : "Trgoviste (Srbija)",
        mouth : "Vardar"
    },
    { 
        id : 7,
        name : "Radika", 
        length : 70,
        source : "Mounth Vraca (Kosovo)",
        mouth : "Black Drim"
    },
    {
        id : 8,
        name : "Strumica", 
        length : 114,
        source : "Mounth Plackovica",
        mouth : "Struma (Bulgaria)"        
    }
]  
}