// Enable tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


// open intercom if support=true parameter 
window.addEventListener('load', (event) => {
  try {
    let params = {};
    let queryString = location.search.slice(1);
    queryString.replace(/([^=]*)=([^&]*)&*/g, (_, key, value) => {
      params[key] = value;
    });
    if (params["support"] == "true") {
      Intercom('show');
      console.log("support window opened");
    }
  } catch {
    console.log("error opening support window");
  }
});


// submit the application form
async function submitForm() {
  let email = encodeURIComponent( document.getElementById("applyEmail").value);
  let name = encodeURIComponent( document.getElementById("applyName").value);
  let description = encodeURIComponent( document.getElementById("applyDescription").value);
  let parameters = `email=${email}&name=${name}&description=${description}`;
  let url = "/.netlify/functions/airtable/?" + parameters;

  fetch(url)
  .then(data=>{
    formSuccess();
    console.log(data);
  })
  .catch(err=>console.error(err));
}
function formSuccess() {
  console.log('application submitted')
  let form = document.getElementById('applyForm');
  let elems = document.querySelectorAll(".form-control");
  for (const elem of elems) {
    elem.classList.add("text-muted");
    elem.disabled = true;
  }
  document.getElementById('applySubmit').disabled = true;
  document.getElementById('applyCheck').disabled = true;
  document.getElementById('submitSuccess').classList.remove("d-none");
}

