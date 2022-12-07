function avg(){
    let a=+document.getElementById('canh1').value;
    let b=+document.getElementById('canh2').value;
    let c=+document.getElementById('canh3').value;
    if(a+b>c &&  b+c>a && c+a>b && a>0 && b>0 && c >0){
        if( a*a==b*b+c*c || b*b==a*a+c*c || c*c==b*b+a*a){
            document.getElementById('DTB').innerHTML='ABC la tam giac vuong'
        }else {
            document.getElementById('DTB').innerHTML='ABC ko la tam giac vuong'
        }
    } else {
        document.getElementById('DTB').innerHTML = 'khong phai la tam giac'
    }
}
function reset() {
    document.getElementById('canh1').value = "" ;
    document.getElementById('canh2').value = "" ;
    document.getElementById('canh3').value="";
     document.getElementById('DTB').innerHTML='ket qua';

}