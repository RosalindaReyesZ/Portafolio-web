let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #fb4993;">Apasionada por la ciencia, la tecnología y el arte.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
