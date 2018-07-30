import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { IVideochamada } from '../../Interfaces/IVideochamada';
import { map } from 'rxjs/operators';

@Injectable()
export class VideoChamadaProvider {

  private serviceUrl: string = 'http://app.nextplus.com.br:9595/topmed-api-homolog/';
  private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });

  constructor(public http: Http) {
  }


  public PostVideoChamada(videoChamada: IVideochamada) {
    let body = JSON.stringify({ IdUsuario: videoChamada.IdUsuario,
       UrlChamada: videoChamada.urlChamada,
       DataSolicitacao: videoChamada.DataSolicitacao,
       Telefone: videoChamada.Telefone });
        return this.http.post(this.serviceUrl + 'api/VideoChamada',body, this.options)
        .pipe(map((res: Response) => res.json()));
  }


  handleError(erro: any): any {
    return console.log(erro);
  }

}
