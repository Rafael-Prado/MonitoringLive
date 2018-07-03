import { INoticiaInterface } from './../../Interfaces/INoticia.interface';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NoticiaService {

  private serviceUrl: string = 'http://app.nextplus.com.br:9595/topmed-api-homolog/'

  constructor(public http: Http) {
  }

  public GetAllNoticias(){
    return this.http.get(this.serviceUrl + "api/Noticias")
    .pipe(map(res => res.json()));
  }

  public GetNoticiaPorId(idNoticia: number): Observable<INoticiaInterface>{
    return this.http.get(this.serviceUrl + 'api/Noticias/'+ idNoticia)
      .pipe(map(res => res.json()));
  }

}
