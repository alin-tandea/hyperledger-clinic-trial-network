import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './material.module';
import { DataService } from './service/data.service';
import { IdProviderService } from './utils/id-provider.service';
import { ProtocolFileService } from './service/ProtocolFile.service';
import { Configuration } from './service/configuration';
import { NavbarComponent } from './navbar/navbar.component';
import { FilesQueryService } from './service/queries/files-query-service';
import { FormQueryService } from './service/queries/forms-query-service'
import { QueryService } from './service/queries/query-service'
import { CustomFormService } from './service/CustomForm.service'
import { TransactionService } from './service/transaction-service';
import { SystemService } from './service/system-service';
import { FormValueQueryService } from './service/queries/form-value-query-service'
import { AuthService } from './service/auth.service';
import { ResearcherService } from './service/researcher.service';
import { ComponentModule } from './components/component.module';
import { LoaderService } from './components/loader/loader.service';
import { HistorianService } from './service/historian.service';
import { ResearcherAuthGuard } from './service/auth-guards/researcher-auth.guard'
import { SponsorModule } from './sponsor/sponsor.module'
import { SponsorAuthGuard } from './service/auth-guards/sponsor-auth.guard';
import { AgentAuthGuard } from './service/auth-guards/agent-auth.guard';
import { HistoryTable } from './agent/table/history-table.component';
import { SupplierService } from './service/Supplier.service';
import { AgentService } from './service/Agent.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ComponentModule,
    SponsorModule,
  ],
  providers: [
    Configuration,
    DataService,
    IdProviderService,
    ProtocolFileService,
    FilesQueryService,
    QueryService,
    CustomFormService,
    FormQueryService,
    TransactionService,
    AuthService,
    FormValueQueryService,
    SystemService,
    ResearcherService,
    HistorianService,
    LoaderService,
    ResearcherAuthGuard,
    SponsorAuthGuard,
    AgentAuthGuard,
    SupplierService,
    AgentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
