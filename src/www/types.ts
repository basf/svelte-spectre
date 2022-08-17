interface Meta {
    file: string;
    title: string;
    config?: any;
    api?: Api[];
}

type Api = {
    title?: string;
    variables?: string;
    description?: string;
}

type Link = {
    metadata: Meta;
    path: string;
}

interface Links {
    [key: string]: Link[];
}

export interface Data {
    links: Links;
    meta: Meta;
    title: string
}
