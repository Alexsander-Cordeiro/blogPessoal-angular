import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import {Postagens } from '../model/Postagens';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  nome: string = localStorage.getItem('nome')
  
  key = 'data'
  reverse = true

  postagens: Postagens = new Postagens;

  listaPostagens: Postagens[]

  alerta: boolean = false

  pesquisa: boolean = false

  titulo:string

  // Tudo que fazer no CONSTRUTOR é injeção de dependência
  constructor(
    private postagemService: PostagemService,
    private router: Router,
    private route: ActivatedRoute,
    private locationPage: Location) { }

  // Tudo que fizer no ngOnInit é aquilo que vai ser carregado quando abrir minha aplicação.
  ngOnInit() {

    let token = localStorage.getItem('token');

    if(token == null){
      alert('Faça o login antes de acessar a página de feed')
      this.router.navigate(['/login']);
    }

    let item:string = localStorage.getItem('delOk')

    if(item == "true"){
      this.alerta = true
      localStorage.removeItem('delOk')
      // Depois de 3 segundos a pagina vai ser atualizada
      setTimeout(()=>{
        this.refresh() 
      }, 3000)
         


    }


  }


  publicar() {
    this.postagemService.postPostagem(this.postagens).subscribe((resp: Postagens)=>{
      this.postagens = resp
      this.refresh()
    })
  }

  pesquisarPorTitulo(){
    this.postagemService.findByTitulo(this.titulo).subscribe((resp: Postagens[])=>{
      this.listaPostagens = resp
      this.pesquisa = true

    })
  }

  refresh(){
    this.router.navigateByUrl('/lista-post',{skipLocationChange: true})
    .then(()=>{
      this.router.navigate([this.locationPage.path()])
    })
  }

}
