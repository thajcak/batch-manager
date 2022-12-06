import { LightningElement } from 'lwc';

const columns = [
    { label: 'Name', fieldName: 'name' },
    { label: 'Frequency', fieldName: 'frequency', type: 'string' },
    { label: 'Last Run', fieldName: 'lastRun', type: 'string' },
    { label: 'Next Run', fieldName: 'nextRun', type: 'string' },
    // {
    //     type: 'action',
    //     typeAttributes: { rowActions: actions },
    // },
];

const data = [
    {
        name: 'Test batch',
        frequency: 'Continuous',
        lastRun: '2022-01-01T12:00:00Z',
        nextRun: '2022-01-01T13:00:00Z'
    }
]

export default class Dispatcher extends LightningElement {}