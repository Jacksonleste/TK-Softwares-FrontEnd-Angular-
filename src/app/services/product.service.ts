import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  serverUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  public getProcucts(){
    return this.http.get(`${this.serverUrl}/produtos`)
  }

  public getProcuct(id:any):Observable<any>{
    return this.http.get(`${this.serverUrl}/produtos/product/${id}`)
  }

  public searchProcucts(nome:any){
    return this.http.get(`${this.serverUrl}/produtos/search?nome=${nome}`)
  }
}
