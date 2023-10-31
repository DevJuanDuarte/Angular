import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
<<<<<<< HEAD
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'about',
        component: AboutPageComponent
    },
    {
        path: 'contact',
        component: ContactPageComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
=======

const routes: Routes  =[
    {
        path: 'home',
        component: HomePageComponent
    },{
        path: 'about',
        component: AboutPageComponent
    },{
        path: '**',
        redirectTo: 'home'
    },
>>>>>>> 3ff48cfd4983938fb03cd55a70b099fea4ad6f71
]

@NgModule({
    imports: [
<<<<<<< HEAD
        RouterModule.forRoot( routes ),
=======
        RouterModule.forRoot ( routes ),
>>>>>>> 3ff48cfd4983938fb03cd55a70b099fea4ad6f71
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
