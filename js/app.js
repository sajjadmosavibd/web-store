

/* 
const backgroundContainer=document.querySelector('#background') ;
const lineCount=100
;

const setRandomPosition=(tag)=>{
tag.style.top=`${Math.random()*100}%`;
tag.style.left=`${Math.random()*100}%`;
}

const setLines=()=>{
for(let i=0 ; i < lineCount ; i++){
    const line=document.createElement('div');
    line.classList.add('line');
    setRandomPosition(line);
    backgroundContainer.appendChild(line);
    line.style.animationDelay = `${-Math.random() * 5}s`;
    if(i < 50){
        line.classList.add('rotate-left');
    }else{
        line.classList.add('rotate-right')
    }
}
}

window.addEventListener('load',setLines);
 */



// header animation started 



const headerContainer=document.querySelector('#header');

const headerAnimation=()=>{
    const line=document.createElement('div');
    line.className='header-line line-animation';
    const windowWidth=Number(document.documentElement.clientWidth);
    const randomWidth=(Math.floor(Math.random()*windowWidth));
    document.documentElement.style.setProperty('--random-translateX',`${randomWidth}px`)
   
    headerContainer.appendChild(line)
    setTimeout(()=>{
         line.remove()
    },2000)
}

setInterval(headerAnimation,Math.random()*4000)
