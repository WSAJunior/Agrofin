import { Recebedor } from './../recebedor/recebedor.model';
export interface Titulo {

  Titulo_Id?: number,
  Recebedor_Id?: number,
  Pagador_Id?: number,
  Titulo_Valor: number | null,
  Titulo_Descricao: string,
  Titulo_Data: string,
  Titulo_Valor_Extenso: string,
  Titulo_Cidade: string,
  Titulo_Estado: string,
}
