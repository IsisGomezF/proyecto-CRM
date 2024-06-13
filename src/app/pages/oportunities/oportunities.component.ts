import { Component, OnInit } from '@angular/core';
import { MenuInterface } from '../../core/interfaces/menu.interface';
import { PATHOPORTUNITIES } from '../../core/enum/path.enum';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenusComponent } from '../../shared/menus/menus.component';

@Component({
  selector: 'app-oportunities',
  standalone: true,
  templateUrl: './oportunities.component.html',
  styleUrl: './oportunities.component.css',
  imports: [MenusComponent, CommonModule, RouterOutlet],
})
export class OportunitiesComponent implements OnInit {
  submenuOportunitiesPage: MenuInterface[] = [];

  ngOnInit(): void {
    this.submenuOportunitiesPage = [
      {
        path: PATHOPORTUNITIES.CREATEOPORTUNITY,
        tittle: 'Crear Oportunidad',
        icon: 'fa-solid fa-plus',
        subMenu: [],
      },
      {
        path: PATHOPORTUNITIES.VIEWOPORTUNITIES,
        tittle: 'Ver oportunidades',
        icon: 'fa-solid fa-magnifying-glass',
        subMenu: [],
      },
      // {
      //   path: PATHCUSTOMERS.UPDATECUSTOMER,
      //   tittle: "Actualizar Cliente",
      //   icon:"fa-solid fa-pen-to-square",
      //   subMenu: []
      // },
    ];
  }
}
