$('#butt').on('click', function(){
  let name = $('#name').val();
  let comment = $('#comment').val();

      $('#commentSpace').prepend('<div id="sent"><h3>'
      + name + '</h3>'+'<p id="origin">'+  comment + '</p>'+
      '<form><input type="text" placeholder="Change Comment" id="changeArea">'+
      '<input type="button" id="change" value="change">'+
      '<input type="button" id="delete" value="delete">'+
      '</form></div>');

      if(name === "" || comment === "" ){
        $('#sent').remove();
        $('#make').append(
          '<p id="trouble">Please fill out the fields above.</p>');
          a++
          exist = true
        }

      if(name !== "" && comment !== ""){

        $('#trouble').remove();
        a = 0
      }
      if(a >= 2 && exist === true){
        $('#trouble').remove();
        exist = false
        a = 1
      }

      document.getElementById("comment").value = "";

});

$('#commentSpace').on('click', '#delete', function(){

      let e = $(this);
      let ee = $(e).parents()[1];
      $(ee).remove();
});
$('#commentSpace').on('click', '#change', function(){
      let e = $(this)
      let ee = $(e).parents()[1];
      let eee = $(ee).children()[2];
      let eeee = $(eee).children()[0];
      let commentChange = $(eeee).val();
      let o = $(ee).children()[1];
      $(o).html('<p>'+ commentChange + '</p>');

});
let a = 0
let exist = false
