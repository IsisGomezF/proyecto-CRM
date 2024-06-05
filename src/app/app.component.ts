import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./shared/menu/menu.component";
import { MenuInternoComponent } from "./shared/menu-interno/menu-interno.component";
import { MenusComponent } from "./shared/menus/menus.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MenuComponent, MenuInternoComponent, MenusComponent]
})
export class AppComponent {
  title = 'proyecto-crm';
}
