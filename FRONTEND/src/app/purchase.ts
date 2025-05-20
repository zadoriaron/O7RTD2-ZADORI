export class Purchase {
    purchaseId:string = ""
    purchasedPerfum:string = ""
    purchaseDate:any = ""

    constructor(purchaseId:string, purchasedPerfum:string, purchaseDate:any)
    {
        this.purchaseId = purchaseId
        this.purchasedPerfum = purchasedPerfum
        this.purchaseDate = purchaseDate
    }
}
