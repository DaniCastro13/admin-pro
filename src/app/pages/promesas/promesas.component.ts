import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html'
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const promesa = new Promise((resolve, reject) => {
    //   if( false ){
    //     resolve('Hola Mundo');
    //   } else {
    //     reject('Algo salio mal');
    //   }
    // });
    // promesa.then(() => {
    //   console.log('Hey Termine!');
    // })
    // .catch(error => console.log('error en mi promesa', error))
    this.getUsuarios().then(usuario => {
      console.log(usuario);
    });
  }

  getUsuarios() {
    return new Promise(resolve => {
      fetch('https://reqres.in/api/users?page=2')
      .then(response =>  response.json())
      .then(body => console.log(body.data))
      });
    }
}
