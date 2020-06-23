import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Postagens } from '../model/Postagens';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  token = {
    headers: new HttpHeaders().set('Authorization',localStorage.getItem('token'))
  };


  // Todo módulo que deve ser importado no typescript tem que colocal-lo no CONSTRUTOR.
  constructor(private http: HttpClient) { }

  /*
  CRUD - Create(post), Read(get), Update(put), Delete(delete)

  endPoint - Um ponto onde me faz acessar o back-end (servidor) que esta na nuvem ou em um localHost

  */

  /*Esse método pode ser qualquer nome mas para ficar claro tem que ser nomes obvios
  como esse abaixo 'pegue todas as postagens' */


  getAllPostagens() {
    return this.http.get('http://localhost:8080/postagens', this.token)

  }

  postPostagem(postagens: Postagens){
    return this.http.post('http://localhost:8080/postagens', postagens, this.token)
  }

  putPostagem(postagens: Postagens){
    return this.http.put('http://localhost:8080/postagens', postagens,this.token)

  }

  getByIdPostagem(id:number){
    return this.http.get(`http://localhost:8080/postagens/${id}`,this.token)
  }

  deletePostagem(id:number){
    return this.http.delete(`http://localhost:8080/postagens/${id}`,this.token)
  }

  findByTitulo(titulo:string){
    return this.http.get(`http://localhost:8080/postagens/titulo/${titulo}`,this.token)
  }

}
