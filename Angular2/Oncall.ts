/// <reference path="../Ref/angular2.d.ts" />
/// <reference path="../Ref/angular2-global.ts" />
/// <reference path="Teamselect.ts" />

module ng {

    @Component({
        selector: 'OnCall',
        directives: [
            ng.TeamSelect // sub comopent need to declared here
        ],
        templateUrl: '/angular2/OnCall.html'
    })


    export class OnCall {
        public team = 'osp'; // Unlike react angular use event to interact between compoments so this property cannot be put into TeamSelect

        team2alias:any = { osp: "haileic", redalert: "chenchen" };

        onTeamChange(team: string) {
            this.team = team;
            console.log("TeamSelect compoment noifiy us that team has changed to: " + team);
        }
    }
}

