export class Perfum {

    perfumId:string = ""
    perfumName:string = "";
    recommendedSeason:string = "";
    price:number = 0;
    purchaseCount:number = 0;

    constructor(perfumId:string, perfumName:string, recommendedSeason:string, price:number, purchaseCount:number)
    {
        this.perfumId = perfumId;
        this.perfumName = perfumName;
        this.recommendedSeason = recommendedSeason;
        this.price = price;
        this.purchaseCount = purchaseCount;
    }


}
