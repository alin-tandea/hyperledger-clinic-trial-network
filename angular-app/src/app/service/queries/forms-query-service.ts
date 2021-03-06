import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { CustomForm } from '../../model/ro.utcluj.clinictrial.trial';
import { ResourceProvider } from '../../utils/resource-provider';
import { QueryService } from './query-service';
import { FormValue } from '../../model/ro.utcluj.clinictrial.trial';

// Can be injected into a constructor
@Injectable()
export class FormQueryService {
    constructor(
        private _queryService: QueryService<CustomForm>,
    ) {

    }

    public findCustomFormsByTrial(idTrial: string): Observable<CustomForm[]> {
        var trial = ResourceProvider.newTrialQueryResource(idTrial);
        return this._queryService.get("selectCustomFormsByTrial?trial=", trial);
    }
}
