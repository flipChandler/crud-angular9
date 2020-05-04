import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

propLegal = "qualquer"; // BINDING DE ATRIBUTO

  constructor() { }

  ngOnInit(): void {
  }

  fazerAlgo() : void { // BINDING DE EVENTO
    console.log('Fazendo algo');
  }

}
