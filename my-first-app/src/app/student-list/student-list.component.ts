import { Component, OnInit } from '@angular/core';
import { ImgModel } from '../models/user.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  public numList: number[] = [1, 2, 3, 4];
  img: ImgModel = {
    src: 'https://estaticos.muyinteresante.es/media/cache/400x300_thumb/uploads/images/gallery/5937e90a5bafe882f5bc09e6/gatitos-cesta-redes.jpg',
    alt: 'Gatitos'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
