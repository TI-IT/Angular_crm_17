import { Component } from '@angular/core';
import {AddSheetMaterialsComponent} from "./add-sheet-materials/add-sheet-materials.component";
import {GeneralService} from "../../../../../services/global/generalService/general.service";

@Component({
  selector: 'app-dialog-add-sheet-materials',
  standalone: true,
  imports: [
    AddSheetMaterialsComponent
  ],
  templateUrl: './dialog-add-sheet-materials.component.html',
  styleUrl: './dialog-add-sheet-materials.component.scss'
})
export class DialogAddSheetMaterialsComponent {
  showDialog = this.generalService.showModalDialog

  constructor(
    private generalService: GeneralService,
  ) {
  }

  closeDialogForm() {
    this.showDialog.update(value => value = false)
  }
}