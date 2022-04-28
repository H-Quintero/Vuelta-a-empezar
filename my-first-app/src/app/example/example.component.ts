import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  color:string = 'red';

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
