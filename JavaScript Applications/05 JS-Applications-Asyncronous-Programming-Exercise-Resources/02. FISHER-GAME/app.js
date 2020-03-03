import {catches} from './fetch.js';

const elements = {
    //updateButton: () => document.querySelector("#catches > div > button.update"),
    //deleteButton: () => document.querySelector("#catches > div > button.delete"),
    catch:{
        angler: () => document.querySelector("#addForm > input.angler"),
        weight: () => document.querySelector("#addForm > input.weight"),
        species: () => document.querySelector("#addForm > input.species"),
        location: () => document.querySelector("#addForm > input.location"),
        bait: () => document.querySelector("#addForm > input.bait"),
        captureTime: () => document.querySelector("#addForm > input.captureTime")
    },
    loadButton: () => document.querySelector("body > aside > button"),
    addButton: () => document.querySelector("#addForm > button"),
    catchesOutput: () =>  document.querySelector('#catches'),
    exampleCatch: () => document.querySelector('div.catch')
};

function attachEvents() {
    elements.addButton().addEventListener('click', addCatch);
    elements.loadButton().addEventListener('click', loadCatches);

    function addCatch(){
        const angler = elements.catch.angler().value;
        const weight = elements.catch.weight().value;
        const species = elements.catch.species().value;
        const location = elements.catch.location().value;
        const bait = elements.catch.bait().value;
        const captureTime = elements.catch.captureTime().value;

        catches().post({angler, weight, species, location, bait, captureTime})
                .then((data) => {
                    console.log(data)
                })
                .catch(console.error)
    }

    function loadCatches(){
        catches().get()
                .then(allCatches => showAllCatches(allCatches))
                .catch(console.error)
    }

    function showAllCatches(allCatches){
        Object.keys(allCatches).forEach((id) => {
            const copy = elements.exampleCatch().cloneNode(true);
            copy.setAttribute('data-id', id);

            Object.keys(elements.catch)
                .forEach(key => {
                    copy.querySelector(`input.${key}`).value = allCatches[id][key];
                })
            elements.catchesOutput().appendChild(copy)
        });
        [...document.querySelectorAll('button.delete')].forEach((b) =>{
            b.addEventListener('click', removeCatch);
        });
        [...document.querySelectorAll('button.update')].forEach((b) =>{
            b.addEventListener('click', updateCatch);
        })
        elements.exampleCatch().remove();
    }
    function removeCatch(e){
            const id = e.currentTarget.parentNode.getAttribute('data-id');
            catches().del(id).then();
            this.parentNode.parentNode.removeChild(this.parentNode);
         
    }

    function updateCatch(e){
        const angler = this.parentNode.querySelector(".angler").value;
        const weight = this.parentNode.querySelector(".weight").value;
        const species = this.parentNode.querySelector(".species").value;
        const location = this.parentNode.querySelector(".location").value;
        const bait = this.parentNode.querySelector(".bait").value;
        const captureTime = this.parentNode.querySelector(".captureTime").value;

        const id = e.currentTarget.parentNode.getAttribute('data-id');
        catches().put(id,{angler, weight, species, location, bait, captureTime}).then();
     
}

}

attachEvents();

