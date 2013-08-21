/* Possibly necessary stuff for Angular + Cordova. See:
 * 1) https://github.com/hollyschinsky/MyAngularPhoneGapProject/tree/master/www
 * 2) http://stackoverflow.com/questions/15105910/angular-ng-view-routing-not-working-in-phonegap
 * They differ, so we may need dto consolidate some stuff?
 */

var app = {
  // Application Constructor
  initialize: function() {
    this.bindEvents();
  },

  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function() {
    document.addEventListener('load', this.onLoad, false);
    document.addEventListener('deviceready', this.onDeviceReady, false);
    document.addEventListener('backbutton', function(event) {
      event.preventDefault()
    });
  },

  onLoad: function() {
  },

  // deviceready Event Handler
  onDeviceReady: function() {
    $("input, textarea").on('click',function(evt){
      evt.stopPropagation();
      evt.preventDefault();
    });
    /*angular.element(document).ready(function() {
      angular.bootstrap(document);
    });*/
  }
};

