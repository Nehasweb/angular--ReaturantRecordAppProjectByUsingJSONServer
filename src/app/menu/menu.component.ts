import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit
 {
      menuForm! : FormGroup ;
     

      constructor(private formbuilder : FormBuilder, private _http : HttpClient, private _router : Router) { }

      ngOnInit(): void 
      {
        this.menuForm = this.formbuilder.group({

        });
      }
}




