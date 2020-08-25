"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DesafiosComponent = void 0;
var core_1 = require("@angular/core");
var wp_service_1 = require("../../@service/wp.service");
var DesafiosComponent = /** @class */ (function () {
    function DesafiosComponent(dataWp) {
        this.dataWp = dataWp;
    }
    // tslint:disable-next-line: typedef
    DesafiosComponent.prototype.ngOnInit = function () {
        this.posts$ = this.dataWp.getPosts();
        console.log(this.posts$[0]);
    };
    DesafiosComponent = __decorate([
        core_1.Component({
            selector: 'app-desafios',
            templateUrl: './desafios.component.html',
            styleUrls: ['./desafios.component.css'],
            providers: [wp_service_1.WpService]
        })
    ], DesafiosComponent);
    return DesafiosComponent;
}());
exports.DesafiosComponent = DesafiosComponent;
