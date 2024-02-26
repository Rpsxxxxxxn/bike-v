import BikeForm from "../../controllers/forms/BikeForm";
import BikeEntity from "../../domains/entities/BikeEntity";
import IBikeRepository from "../../domains/repositories/IBikeRepository";
import SQLiteHelper from "../../utils/SQLiteHelper";

export default class BikeRepositoryImpl implements IBikeRepository {
  private constructor() {}

  static create() {
    return new BikeRepositoryImpl();
  }

  public async get(): Promise<BikeEntity> {
    const db = SQLiteHelper.create();
    const bike: any = await db.get('SELECT * FROM bike ORDER BY bike.company ASC', []);
    return BikeEntity.create(bike.id, bike.company, bike.name, bike.model, bike.oil_change, bike.oil_filter, bike.cc, bike.body_link);
  }

  public async getAll(): Promise<BikeEntity[]> {
    const db = SQLiteHelper.create();
    const dataList: any = await db.all('SELECT * FROM bike ORDER BY bike.company ASC', []);
    return dataList.map((data: any) => BikeEntity.create(data.id, data.company, data.name, data.model, data.oil_change, data.oil_filter, data.cc, data.body_link));
  }

  public async getByCompanyAndName(company: string, name: string): Promise<BikeEntity> {
    const db = SQLiteHelper.create();
    const bike: any = await db.get('SELECT * FROM bike WHERE company = ? AND name = ?', [company, name]);
    return BikeEntity.create(bike.id, bike.company, bike.name, bike.model, bike.oil_change, bike.oil_filter, bike.cc, bike.body_link);
  }

  public async create(form: BikeForm): Promise<void> {
    const db = SQLiteHelper.create();
    await db.execute('INSERT INTO bike (company, name, model, oil_change, oil_filter, cc) VALUES (?, ?, ?, ?, ?, ?)', [form.company, form.name, form.model, form.oilChange, form.oilFilter, form.cc]);
  }

  public async update(form: BikeForm): Promise<void> {
    const db = SQLiteHelper.create();
    const data: any = await db.get('SELECT * FROM bike WHERE company = ? AND name = ?', [form.company, form.name]);
    if (data) {
      await db.execute('UPDATE bike SET model = ?, oil_change = ?, oil_filter = ?, cc = ? WHERE id = ?', [form.model, form.oilChange, form.oilFilter, form.cc, data.id]);
    }
  }

  public async delete(form: BikeForm): Promise<void> {
    const db = SQLiteHelper.create();
    const data: any = await db.get('SELECT * FROM bike WHERE company = ? AND name = ?', [form.company, form.name]);
    if (data) {
      await db.execute('DELETE FROM bike WHERE id = ?', [data.id]);
    }
  }
}