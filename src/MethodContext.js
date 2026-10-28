import { EventEmitter } from './EventEmitter';
export const obj = {
    count: 0,
    _clickHandler: null,
    subscribe() {
        this._clickHandler = () => {
            this.count += 1;
        };
        EventEmitter.on('click', this._clickHandler);
    },
    unsubscribe() {
        if (this._clickHandler) {
            EventEmitter.off('click', this._clickHandler);
        }
    },
};
export const obj1 = {
    first(...args) {
        this.second(...args.reverse());
    },
    second() {},
};
