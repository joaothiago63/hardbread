import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: 'proposal',
    loadComponent: () => import ('./shared/components/proposal/proposal.component').then(x => x.ProposalComponent)
},
{
    path: 'company',
    loadComponent: () => import('./shared/components/company/company.component').then(x => x.CompanyComponent)
}];
