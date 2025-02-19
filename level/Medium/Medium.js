
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
        "The great thing is that you can continue to do this as many times as you need until you find the exact quote you were looking for. Some people flip through them quickly until they find one that just hits them right while others spend some time considering each one word quote before deciding whether When we think of quotes we do not usually think about one word quotes but one word quotes can often be the perfect quote due to its brevity and pinpoint accuracy. When we think of quotes we do not usually think about one word quotes but one word quotes can often be the perfect quote due to its brevity and pinpoint accuracy. The single word should make you think and immediately bring an image to mind. This is the reason we created this one word quotes generator. You might be looking for the perfect 1 word to quote and this generator may be the right tool to help you accomplish that. Even better, its simple to use and has hundreds of one word quotes in its database for you to discover",
        "When you first come to this page you will have a random one word quote displayed. If that happens to be the perfect  word quote you were searching for everything is golden. If not, you have the option of clicking to the next one word phrase. The great thing is that you can continue to do this as many times as you need until you find the exact quote you were looking for. Some people flip through them quickly until they find one that just hits them right while others spend some time considering each one word quote before deciding whether When we think of quotes we do not usually think about one word quotes but one word quotes can often be the perfect quote due to its brevity and pinpoint accuracy. The single word should make you think and immediately bring an image to mind. This is the reason we created this one word quotes generator.",
        "If you found this generator to be useful, we'd love to hear from you on how you used it. Hearing from users helps us to make improvements to the tool when we make updates. We also be quite interested in hearing any suggestions you might have on ways we can make the one word quotes generator better. The truth is that almost any single word could be a quote given the correct context. Many of the one word quotes found in our generator database are sayings that you might hear when someone is describing someone they admire or who is doing well. A lot of people who use this tool do so in order to find the perfect one word quotes they want to post to their social media accounts for the day. Its a wonderful way to find good 1 word phrases to post that expresses your feelings and frame of mind for the day.",
        "A lot of people who use this tool do so in order to find the perfect one word quotes they want to post to their social media accounts for the day. Its a wonderful way to find good 1 word phrases to post that expresses your feelings and frame of mind for the day.We hope that you've found this one word quotes tool useful. We are always looking for ways to better our tools and to make them more useful for those who find and use them. If you found this generator to be useful, we'd love to hear from you on how you used it. Hearing from users helps us to make improvements to the tool when we make updates. We also be quite interested in hearing any suggestions you might have on ways we can make the one word quotes generator better.Hearing from users helps us to make improvements to the tool when we make updates. We also be quite interested in hearing any suggestions you might have on ways we can make the one word quotes generator better. The truth is that almost any single word could be a quote given the correct context."
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