
let type_content = document.querySelector('.type_content p');
let input = document.getElementById('typevalues');

//reset bt
let resetBtn = document.querySelector('.botton_part button');

let letterIndex = (mistakes = isTyping = 0);

let correctType = new Audio('type.mp3');
let IncorrectType = new Audio('wrong.mp3');
let soundBtn = document.querySelector('.sound input');

// variables for time wpa mistakes ... etc
let time;
let t_left = document.querySelector('.t_left');
let errors = document.querySelector('.error');
let wpm = document.querySelector('.wpm');
let cpm = document.querySelector('.cpm');
let maxTime = 60;
let timeleft = maxTime; 

const playSound = () =>{
    correctType.pause();
    IncorrectType.pause();
}

soundBtn.addEventListener('click', ()=>{
    playSound();
})

// define the loadPera function
const loadPera = () =>{

    // acticle for typing 
    const article = [
        "jill as; ad; sad; dad; ask; fad; lad; jak; sad; das; fad; asl; lad; fad; jak; lad; ask; dak; jak; fad; jak; sad; lad; dak; sad; sad; jak; lad; , ask dad jill asked sad dad ask jack said dad task jill asked sad dad ask lad ask jill asked lad, sad dad ask jack said lad ask sad dad jill said lad  lad; jak; sad; d ask; flasks all dad had jill asked as jacks lad did dad ask jack said sad dad task; lad ask  asked lad, sad dad ask jack said lad ask sad dad jill said lad sad dad flee; jak; sad; d ask; flasks all dad had jill asked as jacks lad did dad ask jack said sad dad task; lad ask jill asked lad, sad dad ask jack said lad ask sad dad jill said lad sad dad flee; desk jade; jest; self as; side;  task; ask jack deal; life; fade like; ask; safe fade; flee; feel; idle deal; life; fade like; ask; safe fade; flee; desk jade; jest; self as; side; left sad; feel; idle desk jade; jest; self as; side; sad dad flee; desk jade; jest; self as; side; left sad; feel; idle deal; life; fade like; ask; safe fade; flee; desk flasks dad task jack said dad sad dad ask dadfad; jak.",
        "sad; ad;  dad; ask; fad; lad; jak; sad; d ask; flasks all dad had jill asked as jacks lad did dad ask jack said sad dad task; lad ask jill asked lad, sad dad ask jack said lad ask sad dad jill said lad sad lad; jak; sad; d ask; flasks all dad had jill asked as jacks lad did dad ask jack said sad dad task; jak; sad; d ask; flasks all dad had jill asked as jacks lad did dad ask jack said sad dad task; lad ask jill asked lad, sad dad ask jack said lad ask sad dad jill said lad sad dad flee; desk jade; jest; self as; side;  task; ask jack deal; life; fade like; ask; safe fade; flee; feel; idle deal; life; fade like; ask; safe fade; flee; desk jade; jest; self as; side; left sad; feel; idle lad ask jill asked lad, sad dad ask jack said lad ask sad dad jill said lad sad dad flee; desk jade; jest; self as; side;  dad flee; desk jade; jest; self as; side; left sad; feel; idle deal; life; fade like; ask; safe fade; flee; desk flasks all jack had jack said sad dad task; ask lad jill said sad dad task; ask jack jack sai lad." ,
        "as; side; left sad; feel; idle deal; life; fade like; ask; safe fade; flee; desk jest; self as; side; left sad; feel; idle deal; life; jack said sad dad task; lad ask jill asked lad, sad fade like; ask; lad; jak; sad; d ask; flasks all dad had jill asked as jacks lad did dad ask jack said sad dad task; lad ask jill asked lad, sad dad ask jack said lad ask sad dad jill said lad jak; sad; d ask; flasks all dad had jill asked as jacks lad did dad ask jack said sad dad task; lad ask jill asked lad, sad dad ask jack said lad ask sad dad jill said lad sad dad flee; desk jade; jest; self as; side;  task; ask jack deal; life; fade like; ask; safe fade; flee; feel; idle deal; life; fade like; ask; safe fade; flee; desk jade; jest; self as; side; left sad; feel; idle sad dad flee; desk jade; jest; self as; side;  safe fade; flee; desk jade; jest; self as; side; left jack lad, flasks all sad dad had jack said lad sad; feel; idle deal; life; fade like; ask; safe fade; flee; desk jade; jest; self",
        "jak; sad; das; fad; asl; lad; fad; jak; lad; ask; dak; jak; fad; jak; sad; lad; dak; sad; sad; jak; lad; sad dad jill said lad sad dad flasks all jack had jack said sad dad task; ask lad jill said sad dad lad; jak; sad; d ask; flasks all dad had jill asked as jacks lad did dad ask jack said ask; fad; lad; jak; sad; das; fad; asl; lad; fad; jak; lad; ask; dak; jak; fad; jak; sad; lad; dak; sad; sad; jak; lad; , ask dad jill asked sad dad ask jack said dad task jill asked sad dad ask lad ask jill asked lad, sad dad ask jack said lad ask sad dad jill said lad  lad; jak; sad; d ask; flasks all dad  sad dad task; lad ask jill asked lad, sad dad ask jack said lad ask sad dad jill said lad sad dad flee; desk jade; jest; self as; side;  task; ask jack deal; life; fade like; ask; safe fade; flee; feel; idle deal; life; fade like; ask; safe fade; flee; desk jade; jest; self as; side; left sad; feel; idle"
    ];


    let random_pera = Math.floor(Math.random() * article.length);

    type_content.innerHTML = "";   //use for remove old content and the reload only new content 
    article[random_pera].split('').forEach(element =>{
        let realData = `<span>${element}</span>`;
        type_content.innerHTML += realData;
    });
//this is for active the blinker
    type_content.querySelectorAll('span')[0].classList.add('active');


// this is for removing the input box
    document.addEventListener('click',()=>{
        input.focus();
    })
    type_content.addEventListener('click',()=>{
        input.focus();
    })

}

