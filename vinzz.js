(function () {

  /* ===== FONT ===== */
  const font = document.createElement("link");
  font.rel = "stylesheet";
  font.href = "https://fonts.googleapis.com/css?family=Kelly+Slab&display=swap";
  document.head.appendChild(font);

  /* ===== CSS ===== */
  const style = document.createElement("style");
  style.innerHTML = `
  *{margin:0;padding:0;box-sizing:border-box}
  body{
    background:#f5f5f5;
    font-family:"Kelly Slab",sans-serif;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#111;
  }
  .wrapper{text-align:center;max-width:85%}
  .logo{margin-bottom:18px}
  h1{font-size:26px;margin-bottom:6px}
  .subtitle{font-size:15px;color:#444}
  #typing{
    margin-top:22px;
    font-size:17px;
    line-height:1.7;
    word-wrap:break-word;
  }
  #red{color:#d60000}
  .cursor{
    display:inline-block;
    width:2px;
    height:1em;
    background:#d60000;
    margin-left:2px;
    animation:blink .8s infinite;
    vertical-align:bottom;
  }
  @keyframes blink{50%{opacity:0}}
  .greetz{
    position:fixed;
    bottom:18px;
    width:100%;
    text-align:center;
    font-size:12px;
    letter-spacing:1.5px;
    color:#000;
    opacity:.45;
  }
  @media(max-width:600px){
    h1{font-size:22px}
    #typing{font-size:15px}
  }
  `;
  document.head.appendChild(style);

  /* ===== HTML ===== */
  document.body.innerHTML = `
  <div class="wrapper">
    <img class="logo" src="https://k.top4top.io/p_318991s4r0.png" height="160">
    <h1>&lt;/&gt; Hacked By <span style="color:#d60000">Vinzz4You</span></h1>
    <div class="subtitle">WhoOps, fix your website!</div>
    <div id="typing">
      <span id="normal"></span><span id="red"></span><span class="cursor"></span>
    </div>
  </div>
  <div class="greetz">
    greetz: Mr Kenzz | NizamXploit | MrZoro | Yos | D.I.T
  </div>
  `;

  /* ===== TYPING EFFECT ===== */
  const textNormal =
    "Hi admin, sorry your security system is very weak, please fix it now. ";
  const textRed =
    "Hacking is not a crime, but hacking is an art";

  const normalEl = document.getElementById("normal");
  const redEl = document.getElementById("red");

  let i = 0, j = 0, phase = 0;
  const speed = 45;

  function typeEffect(){
    if(phase === 0){
      if(i < textNormal.length){
        normalEl.textContent += textNormal.charAt(i++);
        setTimeout(typeEffect, speed);
      } else {
        phase = 1;
        setTimeout(typeEffect, speed);
      }
    } else {
      if(j < textRed.length){
        redEl.textContent += textRed.charAt(j++);
        setTimeout(typeEffect, speed);
      }
    }
  }

  typeEffect();

})();
