// Książki
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

  let displayedCount = 6; // ile książek aktualnie pokazujemy
  let currentList = books; // lista po filtrowaniu

  function renderBooks(list) {
    tableBody.innerHTML = "";
    const visibleBooks = list.slice(0, displayedCount);

    visibleBooks.forEach(book => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.category}</td>
      `;
      tableBody.appendChild(row);
    });

    // Dodaj lub usuń przycisk "Pokaż więcej"
    let loadMoreBtn = document.getElementById("loadMoreBtn");
    if (list.length > displayedCount) {
      if (!loadMoreBtn) {
        const btnWrapper = document.createElement("div");
        btnWrapper.classList.add("buttonActive");
        loadMoreBtn = document.createElement("button");
        loadMoreBtn.id = "loadMoreBtn";
        loadMoreBtn.textContent = "Pokaż więcej książek";
        loadMoreBtn.style.marginTop = "10px";
        loadMoreBtn.addEventListener("click", () => {
          displayedCount += 6;
          renderBooks(currentList);
        });
        tableBody.parentElement.appendChild(loadMoreBtn);
      }
    } else if (loadMoreBtn) {
      loadMoreBtn.remove();
    }
  }

  function filterBooks() {
    const query = searchInput.value.toLowerCase();
    const category = categorySelect.value;
    displayedCount = 6; // resetujemy licznik przy filtrowaniu

    currentList = books.filter(book =>
      book.title.toLowerCase().includes(query) &&
      (category === "" || book.category === category)
    );
    renderBooks(currentList);
  }

  searchInput.addEventListener("input", filterBooks);
  categorySelect.addEventListener("change", filterBooks);

  // Początkowe renderowanie
  renderBooks(books);


renderBooks(books)



// Losowanie 3 książek i umiesczenie ich w tablicy  na stronie głównej
function RandomBooks() {
  const tableElement = document.getElementById("randomBook");  // Element randomBook w tablicy index.html

  // Pomieszanie wszystkich książek, wylosowanie 3 książek z pomieszanej listy
  const randomizedBooks = books.sort( () => 0.5 - Math.random() );
  const threeRandBooks = randomizedBooks.slice(0, 3);

  // Dodanie wyżej wylosowanych książek do tabeli w index.html
  tableElement.innerHTML = "";

  threeRandBooks.forEach(randomBook => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${randomBook.title}</td>
        <td>${randomBook.author}</td>
        <td>${randomBook.category}</td>
      `;
      tableElement.appendChild(row);
      });
}

// Funkcja onload dla index.html - połączenie RandomBooks() oraz CheckDarkMode()
function indexOnLoad() {
  RandomBooks()
  CheckDarkMode()
}

// Funkcja onload dla sugestie.html - połączenie CheckDarkMode() oraz ZaladujSugestie()
function sugestieOnLoad() {
  CheckDarkMode()
  ZaladujSugestie()
}



// DarkMode

// Sprawdza czy DarkMode jest włączony
function CheckDarkMode() {
  if (localStorage.getItem("DarkMode") === "true") {
    document.body.classList.add("dark-mode");
  }
}

// Włącz/wyłącz dark mode
function toggleDarkMode() {
  var DarkModeOn = document.body.classList.toggle("dark-mode"); 

  localStorage.setItem("DarkMode", DarkModeOn ? "true" : "false");
}





// Formularz - sugestie.html
function ZaladujSugestie() {
  document.getElementById("formularzSugestie").addEventListener("submit", wyslijFormularz)
}

function wyslijFormularz(e) {
  e.preventDefault();

  // Pobranie danych z formularza
  const dane = {
    tytul: document.getElementById("tytul").value,
    autor: document.getElementById("autor").value,
    kat: document.querySelector('input[name="kat"]:checked')?.value || "",
    info: document.getElementById("info").value,
  }

  // Fetch
  fetch("http://localhost:3000/propozycje", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dane)
  })
  .then(response => response.json())
  .then(result => {
    document.getElementById("formularzSugestie").reset();
  })
  .catch(error => {
    if (error.name === "TypeError") {
      console.error("Błąd sieci:", error.message)

    }
    else {
      console.error("Błąd:", error.message)
    }

  alert("Błąd przy wysyłaniu!", error);

  })
}