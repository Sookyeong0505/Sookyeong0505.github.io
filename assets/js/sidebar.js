
// 사이드바 열기
  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  function w3_open() {
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("sidebar").style.width = "25%";
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
  }
  
  function w3_close() {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
  }