import { Component, Input, OnInit } from '@angular/core';
import { MenuInterface } from '../../core/interfaces/menu.interface';
import { PATH } from '../../core/enum/path.enum';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menus',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menus.component.html',
  styleUrl: './menus.component.css'
})
export class MenusComponent implements OnInit{
  menuPages: MenuInterface[]=[]
  @Input() menuInternalPages: MenuInterface[]=[]

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
        path: PATH.OPORTUNITIES,
        tittle: "Oportunidades",
        subMenu: []
      },
      {
        path: PATH.ANALYTICS,
        tittle: "Analiticas",
        subMenu: []
      },
    ]
  }
}
