  // main.js
  // Responsável por inicializar a aplicação e gerenciar o carregamento das páginas (SPA simples)

  document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");
    const main = document.querySelector("main");

    async function carregarPagina(url) {
      try {
        const resposta = await fetch(url);
        const texto = await resposta.text();
        const conteudo = texto.match(/<main[^>]*>([\s\S]*)<\/main>/i)[1];
        main.innerHTML = conteudo;
        window.scrollTo({ top: 0, behavior: "smooth" });

        if (url.includes("cadastro.html")) {
          importarScript("js/form.js");
        }
      } catch (erro) {
        main.innerHTML = "<p>Erro ao carregar conteúdo. Tente novamente.</p>";
        console.error("Erro ao carregar página:", erro);
      }
    }

    function importarScript(src) {
      const script = document.createElement("script");
      script.src = src;
      script.defer = true;
      document.body.appendChild(script);
    }

    links.forEach(link => {
      link.addEventListener("click", evento => {
        evento.preventDefault();
        const url = link.getAttribute("href");
        carregarPagina(url);
        history.pushState(null, "", url);
      });
    });

    window.addEventListener("popstate", () => {
      carregarPagina(location.pathname.substring(1) || "index.html");
    });
  });
