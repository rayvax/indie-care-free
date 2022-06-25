export function sleep(delay: number)
{
    return new Promise((resolve) => setTimeout(resolve, delay));
}

export function setDelay<T>(delayResolve: () => T, delay: number)
{
    return new Promise<T>((resolve) => setTimeout(resolve, delay)).then(delayResolve);
}