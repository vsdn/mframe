function enc(str) {
    if(str == "황") {
        console.log(str);
        console.log("!");
    }
    else {
        console.log(str);
        console.log("?");
    }
    str = document.getElementById("test").value;
    if(str=="황"){
        console.log(str);
        console.log("!");
    }
    else {
        console.log(str);
        console.log("?");
    }
    return encodeURI(str);
}


function encB(str) {
    var frm = document.frm;
    ????????frm.acceptCharset = 'euc-kr';
    ????????if(document.all)document.charset = 'euc-kr';

enc(document.getElementById("test").value)    ?;

????????// 폼 전송을 새창으로 했을경우 기존 문자셋으로 되돌려 놓기 위한 처리입니다.
????frm.acceptCharset = 'utf-8';
????????if(document.all)document.charset = 'utf-8'; // 익스플로러에서는 이렇게 해줘야 됩니다. (버그성 이라고 하네여)
}
function submitForm() {
    if(document.all)document.charset = 'euc-kr';
    document.frm.submit();
    if(document.all)document.charset = 'utf-8'; // 익스플로러에서는 이렇게 해줘야 됩니다. (버그성 이라고 하네여)
}


