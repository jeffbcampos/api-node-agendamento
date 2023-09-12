export class Schedules {
    public id?: string
    public client!: string
    public date!: Date
    public service!: string[]
    public hour!: Date

    constructor(props: Schedules, id?: string) {
        Object.assign(this, props)
    }
}