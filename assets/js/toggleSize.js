function toggleSize(idEl, idSwitch) {
  if(document.getElementById(idEl).style.maxHeight == "1800px"){
    document.getElementById(idEl).style.maxHeight = "350px";
    document.getElementById(idSwitch).innerHTML = "více<div class='section-shadow'></div>";
    location.href = "#" + idEl;
  } else {
    document.getElementById(idEl).style.maxHeight = "1800px";
    document.getElementById(idSwitch).innerHTML = "méně<div class='section-shadow'></div>";
  }
}
