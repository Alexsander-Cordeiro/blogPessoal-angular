import { Component, OnInit } from '@angular/core';
import { Postagens } from '../model/Postagens';
import { PostagemService } from '../service/postagem.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent implements OnInit {

  postagens: Postagens = new Postagens

  delOk: boolean = false

  constructor(private postagemService: PostagemService, private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(){
   
   
    let id:number = this.route.snapshot.params['id']
    this.findById(id);


 
  }

  findById(id:number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagens)=>{
      this.postagens = resp
    },
    err => {
      console.log(`Erro: ${err.status}, não conseguimos pegar o id`)
    })
  }

  btnSim(){
    this.postagemService.deletePostagem(this.postagens.id).subscribe(()=>{
      this.delOk = true
      let token = localStorage.getItem('token');
      this.router.navigate(['feed'])
      // "delOk" é um titulo que ficara no localStorage, pode ser qualquer nome
      localStorage.setItem("delOk", this.delOk.toString())

    })

  }

  btnNao(){
    this.router.navigate(['/feed'])
  }

}
