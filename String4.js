let theorem = 'Pythagorean theorem';

        let a = 5;
        let b = 8;

        let myString = `Using ${ theorem }, we can work out that that if the two shortest sides of a right-angled triangle have lengths of ${ a } and ${ b }, the length of the hypotenuse is ${ Math.sqrt(a**2 + b**2) }.`;

        // Don't edit the codes below here!

        const section = document.querySelector('section');

        let para1 = document.createElement('p');
        para1.textContent = myString;

        section.appendChild(para1);