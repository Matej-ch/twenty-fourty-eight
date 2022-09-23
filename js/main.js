document.addEventListener('DOMContentLoaded',() => {
    const gridDisplay = document.querySelector('.grid');

    const scoreDisplay = document.getElementById('js-score');

    const resultDisplay = document.getElementById('js-result');

    let width = 4;

    let squares = [];

    let score = 0;

    const lookupVariables = {
        '0' : {bg: 'black',text: 'white'},
        '2' : {bg: '#eee4da',text: '#756d64'},
        '4' : {bg: '#ede0c8',text: '#756d64'},
        '8' : {bg: '#f59563',text: 'white'},
        '16' : {bg: '#f59563',text: 'white'},
        '32' : {bg: '#f67c5f',text: 'white'},
        '64' : {bg: '#f65e3b',text: 'white'},
        '128' : {bg: '#edcf72',text: 'white'},
        '256' : {bg: '#edcc61',text: 'white'},
        '512' : {bg: '#eac651',text: 'white'},
        '1024' : {bg: '#f0c63c',text: 'white'},
        '2048' : {bg: '#edc22e',text: 'white'},
        '4096' : {bg: '#b784ab',text: 'white'},
        'tooHigh': {bg: '#aa60a6',text: 'white'},
    }

    function createBoard() {
        for (let i = 0; i < width * width ;i++) {
            let square = document.createElement('div');
            square.classList.add('cell')
            square.innerHTML = '0';
            gridDisplay.appendChild(square);
            squares.push(square);
        }
        generate();
        generate();
    }

    function generate() {
        let randomNumber = Math.floor(Math.random() * squares.length);
        if(squares[randomNumber].innerHTML === '0') {

            let square = squares[randomNumber];
            square.innerHTML = '2';
            square.style.cssText = `background-color: ${lookupVariables['2'].bg};color:  ${lookupVariables['2'].text};`;
            square.classList.add('cell-2');

            checkForLose();
        } else {
            generate();
        }
    }

    //move right
    function moveRight() {
        for (let i= 0; i < width * width ;i++) {
            if(i % 4 === 0) {
                let totalOne = squares[i].innerHTML;
                let totalTwo = squares[i+1].innerHTML;
                let totalThree = squares[i+2].innerHTML;
                let totalFour = squares[i+3].innerHTML;
                let row = [parseInt(totalOne),parseInt(totalTwo),parseInt(totalThree),parseInt(totalFour)];

                let filteredRow = row.filter(num => num);
                let missing = 4 - filteredRow.length;
                let zeros = Array(missing).fill(0);
                let newRow = zeros.concat(filteredRow);

                squares[i].innerHTML = `${newRow[0]}`;
                squares[i+1].innerHTML = `${newRow[1]}`;
                squares[i+2].innerHTML = `${newRow[2]}`;
                squares[i+3].innerHTML = `${newRow[3]}`;

                if(lookupVariables[newRow[0]]) {
                    squares[i].style.cssText = `background-color: ${lookupVariables[newRow[0]].bg};color:  ${lookupVariables[newRow[0]].text};`;
                }

                if(lookupVariables[newRow[1]]) {
                    squares[i+1].style.cssText = `background-color: ${lookupVariables[newRow[1]].bg};color:  ${lookupVariables[newRow[1]].text};`;
                }

                if(lookupVariables[newRow[2]]) {
                    squares[i+2].style.cssText = `background-color: ${lookupVariables[newRow[2]].bg};color:  ${lookupVariables[newRow[2]].text};`;
                }

                if(lookupVariables[newRow[3]]) {
                    squares[i+3].style.cssText = `background-color: ${lookupVariables[newRow[3]].bg};color:  ${lookupVariables[newRow[3]].text};`;
                }
            }
        }
    }

    createBoard();
    moveRight();

    //move left
    function moveLeft() {
        for (let i= 0; i < width * width ;i++) {
            if(i % 4 === 0) {
                let totalOne = squares[i].innerHTML;
                let totalTwo = squares[i+1].innerHTML;
                let totalThree = squares[i+2].innerHTML;
                let totalFour = squares[i+3].innerHTML;
                let row = [parseInt(totalOne),parseInt(totalTwo),parseInt(totalThree),parseInt(totalFour)];

                let filteredRow = row.filter(num => num);
                let missing = 4 - filteredRow.length;
                let zeros = Array(missing).fill(0);
                let newRow = filteredRow.concat(zeros);

                squares[i].innerHTML = `${newRow[0]}`;
                squares[i+1].innerHTML = `${newRow[1]}`;
                squares[i+2].innerHTML = `${newRow[2]}`;
                squares[i+3].innerHTML = `${newRow[3]}`;

                if(lookupVariables[newRow[0]]) {
                    squares[i].style.cssText = `background-color: ${lookupVariables[newRow[0]].bg};color:  ${lookupVariables[newRow[0]].text};`;
                }

                if(lookupVariables[newRow[1]]) {
                    squares[i+1].style.cssText = `background-color: ${lookupVariables[newRow[1]].bg};color:  ${lookupVariables[newRow[1]].text};`;
                }

                if(lookupVariables[newRow[2]]) {
                    squares[i+2].style.cssText = `background-color: ${lookupVariables[newRow[2]].bg};color:  ${lookupVariables[newRow[2]].text};`;
                }

                if(lookupVariables[newRow[3]]) {
                    squares[i+3].style.cssText = `background-color: ${lookupVariables[newRow[3]].bg};color:  ${lookupVariables[newRow[3]].text};`;
                }
            }
        }
    }

    function moveDown() {
        for (let i =0; i<4;i++) {
            let totalOne = squares[i].innerHTML;
            let totalTwo = squares[i+width].innerHTML;
            let totalThree = squares[i+(width*2)].innerHTML;
            let totalFour = squares[i+(width*3)].innerHTML;

            let column = [parseInt(totalOne),parseInt(totalTwo),parseInt(totalThree),parseInt(totalFour)];

            let filteredColumn = column.filter(num => num);
            let missing = 4 - filteredColumn.length;
            let zeros = Array(missing).fill(0);
            let newColumn = zeros.concat(filteredColumn);

            squares[i].innerHTML = `${newColumn[0]}`;
            squares[i+width].innerHTML = `${newColumn[1]}`;
            squares[i+(width*2)].innerHTML = `${newColumn[2]}`;
            squares[i+(width*3)].innerHTML = `${newColumn[3]}`;

            if(lookupVariables[newColumn[0]]) {
                squares[i].style.cssText = `background-color: ${lookupVariables[newColumn[0]].bg};color:  ${lookupVariables[newColumn[0]].text};`;
            }

            if(lookupVariables[newColumn[1]]) {
                squares[i+width].style.cssText = `background-color: ${lookupVariables[newColumn[1]].bg};color:  ${lookupVariables[newColumn[1]].text};`;
            }

            if(lookupVariables[newColumn[2]]) {
                squares[i+(width*2)].style.cssText = `background-color: ${lookupVariables[newColumn[2]].bg};color:  ${lookupVariables[newColumn[2]].text};`;
            }

            if(lookupVariables[newColumn[3]]) {
                squares[i+(width*3)].style.cssText = `background-color: ${lookupVariables[newColumn[3]].bg};color:  ${lookupVariables[newColumn[3]].text};`;
            }
        }
    }

    function moveUp() {
        for (let i =0; i<4;i++) {
            let totalOne = squares[i].innerHTML;
            let totalTwo = squares[i+width].innerHTML;
            let totalThree = squares[i+(width*2)].innerHTML;
            let totalFour = squares[i+(width*3)].innerHTML;

            let column = [parseInt(totalOne),parseInt(totalTwo),parseInt(totalThree),parseInt(totalFour)];

            let filteredColumn = column.filter(num => num);
            let missing = 4 - filteredColumn.length;
            let zeros = Array(missing).fill(0);
            let newColumn = filteredColumn.concat(zeros);

            squares[i].innerHTML = `${newColumn[0]}`;
            squares[i+width].innerHTML = `${newColumn[1]}`;
            squares[i+(width*2)].innerHTML = `${newColumn[2]}`;
            squares[i+(width*3)].innerHTML = `${newColumn[3]}`;

            if(lookupVariables[newColumn[0]]) {
                squares[i].style.cssText = `background-color: ${lookupVariables[newColumn[0]].bg};color:  ${lookupVariables[newColumn[0]].text};`;
            }

            if(lookupVariables[newColumn[1]]) {
                squares[i+width].style.cssText = `background-color: ${lookupVariables[newColumn[1]].bg};color:  ${lookupVariables[newColumn[1]].text};`;
            }

            if(lookupVariables[newColumn[2]]) {
                squares[i+(width*2)].style.cssText = `background-color: ${lookupVariables[newColumn[2]].bg};color:  ${lookupVariables[newColumn[2]].text};`;
            }

            if(lookupVariables[newColumn[3]]) {
                squares[i+(width*3)].style.cssText = `background-color: ${lookupVariables[newColumn[3]].bg};color:  ${lookupVariables[newColumn[3]].text};`;
            }
        }
    }

    function combineRow() {
        for (let i = 0; i < 15;i++) {
            if(squares[i].innerHTML === squares[i+1].innerHTML) {
                let combineTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i+1].innerHTML);
                squares[i].innerHTML = combineTotal;
                squares[i+1].innerHTML = 0;
                score += combineTotal;
                scoreDisplay.innerHTML = score;
            }
        }
        checkForWin();
    }

    function combineColumn() {
        for (let i = 0; i < 12;i++) {
            if(squares[i].innerHTML === squares[i+width].innerHTML) {
                let combineTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i+width].innerHTML);
                squares[i].innerHTML = combineTotal;
                squares[i+width].innerHTML = 0;
                score += combineTotal;
                scoreDisplay.innerHTML = score;
            }
        }
        checkForWin();
    }


    function control(e) {
        if(e.code === 'ArrowRight' || e.code === 'KeyD') {
            keyRight();
        }
        if(e.code === 'ArrowLeft' || e.code === 'KeyA') {
            keyLeft();
        }
        if(e.code === 'ArrowUp' || e.code === 'KeyW') {
            keyUp();
        }
        if(e.code === 'ArrowDown' || e.code === 'KeyS') {
            keyDown();
        }
    }

    document.addEventListener('keyup',control);

    document.addEventListener('click',(e) => {
        if(e.target.id === 'left') {keyLeft();}
        if(e.target.id === 'top') {keyUp();}
        if(e.target.id === 'down') { keyDown();}
        if(e.target.id === 'right') {keyRight();}
    });

    function keyRight() {
        moveRight();
        combineRow();
        moveRight();
        generate();
    }

    function keyLeft() {
        moveLeft();
        combineRow();
        moveLeft();
        generate();
    }

    function keyUp() {
        moveUp();
        combineColumn();
        moveUp();
        generate();
    }

    function keyDown() {
        moveDown();
        combineColumn();
        moveDown();
        generate();
    }

    //check win

    function checkForWin() {
        for (let i = 0; i < squares.length;i++) {
            if(squares[i].innerHTML === '4096') {
                resultDisplay.innerHTML = '🏆 🏆 🏆 You win 🏆 🏆 🏆';
                resultDisplay.classList.add('won');
                resultDisplay.classList.remove('lost');
                document.removeEventListener('keyup',control);
            }
        }
    }

    function checkForLose() {
        let zeros = 0;
        for (let i = 0; i < squares.length;i++) {
            if(squares[i].innerHTML === '0') {
                zeros++;
            }
        }
        if(zeros === 0) {
            resultDisplay.innerHTML = '❌ ❌ ❌ You loose ❌ ❌ ❌';
            resultDisplay.classList.add('lost');
            resultDisplay.classList.remove('won');
            document.removeEventListener('keyup',control);
        }
    }

})