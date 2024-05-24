import { Component, OnInit } from '@angular/core';
import { PATH } from "../../core/enum/path.enum";
import { MenuInterface } from "../../core/interfaces/menu.interface";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  menuPages: MenuInterface[]=[]

  ngOnInit(): void {
    this.menuPages= [
      {
        path: PATH.HOME,
        tittle: "Inicio",
        subMenu: []
      },
      {
        path: PATH.CUSTOMERS,
        tittle: "Clientes",
        subMenu: []
      },
      {
        path: PATH.ANALYTICS,
        tittle: "Analiticas",
        subMenu: []
      },
      {
        path: PATH.OPORTUNITIES,
        tittle: "Oportunidades",
        subMenu: []
      }
    ]
  }
}

// export const MenuPages: MenuInterface[] =
