var app = angular.module('cvApp', ['ngAnimate']);

/* ********** Se crea directiva para detectar los pixeles y mostrar los bloques correspondientes ********** */

app.directive('screenSize', ['$window', function ($window) {
     return {
        link: link,
        restrict: 'A'           
     };
     function link(scope, element, attrs){
        scope.width = $window.innerWidth;
        
            function onResize(){

                if (scope.width !== $window.innerWidth)
                {
                    scope.width = $window.innerWidth;
                    scope.$digest();
                }
            };

            function cleanUp() {
                angular.element($window).off('resize', onResize);
            }

            angular.element($window).on('resize', onResize);
            scope.$on('$destroy', cleanUp);
     }    
 }]);

/*   *********** Controlador que trabajo con el menu de navegación de dispositivos mobile ************ */

app.controller('appCtrl', ['$scope', '$window', function($scope, $window) {

	$scope.menuActive = false;
	$scope.contactActive = false;
	$scope.seccionContenido = 'html/sobreMi/presentacion.html'; // POR DEFECTO - SECCION SOBRE MI.
	$scope.seccionHabTecnicas = 'html/habilidadesTecnicas/backend.html'; // POR DEFECTO - SECCION HAB TECNICA.

	$scope.cPresentacion = "active"; // POR DEFECTO - SECCION SOBRE MI.
	$scope.cBack = "active"; // POR DEFECTO - SECCION HAB TECNICA.

	$scope.desplegarMenu = function(){
		$scope.menuActive = !$scope.menuActive; 
	};

	$scope.desplegarContacto = function(){
		$scope.contactActive = !$scope.contactActive; 
	};

	$scope.mostrarContenidoSobreMi = function(id){

		switch (id) {
		    case 'presentacion':
		        $scope.seccionContenido = 'html/sobreMi/presentacion.html';
		        $scope.cPresentacion = "active";
				$scope.cCualidades = "";
				$scope.cHobbies = "";
		        break;
		    case 'cualidades':
		        $scope.seccionContenido = 'html/sobreMi/cualidades.html';
		        $scope.cPresentacion = "";
				$scope.cCualidades = "active";
				$scope.cHobbies = "";
		        break;
		    case 'hobbies':
		        $scope.seccionContenido = 'html/sobreMi/hobbies.html';
		        $scope.cPresentacion = "";
				$scope.cCualidades = "";
				$scope.cHobbies = "active";
		        break;
		    default:
		    	$scope.seccionContenido = 'html/sobreMi/presentacion.html';
		    	break;
		}
	}

	$scope.mostrarContenidoHabTecnicas = function(id){
		switch (id) {
		    case 'backend':
		        $scope.seccionHabTecnicas = 'html/habilidadesTecnicas/backend.html';
		        $scope.cBack = "active";
				$scope.cFront = "";
				$scope.cConocimientos = "";
		        break;
		    case 'frontend':
		        $scope.seccionHabTecnicas = 'html/habilidadesTecnicas/frontend.html';
		        $scope.cBack = "";
				$scope.cFront = "active";
				$scope.cConocimientos = "";
		        break;
		    case 'conocimientos':
		        $scope.seccionHabTecnicas = 'html/habilidadesTecnicas/conocimientos.html';
		        $scope.cBack = "";
				$scope.cFront = "";
				$scope.cConocimientos = "active";
		        break;
		    default:
		    	$scope.seccionHabTecnicas = 'html/habilidadesTecnicas/backend.html';
		    	break;
		}
	}

 }]);


