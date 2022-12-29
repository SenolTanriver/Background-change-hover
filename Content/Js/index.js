let shireBack = document.getElementById("shire");
let gondorBack = document.getElementById("gondor");
let rohanBack = document.getElementById("rohan");
let mordorBack = document.getElementById("mordor");
let isengardBack = document.getElementById("isengard");
let rivendellBack = document.getElementById("rivendell");

shireBack.addEventListener('mouseover', () => {
  let conteiner = document.getElementById("conteiner");
  conteiner.setAttribute('style', 'transition: all 0.5s ease; background-image: url(content/images/Shire.jpg)');
});

    shireBack.addEventListener('mouseout', () => {
  let conteiner = document.getElementById("conteiner");
  conteiner.setAttribute('style', 'transition: all 0.5s ease; background-image: url(content/images/maps.jpg)');
});

gondorBack.addEventListener('mouseover', () => {
    let conteiner = document.getElementById("conteiner");
    conteiner.setAttribute('style', 'transition: all 0.5s ease; background-image: url(content/images/Gondor.jpg)');
  });

    gondorBack.addEventListener('mouseout', () => {
    let conteiner = document.getElementById("conteiner");
    conteiner.setAttribute('style', 'transition: all 0.5s ease; background-image: url(content/images/maps.jpg)');
  });  

rohanBack.addEventListener('mouseover', () => {
    let conteiner = document.getElementById("conteiner");
    conteiner.setAttribute('style', 'transition: all 0.5s ease; background-image: url(content/images/Rohan.jpg)');
  });

    rohanBack.addEventListener('mouseout', () => {
    let conteiner = document.getElementById("conteiner");
    conteiner.setAttribute('style', 'transition: all 0.5s ease; background-image: url(content/images/maps.jpg)');
  });  

mordorBack.addEventListener('mouseover', () => {
    let conteiner = document.getElementById("conteiner");
    conteiner.setAttribute('style', 'transition: all 0.5s ease; background-image: url(content/images/Mordor.jpg)');
  });

    mordorBack.addEventListener('mouseout', () => {
    let conteiner = document.getElementById("conteiner");
    conteiner.setAttribute('style', 'transition: all 0.5s ease; background-image: url(content/images/maps.jpg)');
  });  

isengardBack.addEventListener('mouseover', () => {
    let conteiner = document.getElementById("conteiner");
    conteiner.setAttribute('style', 'transition: all 0.5s ease; background-image: url(content/images/Isengard.jpg)');
  });

    isengardBack.addEventListener('mouseout', () => {
    let conteiner = document.getElementById("conteiner");
    conteiner.setAttribute('style', 'transition: all 0.5s ease; background-image: url(content/images/maps.jpg)');
  });  

rivendellBack.addEventListener('mouseover', () => {
    let conteiner = document.getElementById("conteiner");
    conteiner.setAttribute('style', 'transition: all 0.5s ease; background-image: url(content/images/Rivendell.png)');
  });

    rivendellBack.addEventListener('mouseout', () => {
    let conteiner = document.getElementById("conteiner");
    conteiner.setAttribute('style', 'transition: all 0.5s ease; background-image: url(content/images/maps.jpg)');
  });  