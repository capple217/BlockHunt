;/* 
    8x8 Grid Boolean
*/

let array : boolean[][] = new Array(8)
                            .fill(false)
                            .map(() => new Array(8).fill(false));


for (let i = 0; i < 8; ++i) {
    console.log(array[i][0], array[i][1], array[i][2], array[i][3], array[i][4], array[i][5], array[i][6], array[i][7]);
}

/*
    Each block type is stored in a 3d vector with the corresponding dimension
*/

type Matrix = boolean[][];

let base_blocks : Matrix[] = [
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