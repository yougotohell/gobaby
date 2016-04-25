/// <reference path="../Ref/angular2.d.ts" />
/// <reference path="../Ref/angular2-global.ts" />
/// <reference path="oncall.ts" />

module ng {

    @Component({
        selector: 'NightOnCall',
        directives: [
            ng.TeamSelect // sub comopent need to declared here
        ],
        templateUrl: '/angular2/OnCall.html'  // Template cannot be inherited, so NightOnCall view need to be implemented in OnCall's view
    })

    // view model
    export class NightOnCall extends OnCall {
        isNight = true;

        // overwrite oncall.team2alias
        team2alias = { osp: "ericwan", redalert: "wislee" };
    }
}

