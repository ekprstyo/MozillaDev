const buttonA = document.querySelector('#button_A');
        const headingA = document.querySelector('#heading_A');

        buttonA.onclick = function () {
            let name = prompt("What is your name?");
            alert("Hello " + name + ", nice to see you!");
            headingA.textContent = "Welcome " + name;
        }
        
        /* without variables */
        // buttonA.onclick = function() {
        //     alert('Hello ' + prompt('Name?') + ', nice to see you!');
        //     headingA.textContent = prompt('Name?');
        // }