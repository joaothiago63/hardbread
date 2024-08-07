import { Component, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Product } from '../company/company.component';
import { CreateProposalService } from '../../services/proposal/create-proposal.service';
import { DeleteProposalService } from '../../services/proposal/delete-proposal.service';

@Component({
  selector: 'app-proposal',
  standalone: true,
  imports: [CardModule, ButtonModule, TableModule, TagModule, IconFieldModule, InputTextModule, InputIconModule, MultiSelectModule, DropdownModule, HttpClientModule, CommonModule],
  templateUrl: './proposal.component.html',
  styleUrl: './proposal.component.scss'
})
export class ProposalComponent {

  readonly createProposalService = inject(CreateProposalService);

  readonly deleteProposalService = inject(DeleteProposalService)

  products!: Product[];

  createProposal(): void {
    this.createProposalService.openDialog();
  }

  delete(): void {
    this.deleteProposalService.openDialog()
  }

  ngOnInit() {
    this.products = [{
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    }]
  }
}
