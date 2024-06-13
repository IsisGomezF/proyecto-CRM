import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  @Input() tituloForm: string = '';
  @Input() campos: any = '';
  @Input() data: any[] = [];
  @Input() boton: string = '';

  @Output() onInformacion:EventEmitter <any> = new EventEmitter();

  ngOnInit(): void {
    console.log("titulo",this.tituloForm);
  }
}
