let rank = `[
    {
        "name":"Arsenal",
        "point":"99",
        "GD":"45"
    },
    {
        "name":"chelsea",
        "point":"75",
        "GD":"39"
    },
    {
        "name":"MU",
        "point":"60",
        "GD":"29"
    },
    {
        "name":"liverpool",
        "point":"88",
        "GD":"39"
    },
]`
let judge = JSON.parse(rank)
for(i=0 ; i<judge.length; i++){
    for(j=1 ; j<judge.length ; j++){
        if(judge[i].point > juide[j].point){
            console.log(judge[i].position )
        }
        if(judge[i].point == juide[j].point){
            for(v=0;v<judge.length;v++){
                for(b=1 ; b<judge.length ; b++){
                    if(judge[i].point == juide[j].point){
                        if(judge[i].GD == juide[j].GD){
                            console(judge[i].position )
                        }
                    }
                }
            }
        }
    }
}