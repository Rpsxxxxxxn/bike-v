export default class BikeEntity {
    id: string;
    name: string;
    type: string;
    color: string;
    brand: string;
    modelNo: string;
    purchaseDate: Date;
    constructor(id: string, name: string, type: string, color: string, brand: string, modelNo: string, purchaseDate: Date) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.color = color;
        this.brand = brand;
        this.modelNo = modelNo;
        this.purchaseDate = purchaseDate;
    }
}