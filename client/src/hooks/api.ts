import config from '../../config.json';

export async function api<T>(url: string, options?: RequestInit): Promise<T> {
    const res = await fetch(config.apiUrl + url, {
        headers: { "Content-Type": "application/json" },
        ...options,
    });

    if (!res.ok) {
        throw new Error(await res.text());
    }

    return await res.json() as Promise<T>;
}
