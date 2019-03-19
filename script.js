function getList() {

  var nums=$("#nums");
  var playersNum = $(nums).value();


  $.ajax({
    url: 'https://www.boolean.careers/api/array/basket',
    method: 'GET',
    data: {
      n: playersNum
    },
    success: function(data){
      if (data.success) {
        $(".statistics").append(data.response);
      }
    },
    error: function(error){
      alert("Attenzione! Errore!");
      console.log(error);
    }
  });
}

function init() {

  var btn=$("#btn");
  btn.click(getList);
}

$(document).ready(init);
