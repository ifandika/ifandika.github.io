
const data_ebook = [
  {
    "name": "ENG_Apress_Pro Git (2023)",
    "src": "https://ifandika.github.io/resources/ebook/ENG_Apress_Pro Git (2023).pdf"
  },
  {
    "name": "ENG_Data Structures and Algorithms in Java, 6th Edition (2014)",
    "src": "https://ifandika.github.io/resources/ebook/ENG_Data Structures and Algorithms in Java, 6th Edition (2014).pdf"
  },
  {
    "name": "ENG_Data Structures and Algorithms Made Easy, Data Structure and Algorithmic Puzzles (2017)",
    "src": "https://ifandika.github.io/resources/ebook/ENG_Data Structures and Algorithms Made Easy, Data Structure and Algorithmic Puzzles (2017).pdf"
  },
  {
    "name": "ENG_Introduction to Algorithms 4th Edition (2022)",
    "src": "https://ifandika.github.io/resources/ebook/ENG_Introduction to Algorithms 4th Edition (2022).pdf"
  },
  {
    "name": "ENG_Java Concurrency in Practice (2006)",
    "src": "https://ifandika.github.io/resources/ebook/ENG_Java Concurrency in Practice (2006).pdf"
  },
  {
    "name": "ENG_Refactoring Improving the Design of Existing Code-2nd Edition-(2019)",
    "src": "https://ifandika.github.io/resources/ebook/ENG_Refactoring Improving the Design of Existing Code-2nd Edition-(2019).pdf"
  },
  {
    "name": "ENG_Thinking in Java (2006)",
    "src": "https://ifandika.github.io/resources/ebook/ENG_Thinking in Java (2006).pdf"
  }
];

function get_all_ebook() {
  const page_ebook = document.querySelector('.page-ebook');
  const new_element = document.createElement('ol');
  new_element.classList = 'list-ebook';
  page_ebook.appendChild(new_element);

  var ebook_arr = [];
  ebook_arr.push(...data_ebook);

  ebook_arr.forEach(book => {
    const tag_ol = document.querySelector('.list-ebook');
    const new_li = document.createElement('li');
    new_li.innerHTML = `
      <a href="${book.src}">${book.name}</a>
    `;
    tag_ol.appendChild(new_li);
  });
}

get_all_ebook();
