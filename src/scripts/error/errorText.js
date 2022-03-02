class ErrorTextFetch extends Error {
    constructor(message) {
        super(message);
        this.name = '400';
    }
}

export default ErrorTextFetch;
