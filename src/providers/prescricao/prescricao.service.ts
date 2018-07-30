
import { IPrescricao } from './../../Interfaces/IPrescricao';
import { Injectable } from '@angular/core';
import { SQLiteObject } from '../../../node_modules/@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database.service';

@Injectable()
export class PrescricaoProvider {

  prescricao: IPrescricao;

  constructor(
    private dbProvider: DatabaseProvider
  )
  {
    this.dbProvider.criarDataBase();
  }

  getListaPrescricao(){
    return this.dbProvider.getDb()
    .then((db: SQLiteObject) =>{
      let sql = 'SELECT *FROM prescricao';
      return db.executeSql(sql, [])
      .then((data: any) =>{
        if(data.rows.length > 0){
          let prescricoes: IPrescricao[] = [];
          for(var i = 0; i < data.rows.length; i++ ){
            this.prescricao = data.rows.item(i);
            prescricoes.push(this.prescricao);
          }
          return prescricoes;
        }else{
          return[];
        }
      })
      .catch((e) => console.error(e));
    })
    .catch((e) => console.error(e));
  }


  insert(prescricao: IPrescricao){
    return this.dbProvider.getDb()
    .then((db: SQLiteObject) =>{
      let sqlQuery = "INSERT INTO  prescricao (descricao, img) VALUES (?,?)";
      let data = [prescricao.Descricao, prescricao.Img];

      return db.executeSql(sqlQuery, data)
      .catch((e) => console.error(e));
    })
    .catch((e) => console.error(e));

  }

}
