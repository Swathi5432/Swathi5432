import { Injectable } from '@angular/core';

@Injectable()
export class MyServices {
  constructor() { }

  addition(a: any, b: any) {
    console.log('a+b', a + b);
    return a + b;
  }
  substraction(x: any, y: any) {
    console.log('x-y', x - y);
    return x - y;
  }

  multiplication(p: any, q: any) {
    console.log('p*q', p * q);
    return p * q;
  }

  division(s: any, t: any) {
    console.log('s/t', s / t);
    return s / t;
  }

  squareRoot(num: number){
    return Math.sqrt(num);
  }
}
