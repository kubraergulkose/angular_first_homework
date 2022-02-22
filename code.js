function find (num,target) {
    let num_length = num.length;
    for ( let a=0;a<num_length; a++) 
    {
      for (let b=a+1; b<num_length; b++) {
        if (( num [a] + num [b])==target) {
            console.log (a,b)
        }
    
      }
    }
  }
  find ([0,1,2,3,5,6] , 5);

