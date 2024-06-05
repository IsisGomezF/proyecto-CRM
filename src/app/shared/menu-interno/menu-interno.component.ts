import { Component, Input, OnInit } from '@angular/core';
import { MenuInterface } from "../../core/interfaces/menu.interface";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-interno',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu-interno.component.html',
  styleUrl: './menu-interno.component.css'
})
export class MenuInternoComponent implements OnInit{
  @Input() menuInternalPages: MenuInterface[]=[]

  ngOnInit(): void {
  // console.log(this.menuInternalPages);
  }
}
