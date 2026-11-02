
/* ==========================================
   MENU COMPARTILHADO - SALÃO FÁCIL
   Cria o mesmo cabeçalho em todas as páginas.
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* MONTA O HTML DO MENU */
    const menuHTML = `
        <header class="site-header">

            <!-- LOGO -->
            <a class="menu-logo" href="landing.html#inicio">
                <span class="menu-logo-icon">✂</span>
                <span>Salão Fácil</span>
            </a>

            <!-- LINKS DE NAVEGAÇÃO -->
            <nav class="site-nav">

                <a href="landing.html#inicio">
                    Início
                </a>

                <a href="landing.html#como-funciona">
                    Como funciona
                </a>

                <a href="landing.html#beneficios">
                    Benefícios
                </a>

                <a href="index.html" class="menu-login">
                    Entrar
                </a>

            </nav>

        </header>
    `;

    /* INSERE O MENU NO COMEÇO DO BODY */
    document.body.insertAdjacentHTML("afterbegin", menuHTML);

});
