import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(value: any[]): any {

    let noimage =  "assets/img/noimage.png";

    // if (!value){
    //   return noimage;
    // }
    // else{
    //   if (value.length > 0){
    //     return value[1].url;
    //   } else{
    //       return noimage;
    //   }
    // }
    // simplificamos con condicional ternario
    return (!value)? noimage : (value.length > 0)? value[1].url : noimage;



  }

}
