import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent {
  readonly dialogRef: MatDialogRef<DeleteComponent> = inject(MatDialogRef<DeleteComponent>)
}
