export interface RoutesInterfaces {
  path: string,
  tittle: string,
  icon?: string,
  classCss?:string,
  subMenu: RoutesInterfaces[]
}
