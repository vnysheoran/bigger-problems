const fs = require('fs');
const LJSON = require('ljson');
const path = require('path');
function generateRandomMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push([]);
        for (let j = 0; j < cols; j++) {
            matrix[i].push(Math.random());
        }
    }
    return matrix;
}

function generateDenseMatrix(rows, cols) {
    const matrix = [];
    let count = 1;
    for (let i = 0; i < rows; i++) {
        matrix.push([]);
        for (let j = 0; j < cols; j++) {
            matrix[i].push(count++);
        }
    }
    return matrix;
}

function generateBlockMatrix(rows, cols, blockSize) {
    const matrix = [];
    for (let i = 0; i < rows; i += blockSize) {
        matrix.push([]);
        for (let j = 0; j < cols; j += blockSize) {
            const block = generateRandomMatrix(blockSize, blockSize);
            matrix[i].push(...block);
        }
    }
    return matrix;
}




(() => {
    // const matrix1 = generateRandomMatrix(500, 500);
    // const matrix2 = generateRandomMatrix(500, 500);

    const matrix1 = generateDenseMatrix(1000, 1000);
    const matrix2 = generateDenseMatrix(1000, 1000);

    // const matrix1 = generateBlockMatrix(100, 100, 20);
    // const matrix2 = generateBlockMatrix(100, 100, 20);

    fs.writeFileSync(path.join(__dirname, 'sample_matrix.json'), JSON.stringify({ a: matrix1, b: matrix2 }, null, 2));
    // fs.writeFileSync(path.join(__dirname, 'sample_matrix.json'), LJSON.stringify({ a: matrix1, b: matrix2 }, null, 2));
    console.log('File written successfully!');
})();
