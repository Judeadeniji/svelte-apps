declare module "utiliti-js" {
/**
 * Represents a store that holds the state and manages state updates.
 * @interface IStore
 * @template T - The type of state.
 * @template A - The type of action.
 */
interface IStore<T, A> {
    /**
     * Returns the current state of the store.
     *
     * @returns {T} The current state.
     */
    getState(): T;
    /**
     * Dispatches an action to update the state.
     *
     * @param {A} action - The action representing the state update.
     */
    dispatch(action: A): void;
    /**
     * Subscribes a listener function to be called on state changes.
     *
     * @param {function} listener - The listener function to be called on state changes.
     * @returns {function} A function to unsubscribe the listener.
     *
     * @throws {Error} If the listener is not a function.
     */
    subscribe(listener: Function): Function;
    /**
     * Replaces the current reducer function with a new one.
     *
     * @param {function} nextReducer - The new reducer function.
     */
    replaceReducer(nextReducer: (state: T, action: A) => T): void;
    /**
     * Returns the current reducer function.
     *
     * @returns {function} The current reducer function.
     */
    getReducer(): (state: T, action: A) => T;
}
/**
 * Represents a store that holds the state and manages state updates.
 * @class Store
 * @template T - The type of state.
 * @template A - The type of action.
 * @param {function} reducer - The reducer function for state updates.
 * @param {T} [initialState={}] - The initial state of the store.
 *
 * @throws {Error} If the reducer is not a function.
 * @returns {Object} The store object with various methods.
 */
 class Store<T, A> implements IStore<T, A> {
    private reducer;
    private state;
    private listeners;
    constructor(reducer: (state: T, action: A) => T, initialState?: T);
    /**
     * Returns the current state of the store.
     *
     * @returns {T} The current state.
     */
    getState(): T;
    /**
     * Dispatches an action to update the state.
     *
     * @param {A} action - The action representing the state update.
     */
    dispatch(action: A): void;
    /**
     * Subscribes a listener function to be called on state changes.
     *
     * @param {function} listener - The listener function to be called on state changes.
     * @returns {function} A function to unsubscribe the listener.
     *
     * @throws {Error} If the listener is not a function.
     */
    subscribe(listener: Function): Function;
    /**
     * Replaces the current reducer function with a new one.
     *
     * @param {function} nextReducer - The new reducer function.
     */
    replaceReducer(nextReducer: (state: T, action: A) => T): void;
    /**
     * Returns the current reducer function.
     *
     * @returns {function} The current reducer function.
     */
    getReducer(): (state: T, action: A) => T;
}
export { Store };
};
