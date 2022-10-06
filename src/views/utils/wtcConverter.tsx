export function wtcConverter (scorePlayer1: number, scorePlayer2: number){
    const diffrence = scorePlayer1 - scorePlayer2;
    let wtcScore = '';

    if (diffrence > 0) {
        if (diffrence <= 5 ) {wtcScore = '10-10'}
            else if (diffrence <= 10 ) {wtcScore = '11-9'}
            else if (diffrence <= 10 ) {wtcScore = '11-9'}
            else if (diffrence <= 15 ) {wtcScore = '12-8'}
            else if (diffrence <= 20 ) {wtcScore = '13-7'}
            else if (diffrence <= 25 ) {wtcScore = '14-6'}
            else if (diffrence <= 30 ) {wtcScore = '15-5'}
            else if (diffrence <= 35 ) {wtcScore = '16-4'}
            else if (diffrence <= 40 ) {wtcScore = '17-3'}
            else if (diffrence <= 45 ) {wtcScore = '18-2'}
            else if (diffrence <= 50 ) {wtcScore = '19-1'}
            else  {wtcScore = '20-0'}
    }

    if (diffrence <= 0) {
        if (diffrence >= -5 ) {wtcScore = '10-10'}
        else if (diffrence >= -10 ) {wtcScore = '9-11'}
        else if (diffrence >= -15 ) {wtcScore = '8-12'}
        else if (diffrence >= -20 ) {wtcScore = '7-13'}
        else if (diffrence >= -25 ) {wtcScore = '6-14'}
        else if(diffrence >= -30 ) {wtcScore = '5-15'}
        else if(diffrence >= -35 ) {wtcScore = '4-16'}
        else if(diffrence >= -40 ) {wtcScore = '3-17'}
        else if(diffrence >= -45 ) {wtcScore = '2-18'}
        else if(diffrence >= -50 ) {wtcScore = '1-19'}
        else {wtcScore = '0-20'}
    }
    return wtcScore 
}