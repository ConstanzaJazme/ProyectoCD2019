import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'work/:consulta/:name', loadChildren: './work/work.module#WorkPageModule' },
    { path: 'resp/:gender/:age/:error', loadChildren: './resp/resp.module#RespPageModule' },
    // { path: '**', component: PageNotFoundComponent }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
