let quote = 'I dO nOT lIke gREen eGgs anD HAM';

        // Add your code here
        let fixedQuote = quote.charAt(0) + quote.substring(1).toLowerCase();
        fixedQuote = fixedQuote.replace("green eggs and ham", "Pork");
        let finalQuote = fixedQuote + '.';
        // Don't edit the code below here!

        const section = document.querySelector('section');

        let para1 = document.createElement('p');
        para1.textContent = fixedQuote;
        let para2 = document.createElement('p');
        para2.textContent = finalQuote;

        section.appendChild(para1);
        section.appendChild(para2);