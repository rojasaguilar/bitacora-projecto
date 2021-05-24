import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutComponent } from "./componentes/about/about.component";
import { ContactComponent } from "./componentes/contact/contact.component";
import { HomeComponent } from "./componentes/Home/Home.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'acerca', component: AboutComponent},
    {path: 'contacto', component: ContactComponent},
    {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);