import { Component, OnInit } from '@angular/core';

export interface UserModel {
  name: string;
  age: number;
}

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  color:string = 'red';
  user: UserModel = {
    name: 'Hugo',
    age: 38
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.color);
  }

  sayHello(): string {
    return 'Hello class';
  }

  sum2Nums(a: number, b: number): number {
    return a + b;
  }
}
