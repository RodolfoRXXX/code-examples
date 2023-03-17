import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-normal',
  templateUrl: './calculadora-normal.component.html',
  styleUrls: ['./calculadora-normal.component.css']
})
export class CalculadoraNormalComponent {

  op_running: boolean = true;

  first_number!: string;
  second_number!: string;
  actual_position: number = 0;
  operation!: string;
  result: string = '0';

  //Value methods
  setNumber(number: string): void {
    switch (this.actual_position) {
      case 0:
        this.first_number = number;
        this.actual_position = 1;
        break;
      case 1:
        this.first_number = this.first_number + number;
        break;
      case 2:
        this.second_number = this.second_number + number;
        break;
    }
  }

  setSimpleOperation(oper: string) {
    switch (this.actual_position) {
      case 1:
        this.operation = oper;
        this.actual_position = 2;
        break;
      case 2:
        
        break;
    }
  }

  setOnevalueOperation(oper: string) {
    switch (this.actual_position) {
      case 1:
        this.operation = oper;
        this.actual_position = 2;
        break;
      case 2:
        
        break;
    }
  }

  setDeleteOperation(oper: string) {
    switch (this.actual_position) {
      case 1:
        this.operation = oper;
        this.actual_position = 2;
        break;
      case 2:
        
        break;
    }
  }

}
