
export interface Timer extends ReturnType<typeof setTimeout> {
    set(remaining: number): Function;
    pause(): Function;
    resume(): Function;
    clear(): Function;
}

export function Timer(callback: Function, delay: number): void {
    let timerId: number, start: number, remaining: number = delay;

    const set = (remaining: number) => {
        clearTimeout(timerId);
        timerId = setTimeout(callback, remaining);
    };

    const pause = () => {
        clearTimeout(timerId);
        remaining -= Date.now() - start;
    };

    const resume = () => {
        start = Date.now();
        clearTimeout(timerId);
        timerId = setTimeout(callback, remaining);
    };

    const clear = () => {
        clearTimeout(timerId);
    };

    resume();

    return { set, pause, resume, clear, timerId }
}
