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
            <div class="botones">
                    <div class="btnextra">
                        <a href="#" onclick="navigate('arena')"><h2>COMIENZA TU LEYENDA</h2></a>
                    </div>
                    <div id="open-modal" class="btntroll">
                    <a href="#" onclick="mostrarmodal(0)">COMO MEJORAR EN EL LOL</a>
                    </div>
                </div>
                <div id="modal" class="modal">
                    <span class="close-modal" onclick="cerrarmodal()">&times</span>
                    <div id="contenido-modal" class="contenido-modal">
                        <img id="modal-img" src="" width="300rem"> 
                    </div>  
                </div>
          </div>
    </div>
  `,
  //contenido de jonia//
  jonia: `
    <audio src="media/audio/Here, Tomorrow.mp3" autoplay loop></audio>
    <div class="containerjonia">
      <div class="joniacontent">
      <img src=../media/img/extra/joniareal.png width:800px>
      <h2>Jonia es una región mística y espiritual. Se compone de un archipiélago conocido como las Tierras Originarias, donde sus habitantes buscan el equilibrio entre lo material y lo espiritual.</h2>
      <hr>
      <div class="campeones">
        <cartas-jonia
          nombre="Kayn"
          descripcion="Kayn, un prodigio de la Orden de las Sombras entrenado por Zed, porta la guadaña viviente Rhaast. Lucha por controlar el arma oscura que amenaza con corromperlo, mientras él intenta dominar su poder para convertirse en el arma definitiva de la Sombra."
          imagen="./media/img/icons/kaynicon.webp">
        </cartas-jonia>
        <cartas-jonia
          nombre="Akali"
          descripcion="Akali, también conocida como la Asesina Silenciosa, abandonó la Orden Kinkou para actuar por cuenta propia. Usa su agilidad y precisión para proteger a Jonia eliminando amenazas con velocidad letal y sin hacer ruido."
          imagen="./media/img/icons/akaliicon.jpg">
        </cartas-jonia>
        <cartas-jonia
          nombre="Shen"
          descripcion="Shen, el Ojo del Crepúsculo, es el líder de la Orden Kinkou. Actúa como equilibrio entre el mundo espiritual y el físico, guiado por la lógica y el deber. Defiende la armonía sin dejarse llevar por emociones."
          imagen="./media/img/icons/shenicon.png">
        </cartas-jonia>
        <cartas-jonia
          nombre="Irelia"
          descripcion="Irelia, la Bailarina de las Cuchillas, se convirtió en símbolo de resistencia en Jonia durante la invasión noxiana. Su elegante control de las hojas flota con gracia, pero es letal en batalla."
          imagen="./media/img/icons/ireliaicon.jpg">
        </cartas-jonia>
        <cartas-jonia
          nombre="Yone"
          descripcion="Yone fue un guerrero honorable y hermano de Yasuo, asesinado por este último. Resucitó cazando demonios azakana, dividido entre su humanidad y la entidad espiritual que lo trajo de vuelta."
          imagen="./media/img/icons/yoneicon.jpg">
        </cartas-jonia>
      </div>
    </body>
    </html>
      </div>
    </div>
  `,
  noxus: `
    <audio src="media/audio/Phoenix.mp3" autoplay loop></audio>
    <div class="containernoxus">
      <div class="noxuscontent">
      <img src=../media/img/extra/noxusreal.png width:800px>
      <div class="campeones">
      <h2>Noxus es un poderoso imperio, conocido por su expansión agresiva y su cultura de fuerza y meritocracia. Aunque desde fuera parece una nación brutal y militarizada, en su interior es sorprendentemente inclusiva, valorando el talento y la habilidad por encima del origen o estatus social.</h2>
        <cartas-noxus
          nombre="Mordekaiser"
          descripcion="Mordekaiser, el Renacido de Hierro, es una fuerza ancestral que desafía la muerte con cada paso. Antiguo señor de la guerra, renació envuelto en acero maldito y magia oscura, decidido a conquistar no solo el mundo físico, sino también el espiritual. Cada enemigo que cae bajo su maza no muere: es condenado a servirle eternamente en su reino de sombras. Su ambición no tiene fin, y donde su sombra se extiende, la esperanza se desvanece. Mordekaiser no solo destruye cuerpos... aplasta voluntades."
          imagen="./media/img/icons/mordeicon.jpg">
        </cartas-noxus>
        <cartas-noxus
          nombre="Leblanc"
          descripcion="LeBlanc es una hechicera misteriosa y maestra de las ilusiones. Como líder de la Rosa Negra, una organización secreta en Noxus, manipula eventos y personas desde las sombras. Su magia le permite reflejarse a sí misma, aparecer en múltiples lugares a la vez y sembrar el caos con engaños. Su verdadera identidad y objetivos siguen siendo un enigma."
          imagen="./media/img/icons/leblancicon.webp">
        </cartas-noxus>
        <cartas-noxus
          nombre="Darius"
          descripcion="Darius es un guerrero formidable y el símbolo del poder de Noxus. Conocido como 'La Mano de Noxus', es un comandante implacable que lidera con fuerza y disciplina. Criado en la ciudad portuaria de Basilich junto a su hermano Draven, ascendió en el ejército noxiano gracias a su agresividad y determinación. Su hacha, la Guillotina Noxiana, es su arma característica, capaz de ejecutar enemigos con precisión letal"
          imagen="./media/img/icons/dariusicon.png">
        </cartas-noxus>
        <cartas-noxus
          nombre="Samira"
          descripcion="Samira, conocida como 'La Rosa del Desierto', enfrenta la muerte con una confianza inquebrantable. Originaria de Shurima, su hogar fue destruido cuando era niña, lo que la llevó a encontrar su verdadera vocación en Noxus. Se ganó la reputación de ser una temeraria con estilo, capaz de completar las misiones más peligrosas con elegancia y precisión. "
          imagen="./media/img/icons/samiraicon.jpg">
        </cartas-noxus>
        <cartas-noxus
          nombre="Katarina"
          descripcion="Katarina, es una asesina noxiana de élite. Hija del legendario general Du Couteau, ha perfeccionado el arte del asesinato con precisión mortal. Su velocidad y letalidad la convierten en una amenaza constante en el campo de batalla, capaz de eliminar enemigos en un torbellino de dagas. Su ambición la lleva a enfrentarse a objetivos fuertemente protegidos, sin importar el riesgo para sus aliados."
          imagen="./media/img/icons/katarinaicon.webp">
        </cartas-noxus>
      </div>
      </div>
    </div>
  `,
  arena: `
    <audio src="media/audio/RISE.mp3" autoplay loop></audio>
    <div class="containerarena">
      <div class="arenacontent">
        <h1>LA ARENA ESTARÁ DISPONIBLE PROXIMAMENTE...</h1>
      </div>
    </div>
  `
};
//funciones//
function navigate(page) {
  const content = document.getElementById('container');
  content.innerHTML = pages[page] || '<h1>Página no encontrada</h1>';
}

class Cartasjonia extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const nombre = this.getAttribute('nombre');
    const descripcion = this.getAttribute('descripcion');
    const imagen = this.getAttribute('imagen');

    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        .card-container {
          width: 300px;
          height: 400px;
          perspective: 1000px;
          margin: 20px;
        }

        .card {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 2s;
          cursor: pointer;
        }

        .card:hover{
          transform: translateY(-5px);
          transition: all 0.3s ease;
          box-shadow: 30px 30px 30px rgba(0, 0, 0, 0.2);
          cursor: pointer;
        }

        .card.girada {
          transform: rotateY(180deg);
        }

        .cara {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .frontal {
          background: #1c1e27;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
        }

        .frontal:hover{
          background: linear-gradient(to bottom,rgb(27, 206, 176), #1c1e27);
        }

        .frontal img {
          width: 100%;
          height: 70%;
          object-fit: cover;
        }

        .frontal h3 {
          margin: 15%;
          font-size: 1.2rem;
          color: #ffff;
        }

        .trasera {
          background-color: #1c1e27;
          transform: rotateY(180deg);
          padding: 20px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          color: #fff;
        }
        .trasera p {
          font-size: 0.9rem;
          color: #fff;
          margin: 5px 0;
        }
      </style>

      <div class="card-container">
        <div class="card">
          <div class="cara frontal">
            <img src="${imagen}" alt="${nombre}">
            <h3>${nombre}</h3>
          </div>
          <div class="cara trasera">
            <p><strong>${nombre}</strong></p>
            <p>${descripcion}</p>
          </div>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    const carta = this.shadowRoot.querySelector('.card');
    carta.addEventListener('click', () => {
      carta.classList.toggle('girada');
    });
  }
}

customElements.define('cartas-jonia', Cartasjonia);

//cartas de noxus//
class Cartasnoxus extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const nombre = this.getAttribute('nombre');
    const descripcion = this.getAttribute('descripcion');
    const imagen = this.getAttribute('imagen');

    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        .card-container {
          width: 300px;
          height: 400px;
          perspective: 1000px;
          margin: 20px;
        }

        .card {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 2s;
          cursor: pointer;
        }

        .card:hover{
          transform: translateY(-5px);
          transition: all 0.3s ease;
          box-shadow: 30px 30px 30px rgba(0, 0, 0, 0.2);
          cursor: pointer;
        }

        .card.girada {
          transform: rotateY(180deg);
        }

        .cara {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .frontal {
          background: #1c1e27;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
        }

        .frontal:hover{
          background: linear-gradient(to bottom,rgb(206, 27, 27), #1c1e27);
        }

        .frontal img {
          width: 100%;
          height: 70%;
          object-fit: cover;
        }

        .frontal h3 {
          margin: 15%;
          font-size: 1.2rem;
          color: #ffff;
        }

        .trasera {
          background-color: #1c1e27;
          transform: rotateY(180deg);
          padding: 20px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          color: #fff;
        }
        .trasera p {
          font-size: 0.9rem;
          color: #fff;
          margin: 5px 0;
        }
      </style>

      <div class="card-container">
        <div class="card">
          <div class="cara frontal">
            <img src="${imagen}" alt="${nombre}">
            <h3>${nombre}</h3>
          </div>
          <div class="cara trasera">
            <p><strong>${nombre}</strong></p>
            <p>${descripcion}</p>
          </div>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    const carta = this.shadowRoot.querySelector('.card');
    carta.addEventListener('click', () => {
      carta.classList.toggle('girada');
    });
  }
}

customElements.define('cartas-noxus', Cartasnoxus);

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

