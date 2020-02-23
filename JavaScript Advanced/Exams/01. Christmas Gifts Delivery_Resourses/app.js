function solution() {
    const giftList = document.querySelector("body > div > section:nth-child(2)");
    let addBtn = document.querySelector("body > div > section:nth-child(1) > div > button");
    addBtn.addEventListener('click', function(){
       let gift = document.querySelector("body > div > section:nth-child(1) > div > input[type=text]").value;
       const li = createLi(gift, true);
       if (giftList.children[1].childElementCount === 0) {
        giftList.children[1].appendChild(li);
      } else {
        for (let i = 0; i < giftList.children[1].childElementCount; i++) {
            const currentGift = giftList.children[1].getElementsByTagName("li")[i];

            if (li.innerHTML.localeCompare(currentGift.innerHTML) === -1) {
                giftList.children[1].insertBefore(li, currentGift);
                break;
            }
        }
    }

    document.getElementsByTagName("input")[0].value = ""; '';
    })
    function createLi(giftName, hasBtns){
        const li = document.createElement("li");
        li.classList.add("gift");
        li.innerHTML = giftName;

        if(hasBtns){
        const sendBtn = document.createElement("BUTTON");
        sendBtn.id = 'sendButton';
        sendBtn.innerHTML = 'Send';
        sendBtn.addEventListener('click',function(e){
            this.parentNode.parentNode.removeChild(this.parentNode);
            const li = createLi(giftName, false);
            const sent = document.querySelector("body > div > section:nth-child(3) > ul");
            sent.appendChild(li);
           
        })
        li.appendChild(sendBtn);

        const discardBtn = document.createElement("BUTTON");
        discardBtn.id = 'discardButton';
        discardBtn.innerHTML = 'Discard';
        discardBtn.addEventListener('click',function(e){
            this.parentNode.parentNode.removeChild(this.parentNode);
            const li = createLi(giftName, false);
            const discard = document.querySelector("body > div > section:nth-child(4) > ul");
            discard.appendChild(li);
        })
        li.appendChild(discardBtn);

        }
        return li
        
       
    }
}