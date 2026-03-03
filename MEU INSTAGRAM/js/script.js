// CURTIR POST
function curtir(botao) {
    const likes = botao.nextElementSibling;
    let total = parseInt(likes.innerText);

    if (botao.innerText === "🤍") {
        botao.innerText = "❤️";
        likes.innerText = (total + 1) + " curtidas";
    } else {
        botao.innerText = "🤍";
        likes.innerText = (total - 1) + " curtidas";
    }
}

// COMENTÁRIO (APENAS SIMULAÇÃO)
function comentar() {
    alert("Função de comentários será implementada futuramente.");
}

// PUBLICAR NOVO POST
function publicarPost() {
    const texto = document.querySelector("textarea").value;

    if (texto === "") {
        alert("Digite algo!");
        return;
    }

    const feed = document.getElementById("feed");

    feed.innerHTML = `
        <div class="card post">
            <div class="post-header">
                <img src="img/loren.jpg">
                <div>
                    <strong>Loren Cambuy</strong>
                    <span>@lorencambuy</span>
                </div>
            </div>

            <p>${texto}</p>

            <div class="post-actions">
                <button onclick="curtir(this)">🤍</button>
                <span class="likes">0 curtidas</span>

                <button onclick="comentar()">💬</button>
                <span>0 comentários</span>
            </div>
        </div>
    ` + feed.innerHTML;

    document.querySelector("textarea").value = "";
}