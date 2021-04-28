import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommandeserviceService} from '../services/commandeservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  public commandes:any;
  constructor(private commandeService:CommandeserviceService, private router:Router) { }

  ngOnInit(): void {

  }

  ongetcommanes() {
    this.commandeService.getcommande()
      .subscribe(data=>{
        this.commandes=data;
      },error => {
        console.log(error);
        }

        )

  }

  oncherecher(form: any) {
    this.commandeService.getcommandeByref(form.keyword)
      .subscribe(data=>{
          this.commandes=data;
        },error => {
          console.log(error);
        }

      )
  }

  DeleteCommande(c: any) {
   // console.log(c);
    this.commandeService.DeleteCommand(c.idCommand)
      .subscribe(data1=>{
          this.commandes=data1;
        },error => {
          console.log(error);
        }

      )
    this.commandeService.getcommande()
     .subscribe(data=>{
        this.commandes=data;
      },error => {
        console.log(error);
      }

    )

  }

  editCommande(c) {
    let url = "http://localhost:8090/spring/commande/"+c.idCommand
    //console.log(url);
    this.router.navigateByUrl("/edite/"+btoa(url));

  }
}
