export const onRequest: PagesFunction = async (context) => {
    const url = new URL(context.request.url)
    const target = `https://maiclaw.firebaseapp.com${url.pathname}${url.search}`

    const headers = new Headers(context.request.headers)
    headers.set('Host', 'maiclaw.firebaseapp.com')
    headers.delete('Origin')

    return fetch(target, {
        method: context.request.method,
        headers,
        body: context.request.body,
        redirect: 'manual'
    })
}