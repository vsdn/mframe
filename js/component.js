class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let className = "btn btn-primary ";
        className += this.props.color;
        return (
            <a id={this.props.id} className={className}  href="#" role="button" onClick={() => this.props.click()}>{this.props.text}</a>
        );
    }
}
class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let menuName = "";
        if(this.props.menuDepth3 == "") {
            if(this.props.menuDepth2 == "") {
                if(this.props.menuDepth1 == "") {
                    menuName = "";
                }
                else {
                    menuName = this.props.menuDepth1;
                }
            }
            else {
                menuName = this.props.menuDepth1 + " > " + this.props.menuDepth2;
            }
        }
        else {
            menuName = this.props.menuDepth1 + " > " + this.props.menuDepth2 + " > " + this.props.menuDepth3;
        }
        return (
            <div>
                <div id="naviTop" class="naviTop">{menuName}</div>
                <div id="naviLogin" class="naviLogin"><div class="branch">{this.props.branchName}({this.props.branchCode})</div><div class="login">{this.props.loginId}</div></div>
            </div>
        );
    }
}