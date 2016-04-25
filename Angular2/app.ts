/// <reference path="../Ref/angular2.d.ts" />
/// <reference path="../Ref/angular2-global.ts" />


@Component({
    selector: 'MyAppComponent'
})
@View({
    template: '<h1>Hello {{ name }}</h1>'
})
class MyAppComponent {
    name: string;

    constructor() {
        this.name = 'Alice';
    }
}



