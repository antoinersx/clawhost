export const onRequest: PagesFunction = async (context) => {
    const url = new URL(context.request.url)
    const target = `https://maiclaw.firebaseapp.com${url.pathname}${url.search}`

    const headers = new Headers(context.request.headers)
    headers.set('Host', 'maiclaw.firebaseapp.com')
    headers.delete('Origin')

    const response = await fetch(target, {
        method: context.request.method,
        headers,
        body: context.request.body
    })

    if (url.pathname === '/__/firebase/init.json') {
        const config = (await response.json()) as Record<string, unknown>
        config.authDomain = url.host
        return new Response(JSON.stringify(config), {
            status: response.status,
            headers: { 'Content-Type': 'application/json' }
        })
    }

    return response
}