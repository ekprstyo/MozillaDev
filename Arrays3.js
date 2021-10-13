let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];
        let removeLast = myArray.pop();
        myArray.push('Nina', 'Kaoru');
        let myString = '';

        for (let i = 0; i < myArray.length; i++) {            
            if (i === myArray.length - 1) {
                myString += myArray[i] + ` (${ i })` + '.'; 
            } else {
                myString += myArray[i] + ` (${ i })` + ' - ';
            }
        }

        const section = document.querySelector('section');

        let para1 = document.createElement('p');
        para1.textContent = myString;

        section.appendChild(para1);