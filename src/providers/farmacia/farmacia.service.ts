import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class FarmaciaService {
  public urlBase: string = 'http://app.nextplus.com.br:9595/topmed-api-homolog/api/farmacias/';

  constructor(public http: Http) {
  }

  getFarmacias(estado: string, cidade: string, bairro: string){
    return this.http.get(this.urlBase +'/'+ estado + '/' + cidade + '/' + bairro)
    .pipe(map(res => res.json()));
       
  }

}
