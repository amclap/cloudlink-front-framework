import { Routes, RouterModule } from '@angular/router';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { ProductServiceComponent } from './product-service/product-service.component';
import { ProductCenterComponent } from './product-center.component';
const routes: Routes = [
    {
        path: '',
        component: ProductCenterComponent,
        children: [
            { path: 'productAdmin', component: ProductAdminComponent },
            { path: 'productService', component: ProductServiceComponent }
        ]

    }
];

export const ProductRoutes = RouterModule.forChild(routes);
