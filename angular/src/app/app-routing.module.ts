import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NextPageComponent } from './next-page/next-page.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'all',
    pathMatch:'full',
  },
  {
    path:'all',
    component:  HomePageComponent,
  },
  {

    path: 'Next',
    children: [
      {
        path: '1',
        component: NextPageComponent,
      },
      {
        path: '2',
        component: NextPageComponent,
      },
      {
        path: '3',
        component: NextPageComponent,
      },{
        path: '4',
        component: NextPageComponent,
      },{
        path: '5',
        component: NextPageComponent,
      },{
        path: '6',
        component: NextPageComponent,
      },
    ],
    component: NextPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
