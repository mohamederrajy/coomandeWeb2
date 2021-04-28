import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CommandeserviceService} from '../services/commandeservice.service';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-edit-command',
  templateUrl: './edit-command.component.html',
  styleUrls: ['./edit-command.component.css']
})
export class EditCommandComponent implements OnInit {
  public datacommande;

  constructor(private router: Router, private activerouter: ActivatedRoute, private servicecommand: CommandeserviceService) {
  }

  ngOnInit(): void {
    let url = atob(this.activerouter.snapshot.params.id)
    console.log(url);
    this.servicecommand.GetRo(url)
      .subscribe(data => {
          this.datacommande = data;
        }, error => {
          console.log(error);
        }
      )

  }

}
