import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import { Postagem } from '../model/Postagem';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  key = 'data'
  reverse = true

  listaPostagens: Postagem [];

  postagem: Postagem = new Postagem;

  // Tudo que fazer no CONSTRUTOR é injeção de dependência
  constructor(private postagemService: PostagemService) { }

  // Tudo que fizer no ngOnInit é aquilo que vai ser carregado quando abrir minha aplicação.
  ngOnInit() {
    this.findallPostagens()
  }
                              // subscribe ele inseri na variavel "resp" o objeto que quero enviar.
  findallPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem []) => {
      this.listaPostagens = resp
    })
  }

  publicar() {
    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=>{
      this.postagem = resp
      location.assign('/feed')
    })
  }

}
