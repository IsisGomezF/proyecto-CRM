import { Component, OnInit } from '@angular/core';
import { FormComponent } from "../../components/form/form.component";
import { MenusComponent } from "../../shared/menus/menus.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-creat-client',
    standalone: true,
    templateUrl: './creat-client.component.html',
    styleUrl: './creat-client.component.css',
    imports: [FormComponent, MenusComponent, RouterOutlet]
})
export class CreatClientComponent implements OnInit{
  titulo: string = 'Creación de clientes';

  ngOnInit(): void {
    // console.log(this.titulo);
  }

}
