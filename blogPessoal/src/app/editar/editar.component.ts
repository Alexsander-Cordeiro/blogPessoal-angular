import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagens } from '../model/Postagens';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  postagens: Postagens = new Postagens

  constructor(private postagemService: PostagemService, private route: ActivatedRoute,
     private router: Router) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params['id']
    this.findById(id)
  }

  findById(id:number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagens)=>{
      this.postagens = resp
    })
  }

  salvar(){
    this.postagemService.putPostagem(this.postagens).subscribe((resp: Postagens)=>{
      this.postagens = resp
      this.router.navigate(['/feed'])
      location.assign('/feed')
      
    })
  }

}
