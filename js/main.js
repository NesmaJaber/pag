$(function(){

	$(".link-item").click(function(){
        $("li").removeClass("active");
        $(this).addClass("active");
  });
  $(".nums").change(function(){
    $("input").removeClass("active");
    $(this).addClass("active");
  });
       
});

function viewPassword() {
  let passField = document.getElementById("password-field");
  let iconEye = document.getElementById("icon-eye") ;
  if (passField.type === "password") {
    passField.type = "text";
    iconEye.classList = "fa-regular fa-eye";


  } else {
    passField.type = "password";
    iconEye.classList ="fa-regular fa-eye-slash";
  }
}

// get email
