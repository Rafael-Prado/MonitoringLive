import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
  private serviceUrl: string = 'http://app.nextplus.com.br:9595/topmed-api-homolog/'

  constructor(public http: Http) {
  }

  authenticate(data: any){
    let us = JSON.stringify({
       'Usuario':  data.username ,
        'Senha': data.password 
      });
      console.log(us)
    let header = new Headers();
     header.append('Content-Type', 'application/json')
    return this.http
    .post(this.serviceUrl + 'api/Login', us,{
      headers:header
    })
    .pipe(map((res: Response) => res.json()));
}

}
