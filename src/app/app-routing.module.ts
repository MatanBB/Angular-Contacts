import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BitcoinChartComponent } from './views/bitcoin-chart/bitcoin-chart.component';
import { ContactDetailsComponent } from './views/contact-details/contact-details.component';
import { ContactEditComponent } from './views/contact-edit/contact-edit.component';
import { ContactIndexComponent } from './views/contact-index/contact-index.component';
import { HomePageComponent } from './views/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'contacts/:id',
    component: ContactDetailsComponent,
    // resolve: {contact: ContactResolver},
    // canActivate: [AuthGuard],
  },
  { path: 'home', component: HomePageComponent},
  { path: 'bitcoin', component: BitcoinChartComponent },
  {
    path: '', component: ContactIndexComponent, children: [
      { path: 'edit/:id', component: ContactEditComponent },
      { path: 'edit', component: ContactEditComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
