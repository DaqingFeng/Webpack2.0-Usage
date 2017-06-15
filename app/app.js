import { module } from 'angular';
import ngcss from 'style-loader!css-loader!../node_modules/angular/angular-csp.css';
import appcss from '../content/app.css';
import appcontrol from '../controller/appcontroller';
import $ from 'jquery';
import draggable from 'jquery-ui/ui/widgets/draggable';

class App {
    constructor($scope) {
        $scope.model = new appcontrol();
        this.dragable = this._dragable();
    }
    
    _dragable() {
        $('#clickme').on('click', () => {
            $(".pageheader").draggable();
        });
    }
}

export default angular.module("appModule", [])
    .controller("appController", App);