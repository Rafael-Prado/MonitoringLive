import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import { IEstado } from './../../Interfaces/IEstado';

@Injectable()
export class EstadosService {
  public UrlBase: string = 'http://app.nextplus.com.br:9595/topmed-api-homolog/api/farmacias/'

  constructor(public http: Http) {
  }

  getAllEstados(): Observable<IEstado[]>{
    return this.http.get(this.UrlBase + 'estados')
    .pipe(map(res => res.json()));
  }

  getAllCidade(estado: string) {
    return this.http.get(this.UrlBase +'/'+ estado +'/cidades')
    .pipe(map(res => res.json()))
  }

  getAllBairro(estado: string, cidade: string){
    return this.http.get(this.UrlBase + '/'+ estado + '/'+ cidade + '/bairros' )
    .pipe(map(res => res.json()));
  }

}
