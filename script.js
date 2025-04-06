body {
  font-family: 'Georgia', serif;
  background-color: #fff0f5;
  color: #5e2c58;
  margin: 0;
  padding: 0;
  text-align: center;
}

header {
  padding: 50px 20px;
  background-color: #ffe6f0;
}

h1, h2 {
  font-family: 'Cursive', 'Georgia', serif;
}

.quote {
  font-style: italic;
  font-size: 1.2em;
}

.photo-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

.photo-gallery img {
  width: 250px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
  transition: transform 0.3s;
}

.photo-gallery img:hover {
  transform: scale(1.05);
}

.textinhos blockquote {
  margin: 30px auto;
  max-width: 600px;
  font-style: italic;
  background-color: #fff;
  padding: 20px;
  border-left: 5px solid #e91e63;
  border-radius: 10px;
}

.contador {
  margin: 40px 0;
  background: #ffccf9;
  padding: 30px 10px;
  position: relative;
}

.character-left, .character-right {
  width: 100px;
  position: absolute;
  top: -30px;
}

.character-left {
  left: 10px;
}

.character-right {
  right: 10px;
}

#counter {
  font-size: 1.8em;
  margin-top: 40px;
}

footer {
  padding: 20px;
  background: #fce4ec;
  color: #6a1b9a;
}
const mensagens = [
  "Te amo muito!",
  "Você é tudo pra mim!",
  "Cada dia com você é um presente.",
  "Sou muito grato por te ter ao meu lado.",
  "Você é meu amor eterno!"
];

let index = 0;

function trocarMensagem() {
  index = (index + 1) % mensagens.length;
  document.getElementById("mensagem").textContent = mensagens[index];
}