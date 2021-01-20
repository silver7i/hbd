var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

function myFunction() {
  var value = document.getElementById("text-value").value;
  if(value == "0121"){
    location.href="true.html";
  }else if(value ==""){
    location.href="blank.html"
  }else {
    location.href="fail.html"
  };
}

function formTest7(){
  if(!document.testForm.contents.value){
    alert("설~~~마. Hoxy. 은별님의 생일을 모르나요??");
    document.testForm.contents.focus();
    return false;
    };

  if(document.testForm.contents.value == "0121"){
    alert("정답입니다!! 이걸 보는 사람은 모두 축하해주는겁니다^^");
    document.testForm.contents.focus();
    return false;
    }else{
      alert("······,    와··· 설마 몰라??? 진짜??");
    document.testForm.contents.focus();
    return false;
    };
}
