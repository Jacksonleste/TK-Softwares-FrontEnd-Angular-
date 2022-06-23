import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  serverUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  public getProcucts(){
    return this.http.get(`${this.serverUrl}/produtos`)
  }

  public searchProcucts(nome:any){
    return this.http.get(`${this.serverUrl}/produtos/search?nome=${nome}`)
  }
}
