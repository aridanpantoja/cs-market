import { Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { authGuard } from './services/auth.guard'
import { LoginComponent } from './pages/login/login.component'

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: '**', component: NotFoundComponent },
]
