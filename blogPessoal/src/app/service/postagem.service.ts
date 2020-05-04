import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  // Todo módulo que deve ser importado no typescript tem que colocal-lo no CONSTRUTOR.
  constructor(private http: HttpClient) { }

  /*
  CRUD - Create(post), Read(get), Update(put), Delete(delete)

  endPoint - Um ponto onde me faz acessar o back-end (servidor) que esta na nuvem ou em um localHost

  */

  /*Esse método pode ser qualquer nome mas para ficar claro tem que ser nomes obvios
  como esse abaixo 'pegue todas as postagens' */

  getAllPostagens() {
    return this.http.get('http://31.220.57.14:8080/postagens')

  }

  postPostagem(postagem: Postagem){
    return this.http.post('http://31.220.57.14:8080/postagens', postagem)
  }

  putPostagem(postagem: Postagem){
    return this.http.put('http://31.220.57.14:8080/postagens', postagem)

  }

  getByIdPostagem(id:number){
    return this.http.get(`http://31.220.57.14:8080/postagens/${id}`)
  }


}
