/// <reference path="../Ref/angular2.d.ts" />
/// <reference path="../Ref/angular2-global.ts" />

module ng {

    @Component({
        selector: 'TeamSelect'
    })
    @View({
        templateUrl: '/angular2/TeamSelect.html'
    })

    export class TeamSelect {
        //public team = 'osp'; // public this as output
        @Output() onTeamChange = new EventEmitter<string>();

        onChange(e) {
            this.onTeamChange.emit(e.target.textContent);
        }
    }
}




