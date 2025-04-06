const data_graphic = [
  {
    "name": "Poster Ilmiah Bencana",
    "jenis": "Poster",
    "src": "https://ifandika.github.io/resources/graphic/Karakteristik Bencana Banjir Bandang Di Indonesia_Maulana Ifandika_Universitas Muhammadiyah Purworejo.png",
    "rating": 5,
    "comments": [
      {
        "username": "ifandika",
        "comment": "Desainya bagus sekali !"
      }
    ]
  },
  {
    "name": "Poster Infografis Bencana",
    "jenis": "Poster",
    "src": "https://ifandika.github.io/resources/graphic/Banjir Merugikan Cegah Mulai Sekarang_Maulana Ifandika_Universitas Muhammadiyah Purworejo.png",
    "rating": 5,
    "comments": [
      {
        "username": "ifandika",
        "comment": "Desainya bagus sekali !"
      }
    ]
  },
  {
    "name": "Poster Infografis Bencana",
    "jenis": "Poster",
    "src": "https://ifandika.github.io/resources/graphic/Banjir Merugikan Cegah Mulai Sekarang_Maulana Ifandika_Universitas Muhammadiyah Purworejo.png",
    "rating": 5,
    "comments": [
      {
        "username": "ifandika",
        "comment": "Desainya bagus sekali !"
      }
    ]
  },
  {
    "name": "Poster Ilmiah Bencana",
    "jenis": "Poster",
    "src": "https://ifandika.github.io/resources/graphic/Karakteristik Bencana Banjir Bandang Di Indonesia_Maulana Ifandika_Universitas Muhammadiyah Purworejo.png",
    "rating": 5,
    "comments": [
      {
        "username": "ifandika",
        "comment": "Desainya bagus sekali !"
      }
    ]
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
          <p>${e.jenis}</p>
          <p>Rating: ${e.rating}</p>
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
          <p>${e.jenis}</p>
          <p>Rating: ${e.rating}</p>
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
        <p>${e.jenis}</p>
        <p>Rating: ${e.rating}</p>
      `;
      page_poster_row.appendChild(new_item);
    }
  });
}

get_data();


