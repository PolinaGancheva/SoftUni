(() => {
    renderMonkeyTemplate();

    async function renderMonkeyTemplate() {
        const source = await fetch('http://127.0.0.1:5500/07.%20JS-Applications-Templating-Exercise-Resources/03.%20Popular%20Monkeys/monkeys.hbs')
           .then(res => res.text());
           const template = Handlebars.compile(source);
            const context = { monkeys: monkeys };
            const monkeysHtml = template(context);
            document.getElementsByClassName('monkeys')[0]
                .innerHTML = monkeysHtml;
          
       }

})()

function loadInfo(button, info) {
    if (button.innerText === "INFO") {
        button.innerText = "LESS";
        info.style.display = "block";
    } else {
        button.innerText = "INFO";
        info.style.display = "none";
    }
}