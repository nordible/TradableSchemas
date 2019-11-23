export interface IOrderSchema {
    variety: string;
    tradingsymbol: string;
    exchange: string;
    transaction_type: string;
    order_type: string;
    quantity: number;
    product: string;
    price: number;
    trigger_price: number;
    stoploss: number;
    squareoff: number;
    trailing_stoploss: number;
    disclosed_quantity: number;
    validity: string;
    readonly: boolean;
    tag: string;
};
