function calcShipping(sum, min, shipping) {
    let productSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная цена для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

   // Задание №2.1. Рассчитать доставку

    

   if (productSum == 0 || productSum >= freeShippingMinSum) {
    shippingSum = 0;
  }
    else{ 
    shippingSum = shippingPrice;
}
    console.log(shippingSum);
   
  //  Конец решения задания №2.1.

    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная цена для скидки
    let discountPart = discount; // величина скидки в процентах

    // Задание №2.2. Рассчитать скидку

    

    if (productSum >= discountMinSum) {
    discountPrice = discountPart * productSum/100}
    else {
    discountPrice = 0};
    
    console.log(discountPrice);
    //Конец решения задания №2.2.

    return discountPrice;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    //Задача №2.3. Рассчитать скидки и доставку в корзине

    let totalSum

    totalSum = productSum
    totalSum = productSum - discountSum

    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!

    totalSum = totalSum + shippingSum

    let freeShipping
    
    freeShipping = shippingSum == 0;
    
    
    // Конец решения задачи №2.3.

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
