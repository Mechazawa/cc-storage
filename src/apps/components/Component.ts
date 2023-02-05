export interface WindowSize {
    width: number;
    height: number;
}

export default abstract class Component {
    redirect: Redirect;
    focus: boolean = false;

    constructor(redirect: Redirect) {
        this.redirect = redirect;
    }

    abstract run(): void;
}