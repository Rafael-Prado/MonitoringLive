import { DateTimeData } from "ionic-angular/umd/util/datetime-util";

export class INoticiaInterface{
    Id:number;
    Titulo: string;
    UrlImagemCapa: string;
    Destaque: boolean;
    DataPublicacao: DateTimeData;
    Categoria:string;
    Corpo:string;
}