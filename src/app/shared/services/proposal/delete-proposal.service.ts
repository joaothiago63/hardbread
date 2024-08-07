import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfigConfirmDelete } from '../../../configurations/ModalConfig';
import { DeleteComponent } from '../../confirm-dialog/proposal/delete/delete.component';

@Injectable({
  providedIn: 'root',
})
export class DeleteProposalService {

  readonly dialog = inject(MatDialog)

  openDialog() {
    this.dialog.open(DeleteComponent, ConfigConfirmDelete);
  }
}
