var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = "en-GB";

function speechToText(){
  var interim_transcript = '';
  var final_transcript = '';
  
  recognition.onresult = function(event) { 
  for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }
    console.log(final_transcript)
    /*final_span.innerHTML = (final_transcript);
    interim_span.innerHTML = (interim_transcript);*/
  };
  console.log(interim_transcript)
  recognition.start();
}