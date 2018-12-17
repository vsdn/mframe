class clmnList {
    constructor() {

    }
    initPage() {
        ReactDOM.render(React.createElement(Navigation, {menuDepth1:"수금", menuDepth2:"수금관리", menuDepth3:"", branchCode:"90", branchName:"서울콜센터", loginId:"나성원"}), document.getElementById("naviArea"))
        ReactDOM.render(React.createElement(Button, {id:"btnInit", text:"초기화", color:"blue", click:this.initForm}), document.getElementById("srchArea"));

        var mySwiper = new Swiper('.swiper-container', {
            speed: 400,
            spaceBetween: 100,
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
            }
        });
    }
    initForm(){
        alert("INIT");
    }
}

