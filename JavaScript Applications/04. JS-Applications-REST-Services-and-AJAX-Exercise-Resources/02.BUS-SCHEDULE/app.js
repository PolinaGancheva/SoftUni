function solve() {
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');
    let info = document.querySelector("#info > span");
    let currentId = 'depot';
    let currentName = '';
    function depart() {
        fetch(`https://judgetests.firebaseio.com/schedule/${currentId}.json`)
            .then(res => res.json())
            .then(data => {
                arriveBtn.disabled = false;
                departBtn.disabled = true;
                currentId = data.next;
                currentName = data.name;
                info.innerHTML = `Next stop ${currentName}`;
            })
            .catch((err) => {
                info.innerHTML = 'Error';
                arriveBtn.disabled = true;
                departBtn.disabled = true;
            })
    }

    function arrive() {
        departBtn.disabled = false;
        arriveBtn.disabled = true;
        info.innerHTML = `Arriving at ${currentName}`
    }

    return {
        depart,
        arrive
    };
}

let result = solve();