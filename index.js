const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

window.onload = () => {
  recognition.start();
  recognition.onresult = (event)=>{
    const command = event.results[0][0].transcript;
    console.log(command);

    if(command === "scroll up"){
        window.scrollBy(0,-400);
    }
    
    else if(command === "scroll down"){
        window.scrollBy(0,+400);
    }
    
    else if(command === "higher"){
        window.scrollBy(0,-800);
    }
    
    else if(command === "lower"){
        window.scrollBy(0,+800);
    }

    else if(command === "start again"){
        window.scrollTo(0,0);
    }
  }
};

recognition.onend = () =>{
    recognition.start();
}