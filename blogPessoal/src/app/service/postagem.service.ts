import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  /*
  CRUD - Create, Ready, Update, Delete
  */

  /*Esse método pode ser qualquer nome mas para ficar claro tem que ser nomes obvios
  como esse abaixo 'pegue todas as postagens' */

  getAllPostagens() {
    return this.http.get('http://31.220.57.14:8080/postagens')

  }


}
