const sampleMatrix = require("./sample_matrix.json");

function matrixMultiplication(matA, matB) {
    let result = [];
    const colB = matB[0].length;
    const rowA = matA.length;
    let numLoops = 0;

    for (let i = 0; i < rowA; i++) {
        if (!matA[i]) {
            break;
        }
        for (let c = 0; c < colB; c++) {
            let el = 0;
            for (let r = 0; r < rowA; r++) {
                numLoops++;
                if (matA[i] && matA[i][r] && matB[r] && matB[r][i]) {
                    el = el + matA[i][r] * matB[r][c];
                } else {
                    break;
                }
            }
            if (!result[i]) {
                result[i] = [];
            }
            if (!result[i][c]) {
                result[i][c] = 0;
            }
            result[i][c] = el;
        }
    }
    return { result, numLoops };
}

(() => {
    const matrix1 = sampleMatrix.a;
    const matrix2 = sampleMatrix.b;

    // const matrix1 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
    // const matrix2 = [ [9, 8, 7], [6, 5, 4], [3, 2, 1] ];

    const startTime = performance.now();
    const r = matrixMultiplication(matrix1, matrix2);
    const endTime = performance.now();
    // console.log('result: ', r.result);
    console.log(`matrix multiplication of ${matrix1.length} length took ${endTime - startTime} milliseconds with ${r.numLoops} loops \n`);
})();