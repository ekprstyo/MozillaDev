let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];
        let removeLast = myArray.pop();
        let addTwo = myArray.push('Nina', 'Kaoru');
        let eachIndex = myArray.entries();
        let myString = eachIndex.join(" - ");


        for (let i = 0; i < myArray.length; i++) {
            let eachItem = myArray[i];
            let eachIndex = myArray.indexOf(eachItem);
            myArray = myArray[i].replace()
        }


        // myArray.forEach(myFunction);
        
        // function myFunction(item, index) {
        //     myString += item + " + "(" + index + "), ";
        // }

        const section = document.querySelector('section');

        let para1 = document.createElement('p');
        para1.textContent = myString;

        section.appendChild(para1);

        // not complete yet