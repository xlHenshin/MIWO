import { usuarios, parches } from "../utils/app.js";


const contenido = document.getElementById("contenido");

const usuarioActual = window.localStorage.getItem('numeroCel');
const parche = JSON.parse(parches.getItem(usuarioActual));

if (parche !== undefined || parche !== null || parche !== '') {
    contenido.innerHTML = "";
    contenido.innerHTML = `<div class="group-1925">
    <div class="parches-pblicos niveaugrotesk-bold-smashed-pumpkin-15px">Parches activos</div>
  </div>
  <div class="overlap-group8">
    <img
      class="rectangle-9"
      src="https://anima-uploads.s3.amazonaws.com/projects/625c46af91fd1ec47148b487/releases/627a8a933a5ca462a5281b28/img/rectangle-9-4@2x.png"
    />
    <img
      class="image-61"
      src="https://anima-uploads.s3.amazonaws.com/projects/625c46af91fd1ec47148b487/releases/627a2fdff82b43480fa45248/img/image-61-1@2x.png"
    />
    <div class="group-1724">
      <div class="parche-multiverso">
        <span class="span0">Parche </span><span class="span1">“Multiverso”</span>
      </div>
      <div class="flex-row">
        <div class="group-1573">
          <div class="group-container">
            <div class="group-1570">
              <div id="overlap-group">
                <div class="ellipse-173"></div>
                <img
                  class="mask-group"
                  src="https://anima-uploads.s3.amazonaws.com/projects/625c46af91fd1ec47148b487/releases/627a8a933a5ca462a5281b28/img/mask-group-21@2x.png"
                />
              </div>
            </div>
            <div class="group-1571">
              <div id="overlap-group">
                <div class="ellipse-173"></div>
                <img
                  class="mask-group"
                  src="https://anima-uploads.s3.amazonaws.com/projects/625c46af91fd1ec47148b487/releases/627a8a933a5ca462a5281b28/img/mask-group-22@2x.png"
                />
              </div>
            </div>
            <div class="group-1572">
              <div id="overlap-group">
                <div class="ellipse-173"></div>
                <img
                  class="mask-group"
                  src="https://anima-uploads.s3.amazonaws.com/projects/625c46af91fd1ec47148b487/releases/627a8a933a5ca462a5281b28/img/mask-group-23@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="address valign-text-middle niveaugrotesk-regular-normal-shady-lady-10-6px">
          5 Participantes
        </div>
      </div>
      <p class="parche-para-ir-de-va valign-text-middle">
        Parche para ir de vacaciones a Cancún con los panas!!
      </p>
      <div class="overlap-group-container">
        <div class="overlap-group-1">
          <div class="price valign-text-middle niveaugrotesk-medium-smashed-pumpkin-15-9px">$500.000</div>
          <div class="meta valign-text-middle niveaugrotesk-regular-normal-purple-heart-11-6px">Meta:</div>
          <div class="rectangle border-0-3px-purple-heart"></div>
          <div class="rectangle-60"></div>
          <img
            class="mask-group-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/625c46af91fd1ec47148b487/releases/627a8a933a5ca462a5281b28/img/mask-group-19@2x.png"
          />
        </div>
        <div class="overlap-group-2">
          <div class="address-2 valign-text-middle niveaugrotesk-medium-smashed-pumpkin-15-9px">5 Meses</div>
          <div class="faltan valign-text-middle niveaugrotesk-regular-normal-purple-heart-11-6px">Faltan:</div>
          <div class="rectangle-604"></div>
          <div class="rectangle-60"></div>
          <img
            class="icon-clock"
            src="https://anima-uploads.s3.amazonaws.com/projects/625c46af91fd1ec47148b487/releases/627a8a933a5ca462a5281b28/img/fi-clock-3@2x.png"
          />
        </div>
      </div>
      <div class="overlap-group-container">
        <div class="overlap-group-1">
          <div class="price-1 valign-text-middle niveaugrotesk-medium-smashed-pumpkin-15-9px">$245.500</div>
          <div class="recaudado valign-text-middle niveaugrotesk-regular-normal-purple-heart-11-6px">
            Recaudado:
          </div>
          <div class="rectangle border-0-3px-purple-heart"></div>
          <div class="rectangle-60"></div>
          <img
            class="mask-group-4"
            src="https://anima-uploads.s3.amazonaws.com/projects/625c46af91fd1ec47148b487/releases/627a8a933a5ca462a5281b28/img/mask-group-18@2x.png"
          />
        </div>
        <div class="overlap-group-2">
          <div class="price-1 valign-text-middle niveaugrotesk-medium-smashed-pumpkin-15-9px">$50.500</div>
          <div class="cuota valign-text-middle niveaugrotesk-regular-normal-purple-heart-12-7px">
            Cuota mensual:
          </div>
          <div class="rectangle border-0-3px-purple-heart"></div>
          <div class="rectangle-60"></div>
          <img
            class="mask-group-5"
            src="https://anima-uploads.s3.amazonaws.com/projects/625c46af91fd1ec47148b487/releases/627a8a933a5ca462a5281b28/img/mask-group-20@2x.png"
          />
        </div>
      </div>
    </div>
  </div>`
}
