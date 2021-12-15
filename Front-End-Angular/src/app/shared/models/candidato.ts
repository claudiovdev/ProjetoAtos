import { Recrutador } from './recrutador';
export interface Candidato {
  id?: number;
  nome: string;
  sobreNome: string;
  email: string;
  recrutador: {
    id?: number;
    nome: string;
    sobrenome: string;
    email: string
  };
}
