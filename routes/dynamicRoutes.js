import { $content } from '@nuxt/content'

const dynamicRoutes = async () => {
  const posts = await $content('blog').fetch()
  return posts.map((post) => `/blog/${post.slug}`)
}

export default dynamicRoutes
