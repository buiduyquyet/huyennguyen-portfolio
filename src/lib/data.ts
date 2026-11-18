import { getPayload } from 'payload'
import { cache } from 'react'
import config from '@payload-config'

export const getSiteData = cache(async () => {
  const payload = await getPayload({ config })
  const [home, settings, projects] = await Promise.all([
    payload.findGlobal({ slug: 'home', depth: 1 }),
    payload.findGlobal({ slug: 'settings', depth: 0 }),
    payload.find({
      collection: 'projects',
      where: { published: { equals: true } },
      sort: 'order',
      limit: 100,
      depth: 0,
    }),
  ])
  return { home, settings, projects: projects.docs }
})
