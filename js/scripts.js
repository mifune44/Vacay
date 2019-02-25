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
    
    if (weather === 'hot' && cost === 'rich') {
          $("#dubai").fadeIn();
          $("#siberia").hide();
          $("#zurich").hide();
          $("#sierra_leone").hide();
          $("#hell").hide();
        } else if (weather === 'hot' && cost === 'cheap') {
          $("#dubai").hide();
          $("#siberia").hide();
          $("#zurich").hide();
          $("#sierra_leone").fadeIn();
          $("#hell").hide();
        } else if (weather === 'cold' && cost === "rich") {
          $("#dubai").hide();
          $("#siberia").hide();
          $("#zurich").fadeIn();
          $("#sierra_leone").hide();
          $("#hell").hide();
      } else if (weather === 'cold' && cost === 'cheap') {
          $("#dubai").hide();
          $("#siberia").fadeIn();
          $("#zurich").hide();
          $("#sierra_leone").hide();
          $("#hell").hide();
        } else if (vice === 'cold') {
          $("#dubai").hide();
          $("#siberia").hide();
          $("#zurich").hide();
          $("#sierra_leone").fadeIn();
          $("#hell").hide();
        } else if (cost === '' && where === '') {
          $("#dubai").hide();
          $("#siberia").hide();
          $("#zurich").fadeIn();
          $("#sierra_leone").hide();
          $("#hell").hide();
        } else if (cost === '' && where === '') {
          $("#dubai").fadeIn();
          $("#siberia").hide();
          $("#zurich").hide();
          $("#sierra_leone").hide();
          $("#hell").hide();
        } else if (oblige === '' || cost === '' || where === '') {
          $("#dubai").hide();
          $("#siberia").fadeIn();
          $("#zurich").hide();
          $("#sierra_leone").hide();
          $("#hell").hide();
        } else if (vice === 'cool' && where === '') {
          $("#dubai").hide();
          $("#siberia").hide();
          $("#zurich").hide();
          $("#sierra_leone").fadeIn();
          $("#hell").hide();
        } else if (vice === 'warm' || oblige === '') {
          $("#dubai").hide();
          $("#siberia").fadeIn();
          $("#zurich").hide();
          $("#sierra_leone").hide();
          $("#hell").hide();
        } else if (vice === 'dry') {
          $("#dubai").hide();
          $("#siberia").hide();
          $("#zurich").fadeIn();
          $("#sierra_leone").hide();
          $("#hell").hide();
        } else if ( === 'luxe') {
          $("#dubai").hide();
          $("#siberia").fadeIn();
          $("#zurich").hide();
          $("#sierra_leone").hide();
          $("#hell").hide();
        } else {
          $("#dubai").hide();
          $("#siberia").hide();
          $("#zurich").fadeIn();
          $("#sierra_leone").hide();
          $("#hell").hide();
        }
    console.log(weather);

        event.preventDefault();
      });
    });