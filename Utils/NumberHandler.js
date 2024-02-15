function divide(firstNum, secondNum) {
    console.log('firstNum:', firstNum);
    console.log('secondNum:', secondNum);
    return Math.round(firstNum / secondNum);
}

/**
 * SOLID
 * S: Single Responsibility (Đơn nhiệm)
 * O: Opened (to use) - Closed (to modify)
 * L: Livkos
 * I: Independency
 * D: ....
 */

module.exports = {
    /** exported name */divide: /** internal name */divide
}