// Objetos
const game = document.querySelector('.game');
const boneco = document.querySelector('.boneco');
const cano = document.querySelector('.cano');
const Gover = document.querySelector('.letraGameOver');
const textoreinicia = document.querySelector('.textoGover');
const pontos  = document.querySelector('.pontuacao');
const somover = document.querySelector("#gameover");
const sompulo = document.querySelector("#pulo");
const somtema = document.querySelector("#tema");
const levelcoletado = document.querySelector(".level");


// const goku = document.querySelector('.goku');

//Audios
let sounds = {
    musica: new Audio('sons/tema.mp3'),
    pulandosom: new Audio('sons/pulo.mp3'),
    gameoversom: new Audio('sons/gameover.mp3'),
    caiusom: new Audio('sons/caiu.mp3'),
    moedasom: new Audio('sons/moeda.mp3')
  };

  var tocamusica = sounds.musica.play();
  var tocaover = sounds.musica.play();

  if(tocamusica){
    sounds.gameoversom.pause();
    sounds.gameoversom.currentTime = 0;
  }

// easter egg
// setInterval(() => {
//     goku.style.display = 'inline'; 
// }, 7200);

// Ação do boneco
const pulando =()=>{
    sounds.musica.play();
    sounds.pulandosom.play();
    boneco.classList.add('pulando');

    setTimeout(()=>{
        boneco.classList.remove('pulando');
       
    },500);
}
// pontuacao

    let pontuar = 0;
    const batida = cano.style.right = '0%';

const pontocorrendo = setInterval(() => {
    if(batida){
        pontuar = pontuar + 1;  
        pontos.innerHTML= pontuar;  
     } 
}, 10);

pontos.innerHTML = pontuar;

//Level

var contador = 1.5;
    setInterval(function() {
      contador -= 0.01;
      cano.style.animation = `canoanime ${contador}s linear infinite`;
}, 999);

    cano.style.animation = `canoanime ${1.5}s linear infinite`;

setInterval(() => {
if(pontuar >= 1000){
    levelcoletado.innerHTML = 'Level 1';  
    clearInterval(); 
}
}, 100); 
setInterval(() => {
    if(pontuar >= 2000){
        levelcoletado.innerHTML = 'Level 2';  
        game.style.background = 'linear-gradient(#FFA500, #ffffff)'
         
}
}, 100);
setInterval(() => {
    if(pontuar >= 3000){
        levelcoletado.innerHTML = 'Level 3'; 
        game.style.background = 'linear-gradient(#00003c, #ffffff)';
}
}, 100);
setInterval(() => {
    if(pontuar >= 4000){
        levelcoletado.innerHTML = 'Level 4'; 
        game.style.background = 'linear-gradient(#73b4ff, #ffffff)';
          
}
}, 100);
setInterval(() => {
    if(pontuar >= 5000){
        levelcoletado.innerHTML = 'Level 5';  
        game.style.background = 'linear-gradient(#FFA500, #ffffff)';
}
}, 100);
setInterval(() => {
    if(pontuar >= 6000){
        levelcoletado.innerHTML = 'Incrível!';  
        game.style.background = 'linear-gradient(#00003c, #ffffff)';  
}
}, 100);

    

//configuraçao de gameover

const loop = setInterval(() => {

    
   const canoPosicao = cano.offsetLeft;
   //o + na frente do window converte para numero
   const bonecoPosicao = +window.getComputedStyle(boneco).bottom.replace('px','');

   console.log(canoPosicao);
   console.log(bonecoPosicao);

   if(canoPosicao <= 240 && canoPosicao > 0  && bonecoPosicao < 180){
   
    sounds.caiusom.play();

   setInterval(() => {
    sounds.musica.pause();
    sounds.pulandosom.pause();
    sounds.musica.currentTime = 0; 
   }, 10); 

        setTimeout(() => {
            sounds.gameoversom.play();
        }, 3000);
        setTimeout(() => {
            sounds.gameoversom.pause(); 
        }, 11000);
    cano.style.animation = 'none';
    cano.style.left = ` ${canoPosicao}px`;

    
    boneco.style.bottom = ` ${bonecoPosicao - 15}px`;
    
    boneco.src = 'img/gameover.png';
    boneco.style.height = '25%';
    boneco.style.left = '12%';
    
   
    setTimeout(() => {
        boneco.classList.add('bonecoCaindo'); 
        boneco.style.bottom = ` ${-400}px`; 
        boneco.style.zIndex = '6';
    }, 500);
 
    
    Gover.style.display = 'inline';
    textoreinicia.style.display = 'inline'; 
    pontos.style.color = "yellow";
    pontos.style.scale = "1.8";
    pontos.style.top = "20%";
    

      const textoFinal =  setInterval(() => {
            setTimeout(() => {
            textoreinicia.style.display = 'inline';  
            }, 500);
            textoreinicia.style.display = 'none'; 
        }, 1000);
  

    const reiniciar =()=>{
        location.reload();
    }
    setTimeout(() => {
        document.addEventListener('click', reiniciar);
        document.addEventListener('keydown', reiniciar); 
    }, 1000);

    clearInterval(loop);
    clearInterval(pontocorrendo);

   } 
}, 10);
document.addEventListener('click', pulando);
document.addEventListener('keydown', pulando);