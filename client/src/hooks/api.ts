import config from '../../config.json';

export async function api<T>(url: string, options?: RequestInit): Promise<T> {

    let headers: HeadersInit = options?.headers || {};

    if (!(options?.body instanceof FormData)) {
        headers = {
            ...headers,
            'Content-Type': 'application/json',
        }
    }

    const res = await fetch(config.apiUrl + url, {
        headers,
        ...options,
    });

    if (!res.ok) {
        throw new Error(await res.text());
    }

    return await res.json() as Promise<T>;
}
