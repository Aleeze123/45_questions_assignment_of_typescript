//Store the numbers 1 through 9 in a array
let numbers: number[] = [1,2,3,4,5,6,7,8,9];

//Loop through the array
for (let i = 0 ; i < numbers.length; i++){
    let suffix: string;
    if(numbers[i] === 1){
        suffix = "st";
    }
    else if(numbers[i] === 2){
        suffix = "nd";
    }
    else if(numbers[i] === 3){
        suffix = "rd";
    }
    else{
        suffix = "th";
    }
    console.log(`${numbers[i]}${suffix}`);
}
