import { Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    MatGridListModule,
    InputMaskModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent {
  readonly dialogRef = inject(MatDialogRef<CompanyComponent>);

  cities: City[] | undefined;

  selectedCity: City | undefined;

  form: FormGroup | undefined;

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }
}

interface City {
  name: string;
  code: string;
}
