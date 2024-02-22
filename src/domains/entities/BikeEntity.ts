export default class BikeEntity {
    private id: string;
    private company: string;
    private name: string;
    private model: string;
    private oilChange: string;
    private oilFilter: string;
    private cc: string;

    private constructor(
        id: string,
        company: string,
        name: string,
        model: string,
        oilChange: string,
        oilFilter: string,
        cc: string
    ) {
        this.id = id;
        this.company = company;
        this.name = name;
        this.model = model;
        this.oilChange = oilChange;
        this.oilFilter = oilFilter;
        this.cc = cc;
    }

    static create(
        id: string,
        company: string,
        name: string,
        model: string,
        oilChange: string,
        oilFilter: string,
        cc: string
    ) {
        return new BikeEntity(id, company, name, model, oilChange, oilFilter, cc);
    }

    public getId() {
        return this.id;
    }

    public getCompany() {
        return this.company;
    }

    public getName() {
        return this.name;
    }

    public getModel() {
        return this.model;
    }

    public getOilChange() {
        return this.oilChange;
    }

    public getOilFilter() {
        return this.oilFilter;
    }

    public getCc() {
        return this.cc;
    }
}
