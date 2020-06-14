import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { TvSeriesDetailsComponent } from './pages/tv-series-details/tv-series-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MatPaginatorModule,
    MatSelectModule,
    MatCardModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    MovieDetailsComponent,
    TvSeriesDetailsComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
