export class Perfum {

    PerfumId:string = ""
    PerfumName:string = "";
    RecommendedSeason:string = "";
    Price:number = 0;
    PurchaseCount:number = 0;

    constructor(perfumId:string, perfumName:string, recommendedSeason:string, price:number, purchaseCount:number)
    {
        this.PerfumId = perfumId;
        this.PerfumName = perfumName;
        this.RecommendedSeason = recommendedSeason;
        this.Price = price;
        this.PurchaseCount = purchaseCount;
    }


}
