
function pdfView(src) {
  const pdf_view = document.querySelector('.pdf-view');
  const user_agent = navigator.userAgent;

  if(user_agent.indexOf("Firefox") > -1) {
    console.log("Firefox");
    pdf_view.innerHTML = `<object data="${src}" width="100%" height="700px"></object>`;
  }
  else if (user_agent.indexOf("Chrome") > -1 && user_agent.indexOf("Safari") > -1 && user_agent.indexOf("Edg") === -1 && user_agent.indexOf("OPR") === -1) {
    console.log("Chrome");
    pdf_view.innerHTML = `<object data="${src}" width="100%" height="700px"></object>`;
  }
  // For other browsers
  else if (user_agent.indexOf("Safari") > -1) {
    console.log("Safari");
    pdf_view.innerHTML = `<object data="${src}" width="100%" height="700px"></object>`;
  }
  else {
    console.log("Other");
    pdf_view.innerHTML = `<object data="${src}" width="100%" height="700px"></object>`;
  }
}