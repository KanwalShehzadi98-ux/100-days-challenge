/* Q58 - Write a simple program that can take lots of scores and find their average.*/

function averageScore(...scores : number[]) : number {
    let total_scores : number = scores.reduce((total,score) => total + score, 0);
    return total_scores / scores.length;
}

console.log(averageScore(98,97,96,95,94));


