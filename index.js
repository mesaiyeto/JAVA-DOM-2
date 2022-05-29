function musician(i) {
    if (i <= 0){
        console.log ('not a group');
    } else if (i == 1){
        console.log ('solo');
    } else if (i == 2){
        console.log ('duet');
    } else if (i == 3){
        console.log ('trio');
    } else if ( i == 40){
        console.log ('quartet');
    } else {
        console.log ('this is a large group');
    }
    
   
}
musician (4);