export function wtcConverter (scorePlayer1: number, scorePlayer2: number){
    const diffrence = scorePlayer1 - scorePlayer2;

    if (diffrence > 0) {
        if (diffrence <= 5 ) {return '10-10'}
            else if (diffrence <= 10 ) {return'11-9'}
            else if (diffrence <= 10 ) {return'11-9'}
            else if (diffrence <= 15 ) {return'12-8'}
            else if (diffrence <= 20 ) {return '13-7'}
            else if (diffrence <= 25 ) {return '14-6'}
            else if (diffrence <= 30 ) {return '15-5'}
            else if (diffrence <= 35 ) {return '16-4'}
            else if (diffrence <= 40 ) {return '17-3'}
            else if (diffrence <= 45 ) {return '18-2'}
            else if (diffrence <= 50 ) {return '19-1'}
            else  {return '20-0'}
    }

    if (diffrence <= 0) {
        if (diffrence >= -5 ) {return '10-10'}
        else if (diffrence >= -10 ) {return '9-11'}
        else if (diffrence >= -15 ) {return '8-12'}
        else if (diffrence >= -20 ) {return '7-13'}
        else if (diffrence >= -25 ) {return '6-14'}
        else if(diffrence >= -30 ) {return '5-15'}
        else if(diffrence >= -35 ) {return '4-16'}
        else if(diffrence >= -40 ) {return '3-17'}
        else if(diffrence >= -45 ) {return '2-18'}
        else if(diffrence >= -50 ) {return '1-19'}
        else {return '0-20'}
    } 
}