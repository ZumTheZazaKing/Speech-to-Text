//Grabbing the SpeechRecognition Object
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

//Creating a variable to store the SpeechRecognition object
const recognition = new SpeechRecognition();

//this will make the results print before waiting for the user to end speech
recognition.interimResults = true;


//Creating a p element to store the words spoken
let p = document.createElement('p');
    
const words = document.querySelector('#words');

words.appendChild(p);


//function that activates when the user speaks and grabs the transcript of the results
recognition.addEventListener('result', e => {

    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    p.textContent = transcript;

    if(e.results[0].isFinal){

        p = document.createElement('p');

        words.appendChild(p);

    }

    console.log(transcript);

})

//when the user stops speaking, the recognition will start again
recognition.addEventListener('end', recognition.start);

//method to automatically start speech recognition
recognition.start();