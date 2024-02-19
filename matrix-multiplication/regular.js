// This is a regular method
const sample = require('./sample');
const sampleMatrix = require('./sample_matrix.json');
const {numberWithCommas} = require("./utils");

// Matrix multiplication
function multiplyMatrices(matA, matB) {
    let numLoops = 0;
    let numLoopsOut = 0;
    // Check if the matrices are compatible for multiplication.
    if (matA[0].length !== matB.length) {
        return { result: null, numLoops: 0 };
    }

    // Initialize the resulting product matrix.
    const product = [];
    for (let i = 0; i < matA.length; i++) {
        product.push([]);
        for (let j = 0; j < matB[0].length; j++) {
            product[i].push(0);
            numLoopsOut++;
        }
    }

    // Calculate the dot product of each element in the resulting matrix.
    for (let i = 0; i < matA.length; i++) {
        for (let j = 0; j < matB[0].length; j++) {
            for (let k = 0; k < matA[0].length; k++) {
                product[i][j] += matA[i][k] * matB[k][j];
                numLoops++;
            }
        }
    }
    return { result: product, numLoops: numLoops + numLoopsOut };
}

(() => {
    // const timeTaken = [];
    // let i = 1;
    // for (const mat in sample) {
    //     if (i > 2) {
    //         break;
    //     }
    //     if (sample.hasOwnProperty(mat)) {
    //         const matrix = sample[mat];
    //         const startTime = performance.now();
    //         const r = multiplyMatrices(matrix.a, matrix.b);
    //         const endTime = performance.now();
    //         console.log('result: ', r.result);
    //         console.log(`matrixMultiplication of ${mat} took ${endTime - startTime} milliseconds with ${r.numLoops} loops \n`);
    //         timeTaken.push({ matrix: mat, time: endTime - startTime });
    //         i++;
    //     }
    // }
    // console.log('timeTaken: ', timeTaken);

    const matrix1 = sampleMatrix.a;
    const matrix2 = sampleMatrix.b;
    const startTime = performance.now();
    const r = multiplyMatrices(matrix1, matrix2);
    const endTime = performance.now();
    console.log(`matrix multiplication of ${matrix1.length} length took ${endTime - startTime} milliseconds with ${numberWithCommas(r.numLoops)} loops \n`);
})();