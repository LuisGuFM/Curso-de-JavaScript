let amigo = {
    nome: 'Jose', 
    sexo:'M', 
    peso: 84.5 ,
    engordar(p=0) {
        console.log('Engordou')
        this.peso += p
    
}}

console.log`${amigo.nome} pesa ${peso}Kg`