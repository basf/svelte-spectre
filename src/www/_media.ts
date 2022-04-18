import { type Readable, readable } from 'svelte/store';

export type Queries = {
    [key: string]: boolean | string;
};

type MediaObject = {
    [key: string]: MediaQueryList
}

const queries: Queries = {
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

export const media: Readable<Queries> = mediaStore(queries)

function mediaStore(queries: Queries = {}) {
    return readable({}, (set) => {
        let mqs = Object.entries(queries).reduce((mqs: MediaObject, [key, query]) => {
            mqs[key] = window?.matchMedia(query as string);
            mqs[key].onchange = (mq) => {
                mqs[key] = mq;
                update();
            };
            return mqs as MediaObject;
        }, {});

        function update() {
            const matches: Queries = Object.entries(mqs).reduce((matches: Queries, [key, mq]) => {
                matches[key] = mq.matches;
                return matches;
            }, {});
            set(matches);
        }

        update();

        return () => mqs = {};
    });
}
