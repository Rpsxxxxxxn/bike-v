export default class BikeEntity {
    private id: string;
    private company: string;
    private name: string;
    private model: string;
    private oilChange: string;
    private oilFilter: string;
    private cc: string;
    private bodyLink: string;

    private constructor(
        id: string,
        company: string,
        name: string,
        model: string,
        oilChange: string,
        oilFilter: string,
        cc: string,
        bodyLink: string
    ) {
        this.id = id;
        this.company = company;
        this.name = name;
        this.model = model;
        this.oilChange = oilChange;
        this.oilFilter = oilFilter;
        this.cc = cc;
        this.bodyLink = bodyLink;
    }

    static create(
        id: string,
        company: string,
        name: string,
        model: string,
        oilChange: string,
        oilFilter: string,
        cc: string,
        bodyLink: string
    ) {
        return new BikeEntity(id, company, name, model, oilChange, oilFilter, cc, bodyLink);
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

    public getBodyLink() {
        return this.bodyLink;
    }
}
