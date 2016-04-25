/// <reference path="../Ref/mobx-global.ts" />
/// <reference path="oncall.tsx" />

@observer
class NightOnCall extends OnCall{

    // overwrite oncall.team2alias
    team2alias = { osp: "ericwan", redalert: "wislee" };

    // overwrite oncall.renderBody()
    renderBody() {
        return <div>
            <p>
                {this.teamSelectVm.team} oncall at night (redmond time) is {this.team2alias[this.teamSelectVm.team]}
            </p>
            <div>---------------2. Above is React NightOnCall (Derived)-------------------------</div>
        </div>
    }
};

ReactDOM.render(<NightOnCall  />, document.getElementById('NightOnCall'));