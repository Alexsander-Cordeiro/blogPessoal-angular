import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import { Postagens } from '../model/Postagens';

@Component({
  selector: 'app-lista-post',
  templateUrl: './lista-post.component.html',
  styleUrls: ['./lista-post.component.css']
})
export class ListaPostComponent implements OnInit {

  constructor(private postagemService: PostagemService) { }
  
  key = 'data'
  reverse = true

  alerta: boolean = false
  postagens: Postagens = new Postagens
  listaPostagens: Postagens[]

  ngOnInit(): void {
    this.findallPostagens()
    

  }

           // subscribe ele inseri na variavel "resp" o objeto que quero enviar.
  findallPostagens(){
      window.scroll(0,0)
                              
      this.postagemService.getAllPostagens().subscribe((resp: Postagens []) => {
      this.listaPostagens = resp
         })
  }
}
