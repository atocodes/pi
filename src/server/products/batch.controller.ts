import {inventoryService} from "./product.service";


export async function getBatches(){
    return inventoryService.getAllBatches();
}