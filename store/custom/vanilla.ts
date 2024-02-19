type SetStateInternal<T> = {
  _(partial: T | Partial<T> | { _(state: T): T | Partial<T> }['_'], replace?: boolean | undefined): void;
}['_'];

/**
 * 만들어진 store에서 꺼내 쓸 수 있는 api
 */
export interface StoreApi<T> {
  setState: SetStateInternal<T>;
  getState: () => T;
  getInitialState: () => T;
  subscribe: (listener: (state: T, prevState: T) => void) => () => void;
}

type Get<T, K, F> = K extends keyof T ? T[K] : F;

/**
 * 스토어 생성할 때 콜백 인자
 */
export type StateCreator<T, U = T> = (
  setState: Get<StoreApi<T>, 'setState', never>,
  getState: Get<StoreApi<T>, 'getState', never>,
  store: StoreApi<T>,
) => U;

type CreateStore = {
  <T>(initializer: StateCreator<T>): StoreApi<T>;

  <T>(): (initializer: StateCreator<T>) => StoreApi<T>;
};

type CreateStoreImpl = <T>(initializer: StateCreator<T>) => StoreApi<T>;

// const store = create((set, get) => ({ ... }));
// initializer 🟰 createState
// createState 🟰 (set, get) => ({ ... })
const createStoreImpl: CreateStoreImpl = (createState) => {
  type TState = ReturnType<typeof createState>;
  type Listener = (state: TState, prevState: TState) => void;

  let state: TState;
  const listeners: Set<Listener> = new Set();

  // TODO: Remove type assertion once https://github.com/microsoft/TypeScript/issues/37663 is resolved
  // https://github.com/microsoft/TypeScript/issues/37663#issuecomment-759728342
  const setState: StoreApi<TState>['setState'] = (partial, replace) => {
    const nextState = typeof partial === 'function' ? (partial as (state: TState) => TState)(state) : partial;

    if (!Object.is(nextState, state)) {
      const previousState = state;
      state =
        replace ?? (typeof nextState !== 'object' || nextState === null)
          ? (nextState as TState)
          : { ...state, ...nextState };

      listeners.forEach((l) => l(state, previousState));
    }
  };

  const getState: StoreApi<TState>['getState'] = () => state;

  const getInitialState: StoreApi<TState>['getInitialState'] = () => initialState;

  const subscribe: StoreApi<TState>['subscribe'] = (listener) => {
    listeners.add(listener);

    return () => listeners.delete(listener);
  };

  /**
   * store 바깥에서 사용할 수 있는 api
   */
  const api: StoreApi<TState> = { setState, getInitialState, getState, subscribe };

  /**
   *
   * @description
   * 이 로직으로 내부 state가 형성된다.
   *
   * ***
   *
   * ```ts
   * (set, get) => ({
   *     count: 0,
   *     text: '',
   *     increment: () => set((state) => ({ count: state.count + 1 })),
   *     decrement: () => set((state) => ({ count: state.count - 1 })),
   *     setText: (text) => set({ text }),
   *     getCount: () => get().count,
   *   })
   *
   * ```
   * 이 부분이 createState(🟰 StateCreator)이고, 실행 후의 객체가 state에 저장된다.
   * 또한 initialState에도 저장된다.
   *
   * ```ts
   * ({
   *     count: 0,
   *     text: '',
   *     increment: () => set((state) => ({ count: state.count + 1 })),
   *     decrement: () => set((state) => ({ count: state.count - 1 })),
   *     setText: (text) => set({ text }),
   *     getCount: () => get().count,
   *   })
   * ```
   *
   * state에 결국에는 createState(setState, getState, api)를 호출 후 위와 같은 객체 부분이 할당된다.
   *
   *
   *
   *
   */
  const initialState = (state = createState(setState, getState, api));

  return api;
};

export const createStore = ((createState) =>
  createState ? createStoreImpl(createState) : createStoreImpl) as CreateStore;
