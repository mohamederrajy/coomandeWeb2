import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommandeserviceService {

  constructor(private httClient:HttpClient ) { }
  host="http://localhost:8090/spring/commande/";
  public getcommande(){
  return   this.httClient.get(this.host);

  }
  public getcommandeByref(ref:string){
    return   this.httClient.get(this.host+"serche/"+ref);

  }
  public DeleteCommand(commandeid){
    return this.httClient.delete(this.host+"delete/"+commandeid);

  }
  public SaveRo(url,data){
    return this.httClient.post(url,data);

  }
  public GetRo(url) {
    return this.httClient.get(url);
  }
}

