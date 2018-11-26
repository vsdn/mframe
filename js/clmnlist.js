class clmnList {
    constructor() {

    }
    initPage() {
        ReactDOM.render(React.createElement(Button, {id:"btnInit", text:"초기화", color:"blue", click:this.initForm}), document.getElementById("srchArea"));
    }
    initForm(){
        alert("INIT");
    }
}

