function redireciona() {
    let nome = document.getElementById("nome").value;
        localStorage.setItem('nome' , nome)
}

// scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.texto, .form-value');
hiddenElements.forEach((el) => observer.observe(el));
