
//returns max, if value > max
//returns min, if value < min
//otherwise returns value
export function getInRange(value: number, min: number, max: number)
{
    return Math.max(
        0,
        Math.min(
            value,
            max
        )
    );
}