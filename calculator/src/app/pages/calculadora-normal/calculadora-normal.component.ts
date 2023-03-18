import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-normal',
  templateUrl: './calculadora-normal.component.html',
  styleUrls: ['./calculadora-normal.component.css']
})
export class CalculadoraNormalComponent {

  op_running: boolean = true;

  first_number: string = '';
  second_number: string = '';
  actual_position: number = 1;
  operation: string = '';
  result: any = '0';

  //Caso 1 es cuando estás ingresando valores a la primer variable
  //Caso 2 es cuando estás ingresando valores a la segunda variable

  //Value methods
  setNumber(number: string): void {
    switch (this.actual_position) {
      case 1:
        if(this.first_number == ''){
          this.first_number = number;
          this.result = this.first_number;
        } else{
          this.first_number = this.first_number + number;
          this.result = this.first_number;
        }
        break;
      case 2:
        if(this.second_number == ''){
          this.second_number = number;
          this.result = this.second_number;
        } else{
          this.second_number = this.second_number + number;
          this.result = this.second_number;
        }
        break;
    }
  }

  changeSign() {
    if(this.result != '0') {
      switch (this.actual_position) {
        case 1:
          this.first_number = ((parseInt(this.first_number)) * (-1)).toString();
          this.result = this.first_number;
          break;
        case 2:
          this.second_number = ((parseInt(this.second_number)) * (-1)).toString();
          this.result = this.second_number;
          this.operation = '';
          break;
      }
    }
  }

  //Comprende +, -, /, x, %
  setSimpleOperation(oper: string) {
    switch (this.actual_position) {
      case 1:
        this.operation = oper;
        this.actual_position = 2;
        break;
      case 2:
        this.resolve()
            .then( (res) => {
              this.result = res;
              this.actual_position = 2;
              this.first_number = res;
              this.operation = oper;
              this.second_number = '';
            })
            .catch( (error) => console.log(error));
        break;
    }
  }

  //Comprende raíz, ^2, ^3, 1/x, +/- 
  setOnevalueOperation(oper: string) {
    if(this.result != '0') {
      this.first_number = this.result;
      this.operation = oper;
      this.actual_position = 2;
      this.second_number = '';
      this.resolve()
            .then( (res) => {
              this.result = res;
            })
            .catch( (error) => console.log(error));
    } else{
      this.first_number = '';
      this.second_number = '';
      this.operation = '';
      this.result = '0';
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

  getResult() {
    if((this.first_number != '') && (this.second_number != '')) {
      this.resolve()
      .then( (res) => {
        this.result = res;
        this.actual_position = 2;
      })
      .catch( (error) => console.log(error));
    } else if((this.first_number != '') && (this.second_number == '')) {
      this.result = this.first_number;
    } else if((this.first_number == '') && (this.second_number != '') && (this.operation == '+') || (this.operation == '-')) {
      if(this.operation == '-') {
        this.changeSign();
      } else {
        this.result = this.second_number;
      }
    } else {
      this.result = '0';
    }
  }

  async resolve(): Promise<any> {
    let res = 0;
    switch (this.operation) {
      case '+':
        res = parseInt(this.first_number) + parseInt(this.second_number);
        break;
      case '-':
        res = parseInt(this.first_number) - parseInt(this.second_number);
        break;
      case '/':
        if(parseInt(this.second_number) != 0){
          res = parseInt(this.first_number) / parseInt(this.second_number);
        } else{
            throw new Error("No se puede dividir por cero");
        }
        break;
      case 'x':
        res = parseInt(this.first_number) * parseInt(this.second_number);
        break;
      case '%':
        if(parseInt(this.second_number) == 0){
          throw new Error("No se puede dividir por cero");
        } else if((parseInt(this.second_number) >= 100)||(parseInt(this.second_number) <= 0)) {
          throw new Error("El valor para obtener el porcecntaje debe estar entre 0 y 100");
        } else{
          res = parseInt(this.first_number) * (parseInt(this.second_number)/100);
        }
        break;
      case '(root)':
        res = Math.sqrt(parseInt(this.first_number));
        break;
      case '^2':
        res = parseInt(this.first_number) * parseInt(this.first_number);
        break;
      case '^3':
        res = parseInt(this.first_number) * parseInt(this.first_number) * parseInt(this.first_number);
        break;
      case '(1/x)':
        res = 1 / parseInt(this.first_number);
        break;
      case '(1/x)':
        res = 1 / parseInt(this.first_number);
        break;
    }
    return res;
  }

}
