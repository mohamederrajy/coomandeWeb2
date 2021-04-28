import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Observable, Observer } from 'rxjs';
import {CommandeserviceService} from '../services/commandeservice.service';
@Component({
  selector: 'app-commandeitems',
  templateUrl: './commandeitems.component.html',
  styleUrls: ['./commandeitems.component.css']
})
export class CommandeitemsComponent implements OnInit {
  array = [1, 2, 3, 4,5];
  dotPosition = 'left';

  constructor(private fb: FormBuilder,private  itemcommandser:CommandeserviceService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      ref: [null, [Validators.required]],
      total: [null, [Validators.required]],

    });
  }

  validateForm!: FormGroup;

  submitForm(data: any): void {
    console.log(data);
    this.itemcommandser.SaveRo(this.itemcommandser.host, data)
      .subscribe(res => {
          console.log(res);
        }, error => {
          console.log(error);
        }
      )
  }
}
