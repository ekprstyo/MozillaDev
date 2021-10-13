let finalResult;
        let evenOddResult;

        // Add your code here
        let num1 = 12;
        let num2 = 12;
        let num3 = 10;
        let num4 = 8;

        let add = num1 + num2;
        let subtract = num3 - num4;

        finalResult = add * subtract;
        evenOddResult = finalResult % 2;
        // Don't edit the code below here !!

        const section = document.querySelector('section');

        let para1 = document.createElement('p');
        let finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${ finalResult }`;
        para1.textContent = `Is the finalResult 48 ? ${ finalResultCheck }`;
        let para2 = document.createElement('p');
        let evenOddResultCheck = evenOddResult === 0 ? "The final result is even!" : 'The final result is odd. Hrm.';
        para2.textContent = evenOddResultCheck;

        section.appendChild(para1);
        section.appendChild(para2);