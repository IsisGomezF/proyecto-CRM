import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "../../shared/menu/menu.component";
import { MenuInternoComponent } from "../../shared/menu-interno/menu-interno.component";
import { CreatClientComponent } from "../../customers/creat-client/creat-client.component";
import { MenuInterface } from '../../core/interfaces/menu.interface';
import { PATHCUSTOMERS } from '../../core/enum/customers.path.enum';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-customers',
    standalone: true,
    templateUrl: './customers.component.html',
    styleUrl: './customers.component.css',
    imports: [MenuComponent, MenuInternoComponent, CreatClientComponent, CommonModule, RouterOutlet]
})
export class CustomersComponent implements OnInit {
  submenuCustomerPage: MenuInterface[]=[]

  ngOnInit(): void {
    this.submenuCustomerPage = [
      {
            path: PATHCUSTOMERS.CREATECUSTOMER,
            tittle: "Crear Cliente",
            icon: "fa-solid fa-plus",
            subMenu: []
          },
          {
            path: PATHCUSTOMERS.GETCUSTOMER,
            tittle: "Ver Clientes",
            icon:"fa-solid fa-magnifying-glass",
            subMenu: []
          },
          {
            path: PATHCUSTOMERS.UPDATECUSTOMER,
            tittle: "Actualizar Cliente",
            icon:"fa-solid fa-pen-to-square",
            subMenu: []
          },
    ]
    // console.log(this.menuInternalPages);
  }
}
