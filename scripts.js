function mostrarmenu() {
  let menu = document.getElementById("menu");
  menu.classList.toggle("invisible-vertical-list-activa");
}

document
  .getElementById("blog-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const imageInput = document.getElementById("imageInput");
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    // Verifica si se seleccionó un archivo
    if (imageInput.files.length === 0) {
      // Corrige "lenth" por "length"
      alert("Debes seleccionar una imagen");
      return;
    }

    const file = imageInput.files[0];
    const imageUrl = URL.createObjectURL(file);

    // Crea el contenedor del blog
    const blogContainer = document.createElement("div");
    blogContainer.className = "blog";

    // Crea y configura la imagen
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "Imagen del Blog";

    // Crea y configura el título
    const blogTitle = document.createElement("h2");
    blogTitle.textContent = title;

    // Crea y configura la descripción
    const blogDescription = document.createElement("p");
    blogDescription.textContent = description;

    // Agrega los nodos al contenedor del blog
    blogContainer.appendChild(img);
    blogContainer.appendChild(blogTitle); // Usa blogTitle en lugar de title
    blogContainer.appendChild(blogDescription); // Usa blogDescription en lugar de description

    // Agrega el contenedor del blog al contenedor principal
    document.getElementById("blogscontainer").appendChild(blogContainer);

    // Resetea el formulario
    document.getElementById("blog-form").reset();
  });