loadPera();
// function

input.addEventListener('input', (e)=> {
    
    let char  = type_content.querySelectorAll('span');
    let inputValue = e.target.value.split('')[letterIndex];


    // for time at input time
    if(!isTyping){
        time = setInterval(timeSetup, 1000);
        isTyping =true;
    }



    if(letterIndex < char.length -1){
        if(inputValue == null){
        console.log('opps');
        }
        else{
            if(char[letterIndex].innerText == inputValue){
                char[letterIndex].classList.add('correct');
                correctType.play();
                playSound();
            }
            else{
                
                char[letterIndex].classList.add('incorrect');
                IncorrectType.play();
                mistakes++;
                playSound();
            }
        }
        letterIndex++;
        char.forEach(element => {
            element.classList.remove('active');
        })
        char[letterIndex].classList.add('active');

        // show mistakes in spaling
        errors.innerText = `Mistakes : ${mistakes}`;
        cpm.innerText = `cpm : ${letterIndex - mistakes}`;
    }else{
     
   }
});
const timeSetup = () =>{
    if(timeleft > 0){
        timeleft--;
       
        t_left.innerText = `Time-Left : ${timeleft}S`;
        let wpmTab = Math.round((letterIndex - mistakes)/5/(maxTime - timeleft) * 60);
        wpm.innerText = `wpm : ${wpmTab}`;
    }
};
resetBtn.addEventListener('click', ()=>{
    loadPera();
    clearInterval(time);
    wpm.innerText = `wpm : `;
    errors.innerText = `Mistakes : `;
    cpm.innerText = `cpm : `;
    timeleft=maxTime;
    t_left.innerText = `Time-Left : ${maxTime}S`;
    input.value = "";
    letterIndex = mistakes = isTyping = 0;
})