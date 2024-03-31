var grid = [];
for (var j = 0; j < 9; j++) {
    grid[j] = null;
}

console.log(grid);

function check(i, player) {
    var div = document.getElementById("d" + i);
    var img = document.createElement("img");
    img.width = "200";

    if (player == "AI") {
        img.src = "146009.png";
        grid[i] = "O";
    } else {
        img.src = "X-20.png";
        grid[i] = "X";
    }

    div.appendChild(img);
}

function checkwin() {
    // Check rows
    if ((grid[0] == grid[1] && grid[1] == grid[2]) && (grid[0] === "X" || grid[0] === "O")) {
        return "ROW WIN";
    }
    if ((grid[3] == grid[4] && grid[4] == grid[5]) && (grid[3] == "X" || grid[3] == "O")) {
        return "ROW WIN";
    }
    if ((grid[6] == grid[7] && grid[7] == grid[8]) && (grid[6] == "X" || grid[6] == "O")) {
        return "ROW WIN";
    }

    // Check columns
    if ((grid[0] == grid[3] && grid[3] == grid[6]) && (grid[0] == "X" || grid[0] == "O")) {
        return "COL WIN";
    }
    if ((grid[1] == grid[4] && grid[4] == grid[7]) && (grid[1] == "X" || grid[1] == "O")) {
        return "COL WIN";
    }
    if ((grid[2] == grid[5] && grid[5] == grid[8]) && (grid[2] == "X" || grid[2] == "O")) {
        return "COL WIN";
    }

    // Check diagonals
    if ((grid[0] == grid[4] && grid[4] == grid[8]) && (grid[0] == "X" || grid[0] == "O")) {
        return "DIAG WIN";
    }
    if ((grid[6] == grid[4] && grid[4] == grid[2]) && (grid[6] == "X" || grid[6] == "O")) {
        return "DIAG WIN";
    }

    return "NO WIN";
}

function replay() {
    var empty = 0;
    for (var j = 0; j < 9; j++) {
        if (grid[j] == null) {
            empty += 1;
        }
    }

    var played = false;

    while (played === false && empty !== 0) {
        // Generate a random number
        var randomI = Math.floor(Math.random() * 9);

        // Check if that number slot is empty
        if (grid[randomI] == null) {
            // Fill in the slot if yes
            check(randomI, "AI");
            // And break the loop
            played = true;
        }
    }
}

function play(i) {
    var empty = 0;
    for (var j = 0; j < 9; j++) {
        if (grid[j] == null) {
            empty += 1;
        }
    }

    if (checkwin() == "NO WIN" && empty != 0) {
        if (grid[i] == null) {
            check(i, "PLAYER");
            console.log(grid);
            if (checkwin() != "NO WIN" || empty == 0) {
                alert("END OF GAME");
            }
            else {replay();
            }

        }
    } else {
        alert("END OF GAME");
    }
}
