const math = require('mathjs');
const tf = require('@tensorflow/tfjs');
const sampleMatrix = require("./sample_matrix.json");

function matrixMultiplicationUsingMathJS(matrixA, matrixB) {
    const matA = math.matrix(matrixA);
    const matB = math.matrix(matrixB);
    return math.multiply(matA, matB);
}

function matrixMultiplicationUsingTensorflowJS(matrixA, matrixB) {
    const matA = tf.tensor(matrixA);
    const matB = tf.tensor(matrixB);
    return tf.matMul(matA, matB);
}


(() => {
    const matrix1 = sampleMatrix.a;
    const matrix2 = sampleMatrix.b;
    const startTime = performance.now();
    // matrixMultiplicationUsingMathJS(matrix1, matrix2);
    matrixMultiplicationUsingTensorflowJS(matrix1, matrix2);
    const endTime = performance.now();
    console.log(`matrix multiplication of ${matrix1.length} length took ${endTime - startTime} milliseconds \n`);
})();