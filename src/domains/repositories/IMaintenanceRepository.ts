import Maintenance from "../../controllers/forms/MaintenanceForm";
import MaintenanceEntity from "../entities/MaintenanceEntity";

export default interface IMaintenanceRepository {
  register(maintenance: Maintenance): Promise<MaintenanceEntity>;
}