import Maintenance from "../../controllers/forms/Maintenance";

export default interface IMaintenanceRepository {
  register(maintenance: Maintenance): Promise<any>;
}