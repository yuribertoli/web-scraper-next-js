type RouteId = string
export type RoutesType = 'header' | 'sub-header' | 'footer' | 'role'

export type RouteProperties = {
  id: string
  path: string
  type: RoutesType[]
}

export type GlobalRoutes = Record<RouteId, RouteProperties>
