interface List<T> extends Array<T> {
}
interface Type { }

declare module ng.platform.browser {
    function bootstrap(appComponentType: any): void;
}

declare module ng.core {
    var Output: Function;
    var Input: Function;

   class EventEmitter<T>{
        /**
         * Creates an instance of [EventEmitter], which depending on [isAsync],
         * delivers events synchronously or asynchronously.
         */
        constructor(isAsync?: boolean);
        emit(value: T): void;
        /**
         * @deprecated - use .emit(value) instead
         */
        next(value: any): void;
        subscribe(generatorOrNext?: any, error?: any, complete?: any): any;
    }


    function Component({
        selector,
        properties,
        hostListeners,
        injectables,
        lifecycle,
        changeDetection
    }: {
            selector: string,
            properties?: Object,
            hostListeners?: Object,
            injectables?: List<any>,
            lifecycle?: List<any>,
            changeDetection?: string
        });

    function View({
        templateUrl,
        template,
        directives,
        formatters,
        source,
        locale,
        device
    }: {
            templateUrl?: string,
            template?: string,
            directives?: List<Type>,
            formatters?: List<Type>,
            source?: List<any>,
            locale?: string,
            device?: string
        });
    function For();
    function If();
}