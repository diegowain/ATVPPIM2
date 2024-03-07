import conectar from './conexao.js';

import conectar from '../modelo.js';

export default class EventoDAO{


    async gravar(evento){
if ( evento instanceof Evento){
    const conexao = await conectar();
    const sql = 'INSERT INTO evento (codigo, local,data,horario, valor) values (?,?,?,?,?)';
    const parametros = [
        evento.codigo,
        evento.local,
        evento.data,
        evento.horario,
        evento.valor
    ]
    
        const {resultados, campos}= await conexao.execute(sql, parametros)
        evento.codigo = resultados.insertId 
   
    }

    }

    async atualizar(evento){
        if ( evento instanceof Evento){
            const conexao = await conectar();
            const sql = 'UPDATE evento SET  local=?,data=?,horario=?, valor=? WHERE codigo =?';
            const parametros = [
               
                evento.local,
                evento.data,
                evento.horario,
                evento.valor,
                evento.codigo
            ]
            
                 await conexao.execute(sql, parametros)
    }
}
    async excluir(evento){
        if ( evento instanceof Evento){
            const conexao = await conectar();
            const sql = 'DELETE FROM evento WHERE codigo =?';
            const parametros = [
               
                evento.codigo
            ]
            
                 await conexao.execute(sql, parametros)
    }
}
    async consultar(termodepesquisa){
        if(termodepesquisa === undefined){
            termodepesquisa="";
        }
        let sql="";
        if(isNaN(termodepesquisa)){
            sql = 'SELECT = FROM evento WHERE local LIKE"%?%"'
        }
        else{
            sql = 'SELECT * FROM evento WHERE codigo=?'
        }
    const conexao = await conectar();
    const [registros] = await conexao.execute(sql,[termodepesquisa])
    
    let listaEventos =[];
    for (const registro of registro){
const evento = new Evento(  
    registro.codigo,
    registro.local,
    registro.data,
    registro.horario,
    registro.valor);
 listaEventos.push(evento);

    }
return listaEventos;
    }
}