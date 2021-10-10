let myArray = ['Apple', ' Mellon', ' Grape.'];

        const section = document.querySelector('section');

        let para1 = document.createElement('p');
        para1.textContent = `Array: ${ myArray }`;

        section.appendChild(para1);