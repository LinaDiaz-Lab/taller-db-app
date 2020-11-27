import { Schema } from 'inspector';

export interface Ventas {
    total: Number,
    idUser: Object,
    details: [
        {
            idProduct: Object,
            productName: String,
            price: Number,
            amount: Number
        }
    ]
}
