export class Schedules {
    public id?: number
    public client!: string
    public date!: string
    public service!: string[]
    public hour!: string

    constructor(props: Schedules, id?: number) {
        Object.assign(this, props)
    }
}