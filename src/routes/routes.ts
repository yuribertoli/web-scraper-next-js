import { GlobalRoutes, RouteProperties, RoutesType } from '@/models/globals'

export const globalRoutes: GlobalRoutes = {
  homePage: {
    id: 'homePage',
    path: '/',
    type: ['header'],
  },
  sites: {
    id: 'sites',
    path: '/sites',
    type: ['header'],
  },
  site: {
    id: 'site',
    path: 'sites/:slug',
    type: ['sub-header'],
  },
  contacts: {
    id: 'contacts',
    path: '/contacts',
    type: ['header'],
  },
  admin: {
    id: 'admin',
    path: '/admin',
    type: ['role'],
  },
}

export const AllRoutes = Object.values(globalRoutes).map((route) => route)

export const getRoutesByType = (routeType: RoutesType): RouteProperties[] => {
  return Object.values(AllRoutes).filter((route) =>
    route.type.includes(routeType)
  )
}
