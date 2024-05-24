import { Component } from '@angular/core';
import { MenuComponent } from "../../shared/menu/menu.component";

@Component({
    selector: 'app-analytics',
    standalone: true,
    templateUrl: './analytics.component.html',
    styleUrl: './analytics.component.css',
    imports: [MenuComponent]
})
export class AnalyticsComponent {

}
