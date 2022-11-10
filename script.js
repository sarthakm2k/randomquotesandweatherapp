   //quotable api
   
   let quote = document.getElementById("quote");
    let author = document.getElementById("author")
    let btn = document.getElementById("btn");

    const soundBtn = document.querySelector(".sound"),
    copyBtn = document.querySelector(".copy"),
    twitterBtn = document.querySelector(".twitter");

    synth = speechSynthesis;


   

    



    const url = "https://api.quotable.io/random";

    let getQuote = () => {
        fetch(url)
        .then(data => data.json())
        .then(item=> {
            quote.innerText=item.content;
            author.innerText=item.author;

        } );
    };

    soundBtn.addEventListener("click", ()=>{
        if(!btn.classList.contains("loading")){
            let utterance = new SpeechSynthesisUtterance(`${quote.innerText} by ${author.innerText}`);
            synth.speak(utterance);
            setInterval(()=>{
                !synth.speaking ? soundBtn.classList.remove("active") : soundBtn.classList.add("active");
            }, 10);
        }
    });
    

    copyBtn.addEventListener("click", ()=>{
        navigator.clipboard.writeText(quote.innerText);
    });

    twitterBtn.addEventListener("click", ()=>{
        let tweetUrl = `https://twitter.com/intent/tweet?url=${quote.innerText}`;
        window.open(tweetUrl, "_blank");
    });



    window.addEventListener("load",getQuote);

    btn.addEventListener("click",getQuote);



    //weather.html
