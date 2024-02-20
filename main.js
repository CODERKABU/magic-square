localStorage.setItem("counter", 0);

        function takeChance(c1) {
            data = c1.value;

            chance = Number(localStorage.getItem("counter"));

            if (data == "_") {
                c1.value = ++chance;
                localStorage.setItem("counter", chance);
            }
            else {
                alert("illegal move!");
            }

            if (chance == 9) {
                checkWin();
            }
        }

        function checkWin() {
            c1 = document.getElementsByName("btn");



            cntr = 0;
            for (i = 0; i <= 2; i++) {
                cntr += Number(c1[i].value);
            }

            if (cntr != 15) {
                alert("sorry please try again!");
                return;
            }

            cntr = 0;
            for (i = 3; i <= 5; i++) {
                cntr += Number(c1[i].value);
            }

            if (cntr != 15) {
                alert("sorry please try again!");
                return;
            }

            cntr = 0;
            for (i = 6; i <= 8; i++) {
                cntr += Number(c1[i].value);
            }

            if (cntr != 15) {
                alert("sorry please try again!");
                return;
            }

            cntr = 0;
            for (i = 0; i <= 6; i += 3) {
                cntr += Number(c1[i].value);
            }

            if (cntr != 15) {
                alert("sorry please try again!");
                return;
            }

            cntr = 0;
            for (i = 1; i <= 7; i += 3) {
                cntr += Number(c1[i].value);
            }

            if (cntr != 15) {
                alert("sorry please try again!");
                return;
            }

            cntr = 0;
            for (i = 2; i <= 8; i += 3) {
                cntr += Number(c1[i].value);
            }

            if (cntr != 15) {
                alert("sorry please try again!");
                return;
            }

            cntr = 0;
            for (i = 0; i <= 8; i += 4) {
                cntr += Number(c1[i].value);
            }

            if (cntr != 15) {
                alert("sorry please try again!");
                return;
            }

            alert("YOU WON!")
        }