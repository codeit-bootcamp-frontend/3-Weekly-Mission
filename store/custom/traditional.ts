import { useDebugValue } from 'react';

import { useSyncExternalStoreWithSelector } from './use-sync-external-store/useSyncExternalStoreWithSelector';
import { createStore, StateCreator, StoreApi } from './vanilla';

/**
 * 스토어 생성할 때 내부 객체(객체의 모든 프로퍼티) 바라보고 있는 클로저 getState의 반환 값을 추출
 * S에는 StoreApi<T>가 들어올 것이고, StoreApi<T>는 getState를 가지고 있음.
 */
type ExtractState<S> = S extends { getState: () => infer T } ? T : never;

/**
 * * StoreApi의 읽기 전용 버전
 * * StoreApi라면 'getState' | 'subscribe' 무조건 가지고 있을 수밖에 없음.
 */
type ReadonlyStoreApi<T> = Pick<StoreApi<T>, 'getState' | 'subscribe'>;

/**
 * selector 기본값 함수 지정: select 하지 않고 전부 그대로 반환
 */
const identity = <T>(arg: T): T => arg;

export function useStoreWithEqualityFn<S extends StoreApi<unknown>>(api: S): ExtractState<S>;

export function useStoreWithEqualityFn<S extends StoreApi<unknown>, U>(
  api: S,
  selector: (state: ExtractState<S>) => U,
  equalityFn?: (a: U, b: U) => boolean,
): U;

export function useStoreWithEqualityFn<TState, StateSlice>(
  api: StoreApi<TState>,
  selector: (state: TState) => StateSlice = identity as any,
  equalityFn?: (a: StateSlice, b: StateSlice) => boolean,
) {
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getInitialState,
    selector,
    equalityFn,
  );

  // react devtools에 커스텀 훅 이름 표시
  useDebugValue(slice);

  return slice;
}

export type UseBoundStoreWithEqualityFn<S extends ReadonlyStoreApi<unknown>> = {
  // getState 호출 값 전부 다 불러옴.
  (): ExtractState<S>;

  // equalityFn이 createWithEqualityFn 할 때 1차적으로 할당이 되고,
  // createWithEqualityFn 호출해서 반환된 UseBoundStoreWithEqualityFn에서 필요 시 오버라이딩으로 바꿀 수 있음.
  <U>(selector: (state: ExtractState<S>) => U, equalityFn?: (a: U, b: U) => boolean): U;
} & S;

/**
 * 스토어 생성할 때 defaultEqualityFn 지정 가능.
 */
type CreateWithEqualityFn = {
  <T>(
    initializer: StateCreator<T>,
    defaultEqualityFn?: <U>(a: U, b: U) => boolean,
  ): UseBoundStoreWithEqualityFn<StoreApi<T>>;
  <T>(): (
    initializer: StateCreator<T>,
    defaultEqualityFn?: <U>(a: U, b: U) => boolean,
  ) => UseBoundStoreWithEqualityFn<StoreApi<T>>;
};

const createWithEqualityFnImpl = <T>(
  createState: StateCreator<T>,
  defaultEqualityFn?: <U>(a: U, b: U) => boolean,
): UseBoundStoreWithEqualityFn<StoreApi<T>> => {
  // createStore에 createState 할당해서 내부에서 클로저 생성해두게 함.
  // 클로저 담고 있는 객체가 api
  const api = createStore(createState);

  // const useBoundStoreWithEqualityFn: any = (selector?: any, equalityFn = defaultEqualityFn) =>
  const useBoundStoreWithEqualityFn = (selector?: any, equalityFn = defaultEqualityFn) =>
    useStoreWithEqualityFn(api, selector, equalityFn);

  // useBoundStoreWithEqualityFn 함수 자체에 api 객체를 바인딩 해놓음
  Object.assign(useBoundStoreWithEqualityFn, api);

  return useBoundStoreWithEqualityFn as UseBoundStoreWithEqualityFn<StoreApi<T>>;
};

export const createWithEqualityFn = (<T>(
  createState: StateCreator<T> | undefined,
  defaultEqualityFn?: <U>(a: U, b: U) => boolean,
) =>
  createState
    ? createWithEqualityFnImpl(createState, defaultEqualityFn)
    : createWithEqualityFnImpl) as CreateWithEqualityFn;
