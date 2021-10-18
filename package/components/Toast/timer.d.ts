export interface Timer extends ReturnType<typeof setTimeout> {
    set(remaining: number): Function;
    pause(): Function;
    resume(): Function;
    clear(): Function;
}
export declare function Timer(callback: Function, delay: number): void;
