export const prerender = true;

const allMd = import.meta.glob('./**/*.md');

let body = [];

for (let path in allMd) {
    body.push(allMd[path]().then(({ metadata }) => ({ path, metadata })));
}

export async function load({ url }) {
    const mds = await Promise.all(body);
    const links = mds.reduce((accumulator: Links, current: Link) => {
        const key: string = current.path.split('/')[2];
        current.path = current.path.replace('+page.md', '');
        if (key.includes('.md')) return { ...accumulator, ['root']: [current] };
        return {
            ...accumulator,
            [key]: accumulator[key]
                ? [...accumulator[key], current]
                : [current],
        };
    }, {});

    const meta = getMeta(url.pathname) || null;
    const title = meta?.title;

    function getMeta(path: string) {
        const parts = path.split('/').filter(Boolean);
        const category = parts[1];
        const page = parts[2];

        return links[category]?.find((link: Link) => link.path.includes(page))
            .metadata;
    }
    return { links, meta, title };
}

interface Meta {
    file: string;
    title: string;
    config?: any;
    api?: Api[];
}

interface Api {
    title?: string;
    variables?: string;
    description?: string;
}

interface Link {
    metadata: Meta;
    path: string;
}
interface Links {
    [key: string]: Link[];
}
