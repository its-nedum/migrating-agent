/**
 * Improved phone number formattern if everything goes well
 * it will replace currently used phoneformat method
 */

const {
    CountryNotSupportedError,
    MissingParameterError,
    UnableToResolveCountryError
} = require("./errors");

const SUPPORTED_COUNTRIES = {
    US: 1,
    ZA: 27,
    CI: 225,
    GH: 233,
    NG: 234,
};


const isSupportedCountry = (phone) => {
    if(!phone || !phone.length){
        throw new MissingParameterError("phone");
    }
    const safePhone = phone.replace("+", "");

    if(safePhone.startsWith("0")){
        return false;
    }

    return Object.values(SUPPORTED_COUNTRIES).some((countryCode) => 
        safePhone.startsWith(countryCode.toString())
    );
};

const formatphonenumber = (phone, country) => {

    if(!country){
        if(!isSupportedCountry(phone)){
            throw new CountryNotSupportedError("Unsupported country");
        }
    }

    // remove unsafe characters
    const safephone = phone.replace(/[^0-9]/g, "");

    if (!safephone.length) {
        throw new Error("Invalid phone number");
    }

    if (safephone.length < 9) {
        throw new Error("Phone number to short");
    }

    switch (true) {
        // United States
        case safephone.startsWith(SUPPORTED_COUNTRIES.US.toString()) || country === SUPPORTED_COUNTRIES.US : {
            // add country code to phone number
            if (safephone.length === 10) {
                return {
                    original: phone,
                    countryCode: SUPPORTED_COUNTRIES.US,
                    formatted: `+${SUPPORTED_COUNTRIES.US.toString()}${safephone}`,
                };
            }

            // country code is already included in phone number
            if (safephone.length === 11 && safephone.startsWith("1")) {
                return {
                    original: phone,
                    countryCode: SUPPORTED_COUNTRIES.US,
                    formatted: safephone,
                };
            }

            throw new Error("Phone number too long");
        }

        // South Africa
        case safephone.startsWith(SUPPORTED_COUNTRIES.ZA.toString()) || country === SUPPORTED_COUNTRIES.ZA : {
            if (safephone.length > 12) {
                throw new Error("Phone number too long");
            }

            // add country code to phone number
            if (safephone.length === 9 && !safephone.startsWith("0")) {
                return {
                    original: phone,
                    countryCode: SUPPORTED_COUNTRIES.ZA,
                    formatted: `+${SUPPORTED_COUNTRIES.ZA.toString()}${safephone}`,
                };
            }

            // get the last 9 digits of the phone number
            const trimmedphone = safephone.substring(
                safephone.length - 9,
                safephone.length
            );

            // add country code to trimmed phone number
            return {
                original: phone,
                countryCode: SUPPORTED_COUNTRIES.ZA,
                formatted: `+${SUPPORTED_COUNTRIES.ZA.toString()}${trimmedphone}`,
            };
        }

        // Cote D'Ivoire
        case safephone.startsWith(SUPPORTED_COUNTRIES.CI.toString()) || country === SUPPORTED_COUNTRIES.CI : {
            // add country code to phone number
            if (safephone.length == 8) {
                return {
                    original: phone,
                    countryCode: SUPPORTED_COUNTRIES.CI,
                    formatted: `+${SUPPORTED_COUNTRIES.CI}${safephone}`,
                };
            }

            // get the last 8 digits of the phone number if country code is included
            if (safephone.length == 11 && safephone.startsWith("225")) {
                const trimmedphone = safephone.substring(
                    safephone.length - 9,
                    safephone.length
                );

                // add country code to trimmed phone number
                return {
                    original: phone,
                    countryCode: SUPPORTED_COUNTRIES.CI,
                    formatted: `+${SUPPORTED_COUNTRIES.CI.toString()}${trimmedphone}`,
                };
            }

            break;
        }

        // Ghana
        case safephone.startsWith(SUPPORTED_COUNTRIES.GH.toString()) || country === SUPPORTED_COUNTRIES.GH: {
            if (safephone.length > 12) {
                throw new Error("Phone number too long");
            }

            // add country code to phone number
            if (safephone.length == 9) {
                if (safephone.startsWith("2") || safephone.startsWith("5")) {
                    return {
                        original: phone,
                        countryCode: SUPPORTED_COUNTRIES.GH,
                        formatted: `+${SUPPORTED_COUNTRIES.GH.toString()}${safephone}`,
                    };
                }
            }

            // get the last 9 digits of the phone number
            const trimmedphone = safephone.substring(
                safephone.length - 9,
                safephone.length
            );

            // add country code to trimmed phone number
            return {
                original: phone,
                countryCode: SUPPORTED_COUNTRIES.GH,
                formatted: `+${SUPPORTED_COUNTRIES.GH.toString()}${trimmedphone}`,
            };
        }

        // Nigeria
        case safephone.startsWith(SUPPORTED_COUNTRIES.NG.toString()) || country === SUPPORTED_COUNTRIES.NG : {
            if (safephone.length > 14) {
                throw new Error("Phone number too long");
            }

            if (safephone.length == 10) {
                // append country code to phone number if it doesnt start with 0
                if (!safephone.startsWith("0")) {
                    return {
                        original: phone,
                        countryCode: SUPPORTED_COUNTRIES.NG,
                        formatted: `+${SUPPORTED_COUNTRIES.NG.toString()}${safephone}`,
                    };
                }
            }

            // get the last 10 digits of the phone number
            const trimmedphone = safephone.substring(
                safephone.length - 10,
                safephone.length
            );

            // add country code to trimmed phone number
            return {
                original: phone,
                countryCode: SUPPORTED_COUNTRIES.NG,
                formatted: `+${SUPPORTED_COUNTRIES.NG.toString()}${trimmedphone}`,
            };
        }
    }

    throw new UnableToResolveCountryError();
};

module.exports = formatphonenumber;