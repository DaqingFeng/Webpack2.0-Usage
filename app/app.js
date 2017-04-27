import { module } from 'angular';
import ngcss from 'style-loader!css-loader!../node_modules/angular/angular-csp.css';
import appcontrol from '../controller/appcontroller';

class App {
    constructor($scope) {
        $scope.model = new appcontrol();
    }
}

export default angular.module("appModule",[])
    .controller("appController", App);