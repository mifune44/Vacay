$(document).ready(function() {

  $("form#user-prefs").submit(function(event) {
    var name = $("input#name").val();
    $(".fillInName").text(name);
  });

  $("form#user-prefs").submit(function(event) {
    var name = $("input#name").val();
    var weather = $("select#weather").val();
    var cost = $("select#cost").val();
    var where = $("select#where").val();
    var vice = $("select#vice").val();
    var oblige = $("select#oblige").val();
    
       if (vice === 'murder') {
          $("#dubai").hide();
          $("#siberia").hide();
          $("#zurich").hide();
          $("#sierra_leone").hide();
          $("#hell").slideDown();
        } else if (weather === 'hot' && cost === 'cheap' && where === 'rural') {
          $("#dubai").hide();
          $("#siberia").hide();
          $("#zurich").hide();
          $("#sierra_leone").fadeIn();
          $("#hell").hide();
        } else if (weather === 'cold' && cost === "rich" && where === 'metro') {
          $("#dubai").hide();
          $("#siberia").hide();
          $("#zurich").fadeIn();
          $("#sierra_leone").hide();
          $("#hell").hide();
        } else if (weather === 'cold' && cost === 'cheap' && where === 'rural' && oblige == 'work') {
          $("#dubai").hide();
          $("#siberia").fadeIn();
          $("#zurich").hide();
          $("#sierra_leone").hide();
          $("#hell").hide();
        } else if (weather === 'hot' && cost === 'rich' && where === 'metro') {
          $("#dubai").fadeIn();
          $("#siberia").hide();
          $("#zurich").hide();
          $("#sierra_leone").hide();
          $("#hell").hide(); 
        }
    // console.log(hell);

        event.preventDefault();
      });
    });