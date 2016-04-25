/// <reference path="../Ref/mobx-global.ts" />
/// <reference path="Teamselect.tsx" />

@observer
class OnCall extends React.Component<any, any> {
    // view model of sub componet
    @observable teamSelectVm: TeamSelectVm = new TeamSelectVm();

    team2alias: any = { osp: "haileic", redalert: "chenchen" };

    renderBody() {
        return <div>
            <p>
                {this.teamSelectVm.team} oncall is {this.team2alias[this.teamSelectVm.team]}

            </p>
            <p>---------------1. Above is React OnCall (Base class )-------------------------</p>
        </div>
    }

    render() {
        return (
            <div>
                <TeamSelect vm ={ this.teamSelectVm} />
                {this.renderBody() }
            </div>
        );
    }

};

ReactDOM.render(<OnCall  />, document.getElementById('oncall'));