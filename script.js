

const btnpaper = document.getElementById('buttonpaper')
const btnstone = document.getElementById('buttonstone')
const btnscissors = document.getElementById('buttonscissors')

const mostraresultado =  document.getElementById('resultado')

/*Escolhe aleatóriamente um numero entre 1 e 3, onde 1 
representa o papél, 2 reprenta pedra, e 3 tesoura.*/
function escolhapc(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

let escolhadopc // chama a função escolhapc DENTRO DO BOTÃO 

//Botão para o usuário escolher papel
btnpaper.addEventListener('click',function(){
 escolhadopc = escolhapc(1,3)
 
 if(escolhadopc === 1){
     mostraresultado.innerText = ('EMPATE! O computador também escolheu papel. :[')
    }
 if(escolhadopc === 2){
        mostraresultado.innerText =('VITÓÓÓÓRIIA!! O computador escolheu pedra :)')
   }
 if(escolhadopc === 3){
        mostraresultado.innerText = ('DERROTA... O computador escolheu tesoura :[... mas tente novamente :)')
    }
})
 //Botão para o usuário escolher pedra
btnstone.addEventListener('click',function(){
    escolhadopc = escolhapc(1,3)
    if(escolhadopc === 1){ 
       mostraresultado.innerText = ('DERROTA... O computador escolheu papel :[... mas tente novamente :) ')
      }
   if(escolhadopc === 2){    
          mostraresultado.innerText =('EMPATE. O computador também escolheu pedra :[')
     }
   if(escolhadopc === 3){      
          mostraresultado.innerText = ('VITÓÓÓÓÓÓRIA!! O computador escolheu tesoura :)')
      }
  })

//Botão para o usuário escolher tesoura
btnscissors.addEventListener('click',function(){
    escolhadopc = escolhapc(1,3)
    if(escolhadopc === 1){
       mostraresultado.innerText = ('VITÓÓÓÓÓÓRIA!! O computador escolheu papel :)')
      }
   if(escolhadopc === 2){
          mostraresultado.innerText =('DERROTA... O computador escolheu pedra :[...Mas tente novamente:)')
     }
   if(escolhadopc === 3){
          mostraresultado.innerText = ('EMPATE. O computador também escolheu tesoura :[')
      }
})





