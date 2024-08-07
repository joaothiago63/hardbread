import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfigCompany as Config } from '../../../configurations/ModalConfig';
import { CompanyComponent } from '../../forms/company/company.component';


@Injectable({
  providedIn: 'root'
})
export class CreateCompanyService {

  readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(CompanyComponent, Config)
  }
}