import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CodigoComponent } from "./componentes/codigo/codigo.component";


import { HomeComponent } from "./componentes/Home/Home.component";
import { NosotrosComponent } from "./componentes/nosotros/nosotros.component";
import { ServidorComponent } from "./componentes/servidor/servidor.component";
import { TecnologiasComponent } from "./componentes/tecnologias/tecnologias.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: '', component: TecnologiasComponent},
    {path: '', component: ServidorComponent},
    {path: '', component: NosotrosComponent},
    {path: '', component: CodigoComponent},
    {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);