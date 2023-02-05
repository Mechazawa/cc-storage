export interface WindowSize {
    width: number;
    height: number;
}

export default abstract class Fragment {
    redirect: Redirect;
    focus: boolean = false;

    constructor(window: Redirect) {
        this.redirect = window;
    }

    abstract run(): void;
}