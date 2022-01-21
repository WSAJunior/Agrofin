import { Recebedor } from './../recebedor/recebedor.model';
export interface Titulo {

  TITULO_ID?: number,
  RECEBEDOR_ID?: number,
  PAGADOR_ID?: number,
  TITULO_VALOR: number | null,
  TITULO_DESCRICAO: string,
  TITULO_DATA: Date,
  TITULO_VALOR_EXTENSO: string,
  TITULO_CIDADE: string,
  TITULO_ESTADO: string,
}
