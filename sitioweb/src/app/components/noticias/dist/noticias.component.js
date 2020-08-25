"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NoticiasComponent = void 0;
var core_1 = require("@angular/core");
var NoticiasComponent = /** @class */ (function () {
    function NoticiasComponent(http) {
        this.http = http;
        this.posts = [];
    }
    NoticiasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:8888/backend/wp-json/wp/v2/posts').subscribe(function (data) {
            for (var clave in data) {
                if (data.hasOwnProperty(clave)) {
                    _this.posts.push(data[clave]);
                }
            }
            console.log(_this.posts[0].title.rendered);
        });
    };
    NoticiasComponent = __decorate([
        core_1.Component({
            selector: 'app-noticias',
            templateUrl: './noticias.component.html',
            styleUrls: ['./noticias.component.css']
        })
    ], NoticiasComponent);
    return NoticiasComponent;
}());
exports.NoticiasComponent = NoticiasComponent;
