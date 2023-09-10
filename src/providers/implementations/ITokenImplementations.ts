export interface ITokenImplementations {
    createToken(id: string): Promise<string>;
}