import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RouterOutlet } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-proposal',
  standalone: true,
  imports: [ReactiveFormsModule, InputMaskModule, InputNumberModule, InputTextareaModule, ButtonModule, DropdownModule, InputTextModule, RouterOutlet, MatDialogTitle],
  templateUrl: './proposal.component.html',
  styleUrl: './proposal.component.scss'
})
export class ProposalComponent {
  readonly dialogRef = inject(MatDialogRef<ProposalComponent>);

  cities: City[] | undefined;

  formGroup: FormGroup = new FormGroup({
    companyName: new FormControl('')
  })

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

interface City {
  name: string;
  code: string;
}
