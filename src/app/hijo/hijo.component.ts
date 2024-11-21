import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

  @Input() mensaje: string = '';

  nuevo_msg = 'Mensaje del hijo para el padre';
  @Output() mensajeEvent = new EventEmitter<string>();

  renderizado = false;
  num = 54;
  isAvailable = true;
  aparece = 'Pasa por encima';
  

  constructor() {
    this.renderizado = this.renderizado;
    this.num = this.num;
    this.isAvailable = this.isAvailable;

    setTimeout(() => {
      this.renderizado = true;
     }, 3000);

   }

   

  enviarMensaje(){
    this.mensajeEvent.emit(this.nuevo_msg);
  }


  onMouseEnter(){
    this.aparece = 'Hago mouseenter';
  }

  onMouseLeave(){
    this.aparece = 'Hago mouseleave';
  }

  click(){
    alert('Click');
  }



}
