import { Job } from '../models';
import { JobsService } from './jobs.service';

const job = (over: Partial<Job>): Job => ({
  id: 'x',
  title: 'Role',
  client: 'Client',
  location: 'Bangalore',
  type: 'Full-time',
  experience: '3+ yrs',
  level: 'Consultant',
  function: 'Banking Tech',
  postedAt: '2026-10-01',
  summary: '',
  responsibilities: [],
  requirements: [],
  ...over,
});

describe('JobsService.filter', () => {
  const jobs = [
    job({ id: 'pm', title: 'Flexcube Project Manager', level: 'Manager', isNew: true }),
    job({ id: 'ofsaa', title: 'OFSAA FCCM Consultant', location: 'Bangalore · Pune' }),
    job({ id: 'java', title: 'Java Developer', location: 'Dallas, TX', type: 'Contract', function: 'IT & Software', level: 'Developer' }),
  ];
  const ids = (f: Parameters<typeof JobsService.filter>[1]) => JobsService.filter(jobs, f).map((j) => j.id);

  it('returns everything with no filters', () => {
    expect(ids({})).toEqual(['pm', 'ofsaa', 'java']);
  });

  it('matches free text across title, client and location (case-insensitive)', () => {
    expect(ids({ query: 'ofsaa' })).toEqual(['ofsaa']);
    expect(ids({ query: 'dallas' })).toEqual(['java']);
  });

  it('applies quick chips: new, level, location', () => {
    expect(ids({ chip: 'new' })).toEqual(['pm']);
    expect(ids({ chip: 'Manager' })).toEqual(['pm']);
    expect(ids({ chip: 'Pune' })).toEqual(['ofsaa']);
  });

  it('combines facets with AND across groups and OR within a group', () => {
    expect(ids({ types: ['Contract'] })).toEqual(['java']);
    expect(ids({ locations: ['Pune', 'Dallas'] })).toEqual(['ofsaa', 'java']);
    expect(ids({ functions: ['Banking Tech'], locations: ['Pune'] })).toEqual(['ofsaa']);
  });
});
