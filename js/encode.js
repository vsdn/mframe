function enc(str) {
    if(str == "Ȳ") {
        console.log(str);
        console.log("!");
    }
    else {
        console.log(str);
        console.log("?");
    }
    str = document.getElementById("test").value;
    if(str=="Ȳ"){
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

????????// �� ������ ��â���� ������� ���� ���ڼ����� �ǵ��� ���� ���� ó���Դϴ�.
????frm.acceptCharset = 'utf-8';
????????if(document.all)document.charset = 'utf-8'; // �ͽ��÷η������� �̷��� ����� �˴ϴ�. (���׼� �̶�� �ϳ׿�)
}
function submitForm() {
    if(document.all)document.charset = 'euc-kr';
    document.frm.submit();
    if(document.all)document.charset = 'utf-8'; // �ͽ��÷η������� �̷��� ����� �˴ϴ�. (���׼� �̶�� �ϳ׿�)
}


