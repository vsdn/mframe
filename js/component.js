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