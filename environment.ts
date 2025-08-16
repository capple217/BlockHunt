
    // Define ANSI color codes for easier use
    const Colors = {
        Reset: "\x1b[0m",
        Bright: "\x1b[1m",
        Dim: "\x1b[2m",
        Underscore: "\x1b[4m",
        Blink: "\x1b[5m",
        Reverse: "\x1b[7m",
        Hidden: "\x1b[8m",

        FgBlack: "\x1b[30m",
        FgRed: "\x1b[31m",
        FgGreen: "\x1b[32m",
        FgYellow: "\x1b[33m",
        FgBlue: "\x1b[34m",
        FgMagenta: "\x1b[35m",
        FgCyan: "\x1b[36m",
        FgWhite: "\x1b[37m",

        BgBlack: "\x1b[40m",
        BgRed: "\x1b[41m",
        BgGreen: "\x1b[42m",
        BgYellow: "\x1b[43m",
        BgBlue: "\x1b[44m",
        BgMagenta: "\x1b[45m",
        BgCyan: "\x1b[46m",
        BgWhite: "\x1b[47m",
    };

type Matrix = boolean[][];

class Board {

    private array : boolean[][] = new Array(8)
                                .fill(false)
                                .map(() => new Array(8).fill(false));

    print() {
        console.log("\n");
        for (let i = 0; i < 8; ++i) {
            if (!this.array[i][0]) continue;
            console.log(Colors.BgBlue, this.array[i][0], this.array[i][1], this.array[i][2], this.array[i][3], this.array[i][4], this.array[i][5], this.array[i][6], this.array[i][7], Colors.Reset, '\n\n');
        }

        console.log('\n\n\n');
    };

    printBlock() {
        for (let j = 0; j < 3; ++j) {
        let block = this.base_blocks[Math.floor(Math.random() * (this.base_blocks.length -  1))];
        for (let i = 0; i < block.length; ++i) {
            console.log(block[i]) ;
        }
        console.log("\n---------------------------\n")
    }
    };


    private base_blocks : Matrix[] = [
        [   [true, true]    ],                                                      // 2 x 1 horizontal block
        [   [false, true, false], [true, true, true]  ],                            // upside-down T block
        [   [true]  ],                                                              // 1 x 1
        [   [true, true], [true, true]  ],                                          //  2 x 2
        [   [true, true, true], [true, true, true], [true, true, true]  ],          // 3 x 3
        [   [true, false, false], [true, true, false], [true, false, false] ],      // left facing T block
        [   [false, false, true], [false, true, true], [false, false, true]  ],     // right facing T block
        [   [true, true, true], [false, true, false]    ],                          // T block
        [   [true, true, true], [true, true, true]  ],                              // 2 x 3
        [   [true, true], [true, true], [true, true]  ],                            // 3 x 2
        [   [true, true, true, true]  ],                                            // 1 x 4
        [   [true], [true], [true], [true]  ],                                      // 4 x 1
        [   [true, true, true]  ],                                                  // 1 x 3
        [   [true], [true], [true]  ],                                              // 3 x 1
        [   [false, true, false], [false, true, false], [false, true, true]  ],     // L-shaped
        [   [false, true, false], [false, true, false], [true, true, false]  ],     // L-shaped y-axis flip
        [   [false, true, true], [false, true, false], [false, true, false]  ],     // L-shaped x-axis flip
        [   [true, true, false], [false, true, false], [false,  true, false]  ]     // L-shaped x & y axis flip
    ];
};


let b = new Board;
b.print();
b.printBlock();




/*
    // Example usage:
    console.log(Colors.FgRed + "This text is red." + Colors.Reset);
    console.log(Colors.BgGreen + "This has a green background." + Colors.Reset);
    console.log(Colors.FgCyan + Colors.Underscore + "Cyan and underlined." + Colors.Reset);
*/