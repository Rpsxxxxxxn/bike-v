import MaintenanceForm from "../../controllers/forms/MaintenanceForm";
import MaintenanceEntity from "../entities/MaintenanceEntity";

export default interface IMaintenanceRepository {
  register(userId: number, form: MaintenanceForm): Promise<MaintenanceEntity>;
}