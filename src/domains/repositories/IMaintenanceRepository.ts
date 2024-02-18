import MaintenanceForm from "../../controllers/forms/MaintenanceForm";
import MaintenanceEntity from "../entities/MaintenanceEntity";

export default interface IMaintenanceRepository {
  get(id: number): Promise<MaintenanceEntity>;
  register(userId: number, form: MaintenanceForm): Promise<MaintenanceEntity>;
  update(id: number, form: MaintenanceForm): Promise<void>;
}