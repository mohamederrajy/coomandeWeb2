import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

import { CommandeComponent } from './commande/commande.component';
import { CommandeitemsComponent } from './commandeitems/commandeitems.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import {NzToolTipModule} from 'ng-zorro-antd/tooltip';
import {NzGridModule} from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import {NzFormModule, NzFormTooltipIcon} from 'ng-zorro-antd/form';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {EditCommandComponent} from './edit-command/edit-command.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    CommandeComponent,
    EditCommandComponent,
    CommandeitemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule, BrowserAnimationsModule, IconsProviderModule, NzLayoutModule, NzMenuModule, NoopAnimationsModule,
    NzNoAnimationModule, ReactiveFormsModule, NzGridModule, NzToolTipModule, NzFormModule,NzDividerModule,NzStepsModule,NzCarouselModule,NzCardModule,NzInputModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
