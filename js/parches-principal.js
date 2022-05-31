import { usuarios, parches } from "../utils/app.js";


const contenido = document.getElementById("contenido");
const eliminado = document.getElementById("eliminar")

const usuarioActual = window.localStorage.getItem('numeroCel');
const parche = JSON.parse(parches.getItem(usuarioActual+'p'));

console.log(parche)

if (parche !== undefined && parche !== null && parche !== '') {

    eliminado.innerHTML = "";
    contenido.innerHTML = `<a href="./salirse.html" class = 'text'>
    <div class="group-1925">
    <div class="parches-pblicos niveaugrotesk-bold-smashed-pumpkin-15px">Parches activos</div>
  </div>
  <div class="overlap-group8">
    <img
      class="rectangle-9" id = 'rectangle-9' 
      src="https://anima-uploads.s3.amazonaws.com/projects/625c46af91fd1ec47148b487/releases/627a8a933a5ca462a5281b28/img/rectangle-9-4@2x.png"
    />
    <img
      class="image-61"
      src="https://anima-uploads.s3.amazonaws.com/projects/625c46af91fd1ec47148b487/releases/627a2fdff82b43480fa45248/img/image-61-1@2x.png"
    />
    <div class="group-1724">
      <div class="parche-multiverso">
        <span class="span0">${parche.nombreParche} </span>
      </div>
      <div class="flex-row">
        <div class="group-1573">
          <div class="group-container">
            <div class="group-1570">
              <div id="overlap-groupa">
                <div class="ellipse-173"></div>
                <img
                  class="mask-group"
                  src="https://anima-uploads.s3.amazonaws.com/projects/625c46af91fd1ec47148b487/releases/627a8a933a5ca462a5281b28/img/mask-group-21@2x.png"
                />
              </div>
            </div>
            <div class="group-1571">
              <div id="overlap-groupa">
                <div class="ellipse-173"></div>
                <img
                  class="mask-group"
                  src="https://anima-uploads.s3.amazonaws.com/projects/625c46af91fd1ec47148b487/releases/627a8a933a5ca462a5281b28/img/mask-group-22@2x.png"
                />
              </div>
            </div>
            <div class="group-1572">
              <div id="overlap-groupa">
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
        ${parche.descripcionParche}
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
  </div>
  </a>
  <div class="admin">
  <div class="group-container-1">
            <div class="group-1912">
              <div class="parches-pblicos niveaugrotesk-bold-smashed-pumpkin-15px">Eres admin</div>
            </div>
            <div class="overlap-group9">
              <div class="overlap-group8">
                <img
                  class="rectangle-9"
                  src="https://anima-uploads.s3.amazonaws.com/projects/625c46af91fd1ec47148b487/releases/627a2fdff82b43480fa45248/img/rectangle-9-2@2x.png"
                />
                
                <img
                  class="mask-group-2"
                  src="https://anima-uploads.s3.amazonaws.com/projects/625c46af91fd1ec47148b487/releases/627a8a933a5ca462a5281b28/img/mask-group-24@2x.png"
                />
                <div class="group-1724">
                  <div class="flex-row">
                    <img
                      class="mask-group-3"
                      src="https://anima-uploads.s3.amazonaws.com/projects/625c46af91fd1ec47148b487/releases/627a2fdff82b43480fa45248/img/mask-group-14@2x.png"
                    />
                    <div class="flex-col">
                      <div class="parche-quedada niveaugrotesk-medium-white-21-2px">
                        <span class="span0">${parche.nombreParche}</span
                        >
                      </div>
                      <div class="flex-row-1">
                        <div class="group-1573">
                          <div class="group-container">
                            <div class="group-1570">
                              <div class="overlap-groupa">
                                <div class="ellipse-173"></div>
                                <img
                                  class="mask-group"
                                  src="https://anima-uploads.s3.amazonaws.com/projects/625c46af91fd1ec47148b487/releases/627a8a933a5ca462a5281b28/img/mask-group-21@2x.png"
                                />
                              </div>
                            </div>
                            <div class="group-1571">
                              <div class="overlap-groupa">
                                <div class="ellipse-173"></div>
                                <img
                                  class="mask-group"
                                  src="https://anima-uploads.s3.amazonaws.com/projects/625c46af91fd1ec47148b487/releases/627a8a933a5ca462a5281b28/img/mask-group-22@2x.png"
                                />
                              </div>
                            </div>
                            <div class="group-1572">
                              <div class="overlap-groupa">
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
                    </div>
                  </div>
                  <p class="vamos-a-tomar-una-ce valign-text-middle niveaugrotesk-regular-normal-shark-12px">
                    ${parche.descripcionParche}
                  </p>
                  <div class="overlap-group-container">
                    <div class="overlap-group-1">
                      <div class="price valign-text-middle niveaugrotesk-medium-smashed-pumpkin-15-9px">$100.000</div>
                      <div class="meta valign-text-middle niveaugrotesk-regular-normal-purple-heart-11-6px">Meta:</div>
                      <div class="rectangle border-0-3px-purple-heart"></div>
                      <div class="rectangle-60"></div>
                      <img
                        class="mask-group-4"
                        src="https://anima-uploads.s3.amazonaws.com/projects/625c46af91fd1ec47148b487/releases/627a8a933a5ca462a5281b28/img/mask-group-19@2x.png"
                      />
                    </div>
                    <div class="overlap-group-2">
                      <div class="address-1 valign-text-middle niveaugrotesk-medium-smashed-pumpkin-15-9px">
                        2 semanas
                      </div>
                      <div class="faltan valign-text-middle niveaugrotesk-regular-normal-purple-heart-11-6px">
                        Faltan:
                      </div>
                      <div class="rectangle border-0-3px-purple-heart"></div>
                      <div class="rectangle-60"></div>
                      <img
                        class="icon-clock"
                        src="https://anima-uploads.s3.amazonaws.com/projects/625c46af91fd1ec47148b487/releases/627a8a933a5ca462a5281b28/img/fi-clock-3@2x.png"
                      />
                    </div>
                  </div>
                  <div class="overlap-group-container">
                    <div class="overlap-group-1">
                      <div class="price-2 valign-text-middle niveaugrotesk-medium-smashed-pumpkin-15-9px">$0</div>
                      <div class="recaudado valign-text-middle niveaugrotesk-regular-normal-purple-heart-11-6px">
                        Recaudado:
                      </div>
                      <div class="rectangle border-0-3px-purple-heart"></div>
                      <div class="rectangle-60"></div>
                      <img
                        class="mask-group-5"
                        src="https://anima-uploads.s3.amazonaws.com/projects/625c46af91fd1ec47148b487/releases/627a8a933a5ca462a5281b28/img/mask-group-18@2x.png"
                      />
                    </div>
                    <div class="overlap-group-2">
                      <div class="price-1 valign-text-middle niveaugrotesk-medium-smashed-pumpkin-15-9px">$10.000</div>
                      <div class="cuota-nica valign-text-middle niveaugrotesk-regular-normal-purple-heart-12-7px">
                        Cuota única:
                      </div>
                      <div class="rectangle border-1-1px-pippin"></div>
                      <div class="rectangle border-0-3px-purple-heart"></div>
                      <div class="rectangle-60"></div>
                      <img
                        class="mask-group-6"
                        src="https://anima-uploads.s3.amazonaws.com/projects/625c46af91fd1ec47148b487/releases/627a8a933a5ca462a5281b28/img/mask-group-20@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="rectangle-894-1"></div>
              <div class="group-1909">
                <div class="administrador valign-text-middle niveaugrotesk-regular-normal-white-13px">
                  Administrador
                </div>
              </div>
            </div>
          </div>
          <a href="./crear-parches.html">
          <div class="group-1936">
            <div class="group-1403a">
              <div class="overlap-group-4 border-1px-purple-heart">
                <div class="crear-otro-parche valign-text-middle niveaugrotesk-medium-purple-heart-15px">
                  Crear otro parche
                </div>
              </div>
            </div>
          </div>
          </a>
          </div>`
} else {
    let parche = document.getElementById('nomas');

    parche.style.marginTop ='300px'
}
