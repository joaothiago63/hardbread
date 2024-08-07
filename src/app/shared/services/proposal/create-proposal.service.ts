import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { inject } from '@angular/core';
import { ConfigProposal as Config } from '../../../configurations/ModalConfig';
import { ProposalComponent } from '../../forms/proposal/proposal.component';

@Injectable({
  providedIn: 'root'
})
export class CreateProposalService {

  readonly dialog = inject(MatDialog);

  openDialog(): void {
    this.dialog.open(ProposalComponent, Config);
  }
}
