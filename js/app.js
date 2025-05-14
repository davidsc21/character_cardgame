//diferentes paginas a usar (spa)//
const pages = {
  home: `
    <audio src="media/audio/Awaken.mp3" autoplay loop></audio>
    <div class="containerhome">
          <div class="homecontent">
            <p>hola</p>
            <div class="btnextra">
              <a href="#" onclick="navigate('arena')"><h2>COMIENZA TU LEYENDA</h2></a>
            </div>
          </div>
    </div>
  `,
  jonia: `
    <audio src="media/audio/Here, Tomorrow.mp3" autoplay loop></audio>
    <div class="containerjonia">
      <div class="joniacontent">
      <img src=../media/img/joniareal.png width:800px>
      </div>
    </div>
  `,
  noxus: `
    <audio src="media/audio/Phoenix.mp3" autoplay loop></audio>
    <div class="containernoxus">
      <div class="noxuscontent">
      <img src=../media/img/noxusreal.png width:800px>
      </div>
    </div>
  `,
  arena: `
    <audio src="media/audio/RISE.mp3" autoplay loop></audio>
    <div class="containerarena">
      <div class="arenacontent">

      </div>
    </div>
  `
};
//funciones//
function navigate(page) {
  const content = document.getElementById('container');
  content.innerHTML = pages[page] || '<h1>Página no encontrada</h1>';
}

