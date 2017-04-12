// Type definitions for intl-messageformat 1.3
// Project: https://github.com/yahoo/intl-messageformat
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


export interface DateFormat {
    day: string;
    month: string;
    weekday: string;
    year: string;
}

export interface TimeFormat {
    hour: string;
    minute: string;
    second: string;
    timeZoneName: string;
}

export interface LocaleData {
    locale: string;
    parentLocale?: string;
    // https://github.com/eemeli/make-plural.js#precompiled-plurals
    pluralRuleFunction?(a: number | string, b?: boolean): string;
}

export default class IntlMessageFormat {
    constructor(message: string, locales: string | string[], formats?: any);
    resolvedOptions(): { locale: string };
    format(arg: any): string;
    static default: any;
    static defaultLocale: string;
    static formats: {
        date: {
            full: DateFormat;
            long: DateFormat;
            medium: DateFormat;
            short: DateFormat;
        };
        number: {
            currency: {
                style: string;
            };
            percent: {
                style: string;
            };
        };
        time: {
            full: TimeFormat;
            long: TimeFormat;
            medium: TimeFormat;
            short: TimeFormat;
        };
    };
    static addLocaleData(data: LocaleData): void;
}
