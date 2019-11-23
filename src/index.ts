export const TradeableSchema: Object = {
    high: { type: Number },
    low: { type: Number },
    lastTradePrice: { type: Number },
    faceValue: { type: Number },
    openPrice: { type: Number },
    percentChange: { type: Number },
    previousClose: { type: Number },
    change: { type: Number },
    symbol: { type: String },
    tradeVolumeInLac: { type: Number },
    tradeVolumeInMillion: { type: Number },
    week52High: { type: Number },
    week52Low: { type: Number },
    exchange: { type: String },
};

export interface ITradeableSchema {
    high: { type: Number };
    low: { type: Number };
    lastTradePrice: { type: Number };
    faceValue: { type: Number };
    openPrice: { type: Number };
    percentChange: { type: Number };
    previousClose: { type: Number };
    change: { type: Number };
    symbol: { type: String };
    tradeVolumeInLac: { type: Number };
    tradeVolumeInMillion: { type: Number };
    week52High: { type: Number };
    week52Low: { type: Number };
    exchange: { type: String };
}

export const OrderSchema: Object = {
    variety: { type: String },
    tradingsymbol: { type: String },
    exchange: { type: String },
    transaction_type: { type: String },
    order_type: { type: String },
    quantity: { type: Number },
    product: { type: String },
    price: { type: Number },
    trigger_price: { type: Number },
    stoploss: { type: Number },
    squareoff: { type: Number },
    trailing_stoploss: { type: Number },
    disclosed_quantity: { type: Number },
    validity: { type: String },
    readonly: { type: Boolean },
    tag: { type: String },
};

export interface IOrderSchema {
    variety: { type: String },
    tradingsymbol: { type: String },
    exchange: { type: String },
    transaction_type: { type: String },
    order_type: { type: String },
    quantity: { type: Number },
    product: { type: String },
    price: { type: Number },
    trigger_price: { type: Number },
    stoploss: { type: Number },
    squareoff: { type: Number },
    trailing_stoploss: { type: Number },
    disclosed_quantity: { type: Number },
    validity: { type: String },
    readonly: { type: Boolean },
    tag: { type: String },
};

console.log(`${process.env.npm_package_name} Typescript boiler plate is working!
\u00A9 nordible https://nordible.com`);
