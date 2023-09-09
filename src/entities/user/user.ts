export class User {
    public id?: number
    public name!: string
    public email!: string
    public password!: string

    constructor(props:User, id?: number) {
        Object.assign(this, props)
    }
}