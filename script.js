// Ksiązki
const books = [
  // Komedia
    { title: "Dziennik Bridget Jones", author: "Helen Fielding", category: "Komedia" },
{ title: "Paragraf 22", author: "Joseph Heller", category: "Komedia" },
{ title: "Trup w każdej szafie", author: "Janet Evanovich", category: "Komedia" },
{ title: "Oskar i pani Róża", author: "Éric-Emmanuel Schmitt", category: "Komedia" },
{ title: "Miłość w czasach zarazy", author: "Gabriel García Márquez", category: "Komedia" },

  // Romans
{ title: "Duma i uprzedzenie", author: "Jane Austen", category: "Romans" },
{ title: "Ania z Zielonego Wzgórza", author: "Lucy Maud Montgomery", category: "Romans" },
{ title: "P.S. Kocham Cię", author: "Cecelia Ahern", category: "Romans" },
{ title: "Zanim się pojawiłeś", author: "Jojo Moyes", category: "Romans" },
{ title: "Romeo i Julia", author: "William Shakespeare", category: "Romans" },

  // Przygodowe
{ title: "W 80 dni dookoła świata", author: "Juliusz Verne", category: "Przygodowe" },
{ title: "Wyspa skarbów", author: "Robert Louis Stevenson", category: "Przygodowe" },
{ title: "Hobbit", author: "J.R.R. Tolkien", category: "Przygodowe" },
{ title: "Podróże Guliwera", author: "Jonathan Swift", category: "Przygodowe" },
{ title: "Piętnastoletni kapitan", author: "Juliusz Verne", category: "Przygodowe" },

  // Kryminał / Thriller
{ title: "Dziewczyna z pociągu", author: "Paula Hawkins", category: "Kryminał / Thriller" },
{ title: "Zaginiona dziewczyna", author: "Gillian Flynn", category: "Kryminał / Thriller" },
{ title: "Morderstwo w Orient Expressie", author: "Agatha Christie", category: "Kryminał / Thriller" },
{ title: "Zbrodnia i kara", author: "Fiodor Dostojewski", category: "Kryminał / Thriller" },
{ title: "Millennium", author: "Stieg Larsson", category: "Kryminał / Thriller" },

  // Edukacyjne
{ title: "Jak mniej myśleć", author: "Christel Petitcollin", category: "Edukacyjne" },
{ title: "Siła nawyku", author: "Charles Duhigg", category: "Edukacyjne" },
{ title: "Zrozumieć media", author: "Marshall McLuhan", category: "Edukacyjne" },
{ title: "Myśl jak Sherlock Holmes", author: "Maria Konnikova", category: "Edukacyjne" },
{ title: "Sztuka skutecznego uczenia się", author: "Peter Brown", category: "Edukacyjne" }
];
const tableBody = document.getElementById("book");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");

function renderBooks(list) {
    tableBody.innerHTML = "";
    list.forEach(book => {
    const row = document.createElement("tr");
    row.innerHTML = `
     <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.category}</td>
    `;
    tableBody.appendChild(row);
  });
}

function filterBooks() {
  const query = searchInput.value.toLowerCase();
  const category = categorySelect.value;
  const filtered = books.filter(book =>
    book.title.toLowerCase().includes(query) &&
    (category === "" || book.category === category)
  );
  renderBooks(filtered);
}

searchInput.addEventListener("input", filterBooks);
categorySelect.addEventListener("change", filterBooks);


renderBooks(books)


// Włącz/wyłącz dark mode
function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
} 