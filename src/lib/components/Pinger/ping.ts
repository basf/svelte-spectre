export async function ping(url: string) {
    if (navigator.onLine)
        try {
            const r = await fetch(url, { mode: 'no-cors' });
            return true;
        } catch (e) {
            return false;
        }
    return false
}

// use example
// (async () => {
//     console.log('online', await ping('https://basf.science'))
// })()
