import * as orderService from './services/order-service.js';
import Order from './models/order.js';

const data = document.getElementById("orderInput").innerHTML.split("\n");

const order = new Order(data[0], Number(data[1]), Number(data[2]));

const netOrder = orderService.total(order);

console.log(`Pedido código ${order.code}`);
console.log(`Valor total: R$ ${netOrder.toFixed(2)}`);