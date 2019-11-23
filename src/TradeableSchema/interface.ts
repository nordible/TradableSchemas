export interface ITradeableSchema {
    high: number;
    low: number;
    lastTradePrice: number;
    faceValue: number;
    openPrice: number;
    percentChange: number;
    previousClose: number;
    change: number;
    symbol: string;
    tradeVolumeInLac: number;
    tradeVolumeInMillion: number;
    week52High: number;
    week52Low: number;
    exchange: string;
}
