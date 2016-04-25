/// <reference path="../Ref/angular2.d.ts" />
System.register(["angular2/angular2"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var angular2_1;
    var MyAppComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            MyAppComponent = (function () {
                function MyAppComponent() {
                    this.name = 'Alice';
                }
                MyAppComponent = __decorate([
                    angular2_1.Component({
                        selector: 'my-app'
                    }),
                    angular2_1.View({
                        template: '<h1>Hello {{ name }}</h1>'
                    })
                ], MyAppComponent);
                return MyAppComponent;
            })();
            angular2_1.bootstrap(MyAppComponent);
        }
    }
});
//https://blog.oio.de/2014/01/31/an-introduction-to-typescript-module-system/ 
