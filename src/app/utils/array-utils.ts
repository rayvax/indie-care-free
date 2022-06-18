export function shuffle(array: any[])
{
    let remaining = array.length; //index that divides an array to unshuffled and shuffled parts
    let temp;
    let current;

    while (remaining > 0)
    {
        //Pick remaining element
        current = Math.floor(Math.random() * remaining--);

        //Swap it with the end
        temp = array[remaining];
        array[remaining] = array[current];
        array[current] = temp;
    }

    return array;
}