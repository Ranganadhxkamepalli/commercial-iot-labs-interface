/**
 * LABS - Responsive Admin Theme
 *
 */

/**
 * MainCtrl - controller
 */
function MainCtrl() {

    this.userName = 'Guest';
    this.helloText = 'Welcome to the Intel Commercial IoT Workshop';
    this.descriptionText = '';

}


/**
* codeEditorCtrl - Controller for code editor - Code Mirror
*/
function CodeEditorCtrl($scope) {
  $scope.editorOptions = {
    lineNumbers: true,
    matchBrackets: true,
    styleActiveLine: true,
    theme:"ambiance"
  };
}


angular
  .module('labs')
  .controller('MainCtrl', MainCtrl)
  .controller('CodeEditorCtrl', ['$scope', CodeEditorCtrl]);
