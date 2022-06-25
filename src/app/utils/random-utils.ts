//returns random int in range [min, max]
export function getRandomIntInclusive(min: number, max: number) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//returns random number in range [min, max)
export function getRandomNumber(min: number, max: number)
{
    return Math.random() * (max - min) + min;
}