import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'ng';

  constructor(private _http: HttpClient){ }

  usuarios: Usuario[] = [];

  ngOnInit(){
    this._http.get('https://jsonplaceholder.typicode.com/users')
    .pipe(
      delay(4000)
    ).subscribe((usuarios: Usuario[] | any) => this.usuarios = usuarios)
  }
}

export interface Usuario {
  name: string;
}
