//diferentes paginas a usar (spa)//
const pages = {
  home: `
    <audio src="media/audio/Awaken.mp3" autoplay loop></audio>
    <div class="containerhome">
          <div class="homecontent">
            <h1>BIENVENIDO INVOCADOR</h1>
                <h2>En un mundo donde la magia y la guerra chocan sin tregua, solo los más valientes logran escribir su leyenda. Desde las sombras de Noxus hasta la armonía ancestral de Jonia, los campeones aguardan tu llamado.
                    Cada carta es una decisión. Cada movimiento, un eco en el campo de batalla.
                    ¿Tendrás el valor de enfrentarte al destino y forjar tu propia historia? 
                    El juego ha comenzado, invocador.</h2>
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


//controlar modal/

const elements = [
  {
    imagen: "../media/img/borralol.jpg"
  },
]
function mostrarmodal(index){
  document.getElementById("modal").style.display='block';
  const troll = elements[index];

  document.getElementById("modal-img").src=troll.imagen;
}

function cerrarmodal(){
  document.getElementById("modal").style.display='none'
}
