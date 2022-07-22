import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  products:any = []

  teste:boolean = false

  texto:string = ""
  
  constructor(private productService: ProductService, private route: ActivatedRoute) {
    
   }

  ngOnInit(): void {


    this.route.queryParams.subscribe(parametros =>{
      if(parametros['search']){
        this.productService.searchProcucts(parametros['search']).subscribe(
          data =>{
            this.products = data;
          },
          error => {
            console.log(error)
          }
          )
      }else{
        this.productService.getProcucts().subscribe(
          data =>{
            this.products = data;
          },
          error => {
            console.log(error);
          }
          )
      }
    })

    
  }

}
