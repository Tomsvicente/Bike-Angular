import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http: HttpClient) { }

  //funcion que retorna el listado

  getBikes(){
    return this.http.get('/server/api/v1/bikes');
  }

  //funcion que me inserta listado bikes
  createdBikeRegistration(bike:any){
    let body = JSON.stringify(bike);
    return this.http.post('/server/api/v1/bikes', body, httpOptions );
  }

  getUser(id: number){
    return this.http.get('/server/api/v1/bikes/' + id);
  }
}
