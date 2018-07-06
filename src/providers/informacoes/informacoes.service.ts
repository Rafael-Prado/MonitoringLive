import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { IInformacoes } from '../../Interfaces/IInformacoes';


@Injectable()
export class InformacoesService {

  private urlBase: string = 'http://app.nextplus.com.br:9595/topmed-api-homolog/api/informacoes';
  
  constructor(public http: Http) {
  }

  getInformacoes(): Observable<IInformacoes>{
    return this.http.get(this.urlBase + '/Saude24H')
    .pipe(map(inf => inf.json()));
  }
}
