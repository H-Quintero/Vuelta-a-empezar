import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';

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

  userList: UserModel[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log('El color elegido es', this.color);
    console.log(this.user)
    console.log(this.userList)
    this.userList.push({
      name: 'Pepe',
      age: 34,
      gender: 'male'
    });
    this.userList.push({
      name: 'Lucia',
      age: 25
    })
  }

  sayHello(): string {
    return 'Hello class';
  }

  sum2Nums(a: number, b: number): number {
    return a + b;
  }
}
