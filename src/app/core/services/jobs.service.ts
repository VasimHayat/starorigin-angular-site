import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../http/api.service';
import { Job, JobFilters } from '../models';

/** Jobs API: GET /jobs, GET /jobs/:id. Applications are posted via LeadsService. */
@Injectable({ providedIn: 'root' })
export class JobsService {
  private readonly api = inject(ApiService);

  list(): Observable<Job[]> {
    return this.api.get<Job[]>('jobs', { cache: true });
  }

  getById(id: string): Observable<Job> {
    return this.api.get<Job>(`jobs/${encodeURIComponent(id)}`);
  }

  /**
   * Client-side filtering for the job board. Pure, so it can move server-side later:
   * send the same JobFilters as query params to GET /jobs and drop this call.
   */
  static filter(jobs: readonly Job[], f: Partial<JobFilters>): Job[] {
    const q = (f.query ?? '').trim().toLowerCase();
    return jobs.filter((j) => {
      const chip = f.chip ?? 'all';
      const chipOk =
        chip === 'all' || (chip === 'new' ? !!j.isNew : j.location.includes(chip) || j.level === chip || j.type === chip);
      const textOk = !q || `${j.title} ${j.client} ${j.location} ${j.level} ${j.function}`.toLowerCase().includes(q);
      const typeOk = !f.types?.length || f.types.includes(j.type);
      const locOk = !f.locations?.length || f.locations.some((l) => j.location.includes(l));
      const fnOk = !f.functions?.length || f.functions.includes(j.function);
      return chipOk && textOk && typeOk && locOk && fnOk;
    });
  }
}
