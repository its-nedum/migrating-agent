class CountryNotSupportedError extends Error {
    constructor(country) {
        super(`Country ${country} is not supported`);
    }
}

class MissingParameterError extends Error {
    constructor(param) {
        super(`Missing parameter ${param}`);
    }
}

class UnableToResolveCountryError extends Error {
    constructor() {
        super("Unable to resolve country");
    }
}

module.exports = {
    CountryNotSupportedError,
    MissingParameterError,
    UnableToResolveCountryError,
};