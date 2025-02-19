
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
        "Two common terms used to describe a salesperson are Farmer and Hunter. The reality is that most professional salespeople have a little of both. A hunter is often associated with aggressive personalities who use aggressive sales technique. In terms of sales methodology, a hunter refers to a person whose focus is on bringing in and closing deals. This process is called sales capturing. An example is a commodity sale such as a long distance salesperson, shoe salesperson and to a degree a car salesperson. Their job is to find and convert buyers. A sales farmer is someone who creates sales demand through activities that directly influence and alter the buying process Juxtaposition of zany quirks, quick-witted zealots, and quixotic quests form the zenith of Perplexity. Vexingly, the jazz quartet quickly zigzags through a maze of knotty rhythms, while the xylophone echoes with exquisite precision. The fox jumps over 7 lazy dogs, while the quirky wizard zaps the jinxed hexes with his magic wand. Bewilderingly, the quick brown fox jumps over the 7 lazy dogs, showing remarkable agility.",
        "Zephyrs of jazz waft through the buzzing bazaar, where zealous vendors zealously tout their wares. The quicksilver fox jumps over the 8 lazy dogs, leaving a trail of quizzical gazes in its wake. Beware the jinxed hexes that vex even the most seasoned wizard, as they lurk in the shadows, waiting to ensnare the unwary. The sizzling heat of the desert sun beats down relentlessly, testing the endurance of even the most intrepid travelers.Some people combine touch typing and hunt and peck by using a buffering method. In the buffer method, the typist looks at the source copy, mentally stores one or several sentences, then looks at the keyboard and types out the buffer of sentences. This eliminates frequent up and down motions with the head and is used in typing competitions in which the typist is not well versed in touch typing. Not normally used in day-to-day contact with keyboards, this buffer method is used only when time is of the essence.",
        "Amidst the bustling cityscape, where skyscrapers pierce the heavens, a lone figure stands atop the highest tower. With a steady hand, they type out a message of hope and unity, reaching out to the four corners of the world. The clock strikes 12, signaling the start of a new day filled with endless possibilities. 12345 stars twinkle in the midnight sky, each one a reminder of the vastness of the universe and the infinitesimal nature of our existence.An ever-growing number of complex and rigid rules plus hard-to-cope-with regulations are now being legislated from state to state. Key federal regulations were formulated by the FDA, FTC, and the CPSC. Each of these federal agencies serves a specific mission. One example: Laws sponsored by the Office of the Fair Debt Collection Practices prevent an agency from purposefully harassing clients in serious debt. The Fair Packaging and Labeling Act makes certain that protection from misleading packaging of goods is guaranteed to each buyer of goods carried in small shops as well as in large supermarkets.",
        "Amidst the verdant hills, a river meanders lazily through the countryside, reflecting the azure sky above. The sun sets in a blaze of crimson and gold, casting long shadows across the landscape. Along the winding path, a traveler walks, counting the miles with each step. Birds chirp in the trees, adding a melodic soundtrack to the scene. As night falls, the stars emerge one by one, dotting the heavens with their celestial glow, illuminating the darkness with their silent beautyWhen we talk about motivating others, the justification is the end result (either we want to avoid the pain or go towards pleasure) or what we want to get the person to do. How we achieve the end result, are our alternatives. As a manager, we need to understand the other person's justification and then come up with alternatives. We may then choose the right alternative. However, in general, we choose the first or the emotionally satisfying one."
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