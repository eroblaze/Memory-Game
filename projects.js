onload = () => {
    alert("Click on the cards to reveal the images👍")
    generate();
    
    // To enable restart function 
    function generate() {
    
    // New Code (making the images random)
    
    let tImages = document.querySelectorAll("div[class^='img-'] img"); 
    let tdiv = document.querySelectorAll("div[class^='img-'] div"); 

    
    let allImages = [];
    
    for(let i=0; i<tImages.length; i++){
        allImages.push(tImages[i]);
    }
    
    let tdivs = [];
    
    for(let i=0; i<tdiv.length; i++){
        tdivs.push(tdiv[i]);
    }
    
    
    // Array containing the images
    const randomImages = [
    {
        "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw1YkJxiVxoC9VTYeecbl6yVxIryho7IK2NQ&usqp=CAU",
        "alt": "python",
        "data-value": "python"
    },
    {
        "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-KU0y_m2mue-eD4Eut8cZHjVCFLuVHMm2w&usqp=CAU",
        "alt": "javascript",
        "data-value": "javascript"
    },
    {
        "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv-vlpDdDYylEJmYM69odKtRgs5r0UW5b_0w&usqp=CAU",
        "alt": "java",
        "data-value": "java"
    }
    ];
    
    
    let one = randomImages[0];
    let two = randomImages[1];
    let three = randomImages[2];
    
    // Update the images list
    function update() {
        allImages = allImages.filter(one => {
            if(one) {
                return one;
            }
        });
    }
    
    // Update the div list
    function upDivs() {
        tdivs = tdivs.filter(one => {
            if(one) {
                return one;
            }
        });
    }
    
    // Power function 
    function engine(num, data) {
        allImages[num].setAttribute("src", data.link);
        allImages[num].setAttribute("alt", data.alt);
        tdivs[num].setAttribute("data-value", data["data-value"]);
        
        delete allImages[num];
        delete tdivs[num];
        upDivs();
        update();
    }
    
    
    randomm();
    
    // Generate and link the random images
    function randomm() {  
          
        let r1 = Math.ceil(Math.random() * allImages.length-1);  
        engine(r1, one);
        
        
        let r2 = Math.ceil(Math.random() * allImages.length-1);      
        engine(r2, one);
        
        
        let r3 = Math.ceil(Math.random() * allImages.length-1);      
        engine(r3, two);
        
        
        let r4 = Math.ceil(Math.random() * allImages.length-1);          
        engine(r4, two);
        
        
        let r5 = Math.ceil(Math.random() * allImages.length-1);   
        engine(r5, three);
        
        
        let r6 = Math.ceil(Math.random() * allImages.length-1);    
        engine(r6, three);
    // End of function 
    }
 }   
    
    
    // Former Code    
      
    const allAfter = document.querySelectorAll(".after");
const score = document.getElementById("score");
const failedAttempts = document.getElementById("failed");
const yay = document.querySelector(".grid");
const restart = document.querySelector("a");

let elements = [];

function show(e, present) {
  if (elements.length !== 2) {
    elements.push(present);
  }

  present.style.zIndex = -1;

  if (elements.length === 2) {
    if (
      elements[0].getAttribute("data-value") ===
      elements[1].getAttribute("data-value")
    ) {
      elements.forEach((one) => (one.style.zIndex = -1));
      score.textContent = Number(score.textContent) + 1;
      if (Number(score.textContent) === 3) {
        yay.classList.add("done");
      }
      elements = [];
    } else {
      setTimeout(() => {
        elements.forEach((one) => (one.style.zIndex = 0));
        failedAttempts.textContent = Number(failedAttempts.textContent) + 1;
        elements = [];
      }, 500);
    }
  }


}

allAfter.forEach((present) => {
  present.addEventListener("click", (e) => {
    show(e, present);
  });
});

// To restart game

const restartFunc = e => {
    e.preventDefault();
    yay.classList.remove("done");
    score.textContent = 0;
    failedAttempts.textContent = 0;
    
    for(let i = 0; i<allAfter.length; i++) {
        allAfter[i].style.zIndex = 0;
    }
    generate();
}; 

restart.addEventListener("click", restartFunc);
    
};
