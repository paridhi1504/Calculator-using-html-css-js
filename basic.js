const buttons = document.getElementsByClassName('btn');
const screen = document.getElementById('screen');
const infoPara = document.getElementById('info')
 
    for(let i=0; i<buttons.length; i++){
        buttons[i].addEventListener('click', (event)=>{
            let inputText ='';
            switch(event.target.innerHTML){

                case 'C':
                    break;

                case '=':
                    try{
                        inputText = eval(screen.value)
                    }catch(e){
                        inputText =''
                        infoPara.style.display ='block'
                        info.innerHTML = 'Invalid Expression'
                    }
                  
                    break;
                
                case '':
                    inputText =  screen.value.slice(0, screen.length-1)
                    break;
                default:
                    inputText =  `${screen.value}${event.target.innerHTML}`
            }

            screen.value =  inputText
            // console.log(event.target.innerHTML);
//screen.value = `${screen.value}${event.target.innerHTML}`            
         })
    }