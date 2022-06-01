import React, { useState, useRef } from 'react';

function App() {
  const [text, setText] = useState('');
  const textRef = useRef();

  SpeechSynthesisUtterance.lang = "en-US"
  var msg = new SpeechSynthesisUtterance(text);
  msg.lang = 'pt-BR'

  const clearValue = () => {
    textRef.current.value = '';
    setText('');
  }

  return (
    <div className="app">
      <main>
        <div className="header">
          <h3>A moça do Google Maps lê pra vc!</h3>
        </div>

        <div className="textDiv">
          <form>
            <div className="buttonDiv">
              <button
                className="readButton"
                type="button"
                onClick={() => window.speechSynthesis.speak(msg)}
              >Ouvir</button>
              <button className="clearText" type="button" onClick={clearValue}>Apagar</button>
            </div>
            <textarea
              className="textArea"
              name="textArea"
              id="textArea"
              cols="100"
              rows="50"
              ref={textRef}
              onChange={e => setText(e.target.value)}
              onSubmit={(e) => e.value = ''}
              placeholder="Cola ou escreva o seu texto aqui..."
            />
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
