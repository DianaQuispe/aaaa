var jueguito=document.getElementById('juego');
var x;
var y;
var yinicial;
var xinicial;
var yfinal;
var xfinal;
var xtrans=[];
var ytrans=[];
var s=5;

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
document.addEventListener("keydown", movimiento);

var map1 = [" * * * * * * * * * * * * * * * * * * * * ",
    " * *           * * *             * *   * ",
    " * *             W                 *   * ",
    " *                           *     *   * ",
    " *         *                       *   * ",
    " *   * * * *             *         *   * ",
    " *     *     * *       *   *       *   * ",
    " *   * I o   * *         *   * * * *   * ",
    " *     *     * *   * *  **           I * ",
    " *   *          *        *         * * * ",
    " *           * ***   *   *     *   * * * ",
    " *       *      *        * *       * * * ",
    " *     * *             ***         * * * ",
    " * *   *           *     *         *   * ",
    " *     *   *      *      *     *       * ",
    " * *        *     *      *         *   * ",
    " * * * * * * * * * * * * * * * * * * * * "];

var  map2=[" * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ",
    " * *                                 *             * * * * ",
    " * *   *                             *       *       * * * ",
    " *   *   *            *              *     * *     *     * ",
    " *         *           * *           * * *       *   *   * ",
    " *     * *       *           *       *   *     *     *   * ",
    " *   *                       *       *   *   *       *   * ",
    " * *                             *   *   I          W* * * ",
    " * *              **     * *                             * ",
    " * *             *     I           *                     * ",
    " *               *   *         *                     *   * ",
    " *   *   *     *       *   *                             * ",
    " *     *                             *                   * ",
    " *       * *        *    *   *     * * *           *     * ",
    " *       * *                         *     *       *     * ",
    " * *             *       *       *                       * ",
    " *       *     *       *   * *     *     *   * *         * ",
    " *     *           *  o*   * *   *   *       * * *       * ",
    " * * *      *          * *         *   *             * * * ",
    " * * * * * * * * * * * * * * * * * * * * * * * * * * * * * "];

var map3=[" * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ",
    " * * * * * * * * * * *                                           ",
    " *       *  *  *       * *                                W*     ",
    " *               *     * * *           *                   I     ",
    " * *       *               * *                                   ",
    " *    *    * *   I           * *         *   *                   ",
    " *                   ****      * * * *   *     *         *       ",
    " *         *                 *           *   *                   ",
    " *       *                 *   *                                 ",
    " *         *   *         *       *   *                           ",
    " *             *         *                                       ",
    " * *                ** *                                   *     ",
    " *                **         * *                                 ",
    " *  **   *   *  **                     * *                 * *   ",
    " * *   *   *   *       * *                   * *           * *   ",
    " *                                         *   *                 ",
    " *               *     *               ***   * *                 ",
    " *             *               *                                 ",
    " *                       *         * *                           ",
    " *o  *       *           *       * *                           * ",
    " * * *           *                                         *     ",
    " * * * *                                  *                *     ",
    " * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * "];

var map4= ["                                                                 ",
    " *   o       * **  ** *                                  *****    ",
    "    *                                                        *    ",
    "    *           **                                           *    ",
    "   ** **************         **             ****             *    ",
    "   **          *           * *                              I*  * ",
    "   **                                        *                    ",
    "   *****************                         ****                 ",
    "       *************                                              ",
    "     ***************   *   W                                      ",
    "            ** **      **  **                                     ",
    "                      *    **                                     ",
    "  *                  *******                                      ",
    "   *****            **                                      W     ",
    "   ***        **  **          *                            ***    ",
    " **************************************************************** ",
    "   I  **       *           * *                             ***    ",
    " *            *                    ** * * * *       *      ***    ",
    "               *        *                           *       *     ",
    "    *                  ** *                         *    W        ",
    " *  **                  *           *             *               ",
    " *  ****                   *                 *    *          ***  ",
    " *  *******                *                ****  **              ",
    " *  ****                  **                ***   ****            ",
    " *  ***       *         W                   *****     *******     ",
    " **  *        **    *                        ***  ***********     ",
    " **    **                                    ****************     ",
    " **     ** *****       *  *****                 **                ",
    "           *    * ** **    ****                   *               ",
    " ** W****************    * ****                    *      ******* ",
    "                                                                  "];

var map5= ["                                                                 ",
    "                                W                     W          ",
    "         *                                       *               ",
    "   *                    *                            *           ",
    "                                              *                  ",
    "                                                  *        *     ",
    "   *                         W            *         *            ",
    "          *                                    *            *    ",
    "                                      *                      *   ",
    "                                           *                     ",
    "         *                             *                     I W ",
    "  *            *       *                                         ",
    "                                                                 ",
    "                                                   *             ",
    "    *               **W*************W********             *      ",
    "          *         *                       *                    ",
    "                    *   ******W**********   *                  * ",
    "                    *   *               *   *       *            ",
    "                    *   *   **********  *   W                    ",
    "                    *   W   *        *  *   *                    ",
    "         *          *   *   *        I  *   *                    ",
    "   *                *   *   ******** *  *   *    W               ",
    "                    *   *            *  W   *        *           ",
    "                    *   **************  *   W               ***  ",
    "          *         *                   *   *               **   ",
    "     *              *********************   *        *           ",
    "          *                                 *        *        W  ",
    "  *                                         *        *        *  ",
    "      *       ***W*********W****W****W*******        *******  *  ",
    " o *                                                             ",
    "                                                                 "] ;


