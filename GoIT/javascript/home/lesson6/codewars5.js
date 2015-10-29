function isValidWalk(walk) {
   var N = 0, S = 0, W = 0, E = 0;
    for(var i = 0; i < walk.length; i++){
        if(walk[i] == 'n') N++;
        if(walk[i] == 's') S++;
        if(walk[i] == 'w') W++;
        if(walk[i] == 'e') E++;
    }
    return walk.length == 10 && N == S && E == W;
}