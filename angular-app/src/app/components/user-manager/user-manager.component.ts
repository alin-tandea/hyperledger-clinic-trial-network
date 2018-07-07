import { Component, OnInit, Input } from '@angular/core';
import { TrialService } from '../../service/trial.service';
import { Trial } from '../../model/ro.utcluj.clinictrial.trial';
import { MatTableDataSource } from '@angular/material';
import { Researcher } from '../../model/ro.utcluj.clinictrial.base';
import { ResearcherService } from '../../service/researcher.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'user-manager',
    templateUrl: 'user-manager.component.html'
})
export class UserManagerComponent implements OnInit {

    @Input() idTrial;
    private trial: Trial;
    private usersDataSource: MatTableDataSource<Researcher>;
    private displayTable: boolean;
    private searchQuery = "";
    private allUsersDataSource: MatTableDataSource<Researcher>;
    navigationSubscription;

    constructor(
        private _trialService: TrialService,
        private _researcherService: ResearcherService,
        private _router: Router
    ) {
        this.navigationSubscription = this._router.events.subscribe((e: any) => {
            // If it is a NavigationEnd event re-initalise the component
            if (e instanceof NavigationEnd) {
                console.log("loading table data....")
                this._trialService.getAsset(this.idTrial).subscribe(
                    (res) => {
                        this.trial = res;
                        this.usersDataSource = new MatTableDataSource<Researcher>(this.trial.responsibles);
                        this.displayTable = true;
                    }
                )
            }
        });

    }

    ngOnInit() {
        this._trialService.getAsset(this.idTrial).subscribe(
            (res) => {
                this.trial = res;
                this.usersDataSource = new MatTableDataSource<Researcher>(this.trial.responsibles);
                this.displayTable = true;
            }
        )
    }

    search() {
        this._researcherService.getAll().subscribe(
            (res) => {
                if (this.searchQuery == "") {
                    this.allUsersDataSource = new MatTableDataSource<Researcher>(res);
                }
            }
        )
    }
}