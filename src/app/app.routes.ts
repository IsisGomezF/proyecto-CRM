import { Routes } from '@angular/router';
import { PATH } from './core/enum/path.enum';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { OportunitiesComponent } from './pages/oportunities/oportunities.component';
import { HomeComponent } from './pages/home/home.component';
import { PATHCUSTOMERS } from './core/enum/customers.path.enum';
import { CreatClientComponent } from './customers/creat-client/creat-client.component';
import { UpDateCustomerComponent } from './customers/up-date-customer/up-date-customer.component';

export const routes: Routes = [
  {
    path: PATH.HOME,
    title: 'Inicio',
    children: [
      {
        path: PATH.HOME,
        title: 'Inicio',
        component: HomeComponent,
      },
      {
        path: PATH.ANALYTICS,
        title: 'Analisis',
        component: AnalyticsComponent,
      },
      {
        path: PATH.CUSTOMERS,
        title: 'Clientes',
        component: CustomersComponent,
        children: [
          {
            path: PATHCUSTOMERS.CREATECUSTOMER,
            title: 'Crear Clientes',
            component: CreatClientComponent,
          },
          {
            path: PATHCUSTOMERS.UPDATECUSTOMER,
            title: 'Actualizar Clientes',
            component: UpDateCustomerComponent,
          },
        ],
      },
      {
        path: PATH.OPORTUNITIES,
        title: 'Oportunidades',
        component: OportunitiesComponent,
      },
    ],
  },
];
