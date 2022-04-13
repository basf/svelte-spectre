import { writable } from 'svelte/store';

type MediaQuery = {
    [key: string]: boolean | string;
};
const mediaQueries: MediaQuery = {
    xs: '(max-width: 480px)',
    sm: '(max-width: 600px)',
    md: '(max-width: 840px)',
    lg: '(max-width: 960px)',
    xl: '(max-width: 1280px)',
    xxl: '(min-width: 1281px)',
    landscape: '(orientation: landscape)',
    portrait: '(orientation: portrait)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
    mouse: '(hover: hover)',
    touch: '(hover: none)',
};

export const media = watchMedia(mediaQueries, 'ss-media')

function watchMedia(mediaQueries: MediaQuery, storeKey: string) {
    const { subscribe, set, update } = writable(mediaQueries);

    const match: MediaQuery = storageTest() && JSON.parse(sessionStorage.getItem(storeKey) as string);

    if (storageTest())
        for (const query in mediaQueries) {
            const media = window.matchMedia(mediaQueries[query] as string)
            setMatches(media, query)
            media.onchange = (e) => setMatches(e, query)
        }

    subscribe((match): void => storageTest() && sessionStorage.setItem(storeKey, JSON.stringify(match)));

    function setMatches(source: MediaQueryList | MediaQueryListEvent, query: string) {
        if ('target' in source) match[query] = source.matches;
        else match[query] ??= source.matches;
        set(match);
        sessionStorage.setItem(storeKey, JSON.stringify(match));
    }

    function storageTest(test = 'test'): boolean {
        try {
            sessionStorage.setItem(test, test);
            sessionStorage.removeItem(test);
            return true;
        } catch (e) {
            return false;
        }
    }

    return { subscribe, set, update }
}
