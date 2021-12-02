function requisitarPagina(url) {
    let ajax = new XMLHttpRequest();
    /* Método ajax.open(), responsável por configurar a url requisitada*/
    ajax.open('GET', url)
    ajax.send()

    console.log(ajax.readyState)
}