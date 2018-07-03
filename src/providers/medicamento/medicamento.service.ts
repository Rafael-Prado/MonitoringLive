import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable()
export class MedicamentoService {
    private urlBase: string = 'http://app.nextplus.com.br:9595/topmed-api-homolog/api/medicamentos'

  constructor(public http: Http) {
  }

  getMeticamentos(palavra : any) {
    return this.http.get(this.urlBase + '/' + palavra)
    .pipe(map(farmacia => farmacia.json()))
  }

}
