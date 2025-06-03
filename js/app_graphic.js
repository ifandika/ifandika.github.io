// "../resources/graphic/" base url
const data_graphic = [
  {
    "name": "Poster Ilmiah Bencana",
    "jenis": "Poster",
    "src": "../resources/graphic/img1/img1.png",
    "cdr": "../resources/graphic/img1/img1.cdr"
  },
  {
    "name": "Poster Infografis Bencana",
    "jenis": "Poster",
    "src": "../resources/graphic/img2/img2.png",
    "cdr": "../resources/graphic/img2/img2.cdr"
  },
  {
    "name": "Asymmetrical Graphic Design",
    "jenis": "Poster",
    "src": "../resources/graphic/img3/img3.png",
    "cdr": "../resources/graphic/img3/img3.cdr"
  },
  {
    "name": "Poster Infografis IPTEK",
    "jenis": "Poster",
    "src": "../resources/graphic/img4/img4.png",
    "cdr": "../resources/graphic/img4/img4.cdr"
  },
  {
    "name": "Design Landing Page Web",
    "jenis": "Landing Page Web",
    "src": "../resources/graphic/img5/img5.png",
    "cdr": "../resources/graphic/img5/img5.cdr"
  }
];

// Menu bar
function menu_bar() {
  var display_now = document.getElementById("menu-list").style.display;
  if (display_now == "none") {
    document.getElementById("menu-list").style.display = "block";
  } else {
    document.getElementById("menu-list").style.display = "none";
  }
}

// For get current year
document.getElementById("current-year").innerHTML = new Date().getFullYear();

function showField() {
  const box_field = document.querySelectorAll('.box');
}

function get_data() {
  const page_poster = document.querySelector('.page-poster');
  let data_graphic_arr = [];
  data_graphic_arr.push(...data_graphic);
  var counter = 0;
  var row = 1;

  data_graphic_arr.forEach(e => {
    counter++;
    if(counter == 1) {
      const new_row = document.createElement('div');
      new_row.classList = `row text-white row-${row}`;
      new_row.innerHTML = `
        <div class="col-sm">
          <img src="${e.src}" class="img-fluid rounded" alt="Responsive image">
          <p>${e.name}</p>
          <div class="graphic-download">
            <div>
              <a href="${e.cdr}">
                <i class="bi bi-download "></i> Unduh CDR
              </a>
            </div>
          </div>
        </div>
      `;
      page_poster.appendChild(new_row);
    }
    else if(counter % 5 == 0) {
      row++;
      const new_row = document.createElement('div');  
      new_row.classList = `row text-white row-${row}`;
      new_row.innerHTML = `
        <div class="col-sm">
          <img src="${e.src}" class="img-fluid rounded" alt="Responsive image">
          <p>${e.name}</p>
          <div class="graphic-download">
            <div>
              <a href="${e.cdr}">
                <i class="bi bi-download "></i> Unduh CDR
              </a>
            </div>
          </div>
        </div>
      `;
      page_poster.appendChild(new_row);
    }
    else {
      const page_poster_row = document.querySelector(`.row-${row}`);
      const new_item = document.createElement('div');
      new_item.classList = 'col-sm';
      new_item.innerHTML = `
        <img src="${e.src}" class="img-fluid rounded" alt="Responsive image">
        <p>${e.name}</p>
        <div class="graphic-download">
          <div>
            <a href="${e.cdr}">
              <i class="bi bi-download "></i> Unduh CDR
            </a>
          </div>
        </div>
      `;
      page_poster_row.appendChild(new_item);
    }
  });
}

get_data();