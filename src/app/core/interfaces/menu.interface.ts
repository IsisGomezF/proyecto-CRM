export interface MenuInterface {
  path: string,
  tittle: string,
  icon?: string,
  classCss?:string,
  subMenu: MenuInterface[];
}
