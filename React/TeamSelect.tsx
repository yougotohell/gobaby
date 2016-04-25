/// <reference path="../Ref/mobx-global.ts" />
/// <reference path="Teamselectvm.tsx" />

@observer
class TeamSelect extends React.Component<{ vm: TeamSelectVm }, any> {

    render() {
        var vm = this.props.vm;
        return (<div>
            <button onClick={() => vm.team = 'osp'}>osp</button>
            <button onClick={() => vm.team = 'redalert'}>redalert</button>
        </div>
        );
    }
}