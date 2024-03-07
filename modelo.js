import EventoDAO from"../trabalhomod2ppi/EventoDAO";

export default class Evento{

   #codigo;
   #local;
   #data;
   #horario;
   #valor;


   constructor(codigo=0, local ="", data="", horarios="", valor=""){

    this.#codigo=codigo;
    this.#local=local;
    this.#data=data;
    this.#horario=horario;
    this.#valor=valor;


   }
   get codigo (){
    return this.#codigo;
   }
   set codigo(novoCodigo){
    this.#codigo = novoCodigo
   }

   get local (){
    return this.#local;
   }
   set local(novoLocal){
    this.#local = novoLocal
   }


   get data (){
    return this.#data;
   }
   set data(novoData){
    this.#data = novoData;
   }

   get horario (){
    return this.#horario;
   }
   set horario(novoHorario){
    this.#horario = novoHorario;
   }

   get valor (){
    return this.#valor;
   }
   set valor(novoValor){
    this.#valor = novoValor;
   }

   async gravar(){
    const dao = new EventoDAO();
    await dao.gravar(this);
   }

  async atualizar(){
    const dao = new EventoDAO();
    await dao.atualizar(this);
   }

   async excluir(){
    const dao = new EventoDAO();
    await dao.excluir(this);
   }

    async consultar(termodepesquisa){
        const dao = new EventoDAO();
        return await dao.consultar(termodepesquisa);
    }
}