module.exports = function(name, marker){

  /*
   * set the name of the player
   *
   * @method setName
   * @param {String} newName
   */
  this.setName = function (newName){
    name = newName;
  }

  /*
   * get the name of the player
   *
   * @method getName
   * @return {String}
   */
  this.getName = function (){
    return name;
  }

  /*
   * set the marker of the player
   *
   * @method setMarker
   * @param {String} newMarker
   */
  this.setMarker = function (newMarker){
    marker = newMarker;
  }

  /*
   * get the marker of the player
   *
   * @method getMarker
   * @return {String}
   */
  this.getMarker = function (){
    return marker;
  }
}