var map6=[  "                                                 ",
    "                                                 ",
    "                                                 ",
    "       **o        ***                **W         ",
    "                  ***                 *          ",
    "                  *              *               ",
    "                  *                     *        ",
    "     *  *                     *   *     *        ",
    "      * *                    **** *              ",
    "      *                                 *        ",
    "                                       **        ",
    "                         **            **        ",
    "                          *                      ",
    "              ** *       ***                     ",
    "              ***                                ",
    "              **                  **             ",
    "       **                         **             ",
    "       **                         *              ",
    "         *            **                         ",
    "                     ***                         ",
    "                    * **                         ",
    "                                                 ",
    "                                                 "];

var mapas = [map1, map2, map3, map4, map5, map6];
var mapa = mapas[5];
var map = [];
function iniciar(){
  map=[];
  for (var i = 0; i < mapa.length; i++){
    map[i]=[];
    for (var j = 0; j < mapa[0].length; j++) {
      map[i][j]=mapa[i][j];
      if(map[i][j]=='o'){
          xinicial=j;
          yinicial=i;
      }
    }
  }
}

function generarMapa(map, direccion) {
  xtrans=[];
  ytrans=[];
  yfinal=map.length-1;
  xfinal=map[0].length-1;
  jueguito.innerHTML='';
  var tabla = document.createElement('table');
  tabla.setAttribute('cellspacing','0');
  for (var i = 0; i < map.length; i++) {
    var fila = document.createElement('tr');
    for (var j = 0; j < map[i].length; j++) {
        var celda = document.createElement('td');
        if(map[i][j]=='*'){
          celda.setAttribute('class','pared');
        } else if(map[i][j]=='o'){
          x=j;
          y=i;
          celda.setAttribute('class','nave');
          celda.setAttribute('id',direccion);
        } else if
         (map[i][j]=='W') {
          celda.setAttribute('class', 'llegada');
        } else if (map[i][j]=='I'){
         celda.setAttribute('class','transporte');
          xtrans.push(j);
          ytrans.push(i);
        }
        fila.appendChild(celda);
    }
    tabla.appendChild(fila);
  }
  jueguito.appendChild(tabla);
}

function nivel() {
  jueguito.className='';
  if(s<0){
    alert('Ganaste!');
    ganar();
  } else {
    mapa=mapas[s];
    iniciar();
    generarMapa(map, 'empezar');
  }
}
function ganar() {
    var div=document.createElement('div');
    div.setAttribute('class', 'ganador');
    var imagen = document.createElement('img');
    imagen.setAttribute('src','assets/img/car.png');
    var p=document.createElement('p');
    var texto= document.createTextNode('Ganaste!');
    p.appendChild(texto);
    div.appendChild(imagen);
    div.appendChild(p);
    jueguito.replaceChild(div, jueguito.firstChild);
}
var t;
var d;
function move(a, b, direccion)
{
  if( map[y+a][x+b]=="*" ){
      clearTimeout(t);
      return;
  }
  if( map[y+a][x+b]=="W" ){
      clearTimeout(t);
      jueguito.className='rotar';
      s--;
      d = setTimeout(nivel, 2000);
      return;
  }
  if( y+a==0 || x+b==0 || y+a==yfinal || x+b==xfinal){
      reiniciar();
      clearTimeout(t);
      return;
  }
  if(map[y+a][x+b]==' '){
    map[y][x]=' ';
    map[y+a][x+b]='o';
  }
  if(map[y+a][x+b]=='I'){
    map[y][x]=' ';
    if(y+a==ytrans[0]){
      y=ytrans[1];
      x=xtrans[1];
    } else {
      y=ytrans[0];
      x=xtrans[0];
    }
    map[y+a][x+b]='o';
  }
  generarMapa(map, direccion);

  t = setTimeout(function(){ move(a, b, direccion) }, 10);
}


function movimiento(evento)
{
  switch(evento.keyCode)
  {
    case teclas.UP:
      move(-1, 0, 'up');
    break;
    case teclas.DOWN:
      move(1, 0, 'down');
    break;
    case teclas.LEFT:
      move(0, -1, 'left');
    break;
    case teclas.RIGHT:
      move(0, 1, 'rigth');
    break;
  }
}

function reiniciar() {
  map[y][x]=' ';
  map[yinicial][xinicial]='o';
  generarMapa(map, 'empezar');
}
