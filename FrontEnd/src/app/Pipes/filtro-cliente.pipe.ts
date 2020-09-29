import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroCliente'
})
export class FiltroClientePipe implements PipeTransform {

  transform(Value: any, campo:string, ...args: any[]): any {
    if(!Value)return null;
    if(!args)return Value;
    return Value.filter(singleItem =>
      singleItem[campo].toLowerCase().includes(args)
    );
  }

}
