const list = document.querySelector('ul');
        const searchInput = document.querySelector('input');
        const searchBtn = document.querySelector('button');

        list.innerHTML = '';
        let myHistory = [];

        searchBtn.onclick = function() {
            if (searchInput.value !== '') {
                myHistory.unshift(searchInput.value);
                list.innerHTML = '';

                for (let i = 0; i < myHistory.length; i++) {
                    const itemText = myHistory[i];
                    const listItem = document.createElement('li');
                    listItem.textContent = itemText;
                    list.appendChild(listItem);
                }

                if (myHistory.length >= 5) {
                    myHistory.pop();
                }

                searchInput.value = '';
                searchInput.focus();
            }          
        }