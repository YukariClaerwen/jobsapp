import { GET, POST } from '@/app/api/(jobseeker)/route'

export async function loadPosts() {
    const res = (await GET());
    const data = await res.json();
    return await data.posts
}
export async function generatePs(request) {
    return POST(request)
}