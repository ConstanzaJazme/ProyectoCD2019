import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
    { path: 'tab2/:consulta', loadChildren: './tabs/tab2.module#Tab2PageModule' },
    { path: 'tab3/:title/:id/:userId/:completed', loadChildren: './tabs/tab3.module#Tab3PageModule' }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
