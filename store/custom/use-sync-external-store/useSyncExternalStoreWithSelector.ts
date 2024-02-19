import React, { useDebugValue, useEffect, useMemo, useRef } from 'react';

export const useSyncExternalStoreWithSelector = <Snapshot, Selection>(
  subscribe: (callback: () => void) => () => void,
  getSnapshot: () => Snapshot,
  getServerSnapshot: void | null | (() => Snapshot),
  selector: (snapshot: Snapshot) => Selection,
  isEqual?: (a: Selection, b: Selection) => boolean,
): Selection => {
  // Use this to track the rendered snapshot.
  const instRef = useRef<// | {
  //     hasValue: true;
  //     value: Selection;
  //   }
  {
    hasValue: false;
    value: null;
  } | null>(null);
  let inst: { hasValue: true; value: Selection } | { hasValue: false; value: null };

  if (instRef.current === null) {
    inst = {
      hasValue: false,
      value: null,
    };

    // instRef.current는 inst를 지금부터 계속 참조하게 됨.
    // useEffect로 inst가 업데이트 됐을 때도 참조하기 때문에 항상 최신의 값을 가리키게 됨.
    instRef.current = inst;
  } else {
    // useSyncExternalStoreWithSelector가 다시 실행됐을 때는 여기 else문으로 들어옴.
    // inst는 instRef.current를 참조하게 됨.
    // 근데 이 때의 instRef.current는 아직 useEffect로 inst가 업데이트 되기 전의 값을 참조하고 있었으므로
    // 여기서 instRef.current는 이전 값을 가리키고 있음.
    // 그래서 inst에 최종적으로 이전 값이 담기게 되는 것이다.
    inst = instRef.current;
  }

  const [getSelection, getServerSelection] = useMemo(() => {
    // Track the memoized state using closure variables that are local to this
    // memoized instance of a getSnapshot function. Intentionally not using a
    // useRef hook, because that state would be shared across all concurrent
    // copies of the hook/component.
    let hasMemo = false;
    let memoizedSnapshot: any;
    let memoizedSelection: Selection;

    // memoizedSelector는 두 번째부터는 컴포넌트의 렌더링 이전에 수행됨.
    // nextSnapshot에 api.getState()로 호출한 값이 들어옴.
    // api.getState()로 바뀐 객체가 들어오겠지만, 이 때 아직 selector를 거친 상황이 아님.
    const memoizedSelector = (nextSnapshot: Snapshot) => {
      if (!hasMemo) {
        // The first time the hook is called, there is no memoized result.
        hasMemo = true;
        memoizedSnapshot = nextSnapshot;
        /**
         * ```ts
         * const { count } = customStore((state) => ({ count: state.count }));
         * ```
         * 에서 `(state) => ({ count: state.count })` 부분이 selector이다.
         */
        const nextSelection = selector(nextSnapshot);

        if (isEqual !== undefined) {
          // Even if the selector has changed, the currently rendered selection
          // may be equal to the new selection. We should attempt to reuse the
          // current value if possible, to preserve downstream memoizations.
          if (inst.hasValue) {
            const currentSelection = inst.value;

            if (isEqual(currentSelection, nextSelection)) {
              memoizedSelection = currentSelection;

              return currentSelection;
            }
          }
        }

        /**
         * selector 거친 후의 값
         * 여기서 말하는 selector는 store를 사용하는 곳에서의 selector임
         */
        memoizedSelection = nextSelection;

        return nextSelection;
      }

      // We may be able to reuse the previous invocation's result.
      /**
       * 이전에 selector 거치기 전의 api.getState() 값
       * 클로저로 가져옮.
       */
      const prevSnapshot: Snapshot = memoizedSnapshot;
      /**
       * 이전에 selector 거친 후의 값
       * 클로저로 가져옮.
       */
      const prevSelection: Selection = memoizedSelection;

      // api.getState()는 매번 객체 새로 할당해서 웬만하면 계속 다름
      // setState 호출 때 아래처럼 되기 때문.
      // state = ... Object.assign({}, state, nextState);
      if (Object.is(prevSnapshot, nextSnapshot)) {
        // The snapshot is the same as last time. Reuse the previous selection.
        return prevSelection;
      }

      /**
       * 각 컴포넌트 리렌더링 이전 단계에서 memoizedSelector를 먼저 실행함.
       * 왜냐하면 컴포넌트 외부 객체 상태가 달라져도 React에 주입된 것이 아니기 때문에 useSyncExternalStore이 먼저 실행되어야 하기 때문이다.
       * 그렇기 때문에 selector 자체는 리렌더링이 일어나지 않은 컴포넌트면 변하지 않음.
       */
      // The snapshot has changed, so we need to compute a new selection.
      const nextSelection = selector(nextSnapshot);

      // If a custom isEqual function is provided, use that to check if the data
      // has changed. If it hasn't, return the previous selection. That signals
      // to React that the selections are conceptually equal, and we can bail
      // out of rendering.
      if (isEqual !== undefined && isEqual(prevSelection, nextSelection)) {
        return prevSelection;
      }

      // 위의 조건들에서 못 빠져나가면 아예 새로운 값으로 리턴
      memoizedSnapshot = nextSnapshot;
      memoizedSelection = nextSelection;

      return nextSelection;
    };

    // Assigning this to a constant so that Flow knows it can't change.
    const maybeGetServerSnapshot = getServerSnapshot === undefined ? null : getServerSnapshot;

    /**
     * selector를 거친 다음의 값을 반환하는 함수
     */
    const getSnapshotWithSelector = () => memoizedSelector(getSnapshot());

    const getServerSnapshotWithSelector =
      maybeGetServerSnapshot === null ? undefined : () => memoizedSelector(maybeGetServerSnapshot());

    return [getSnapshotWithSelector, getServerSnapshotWithSelector];

    // ✅ getSnapshot은 api.getState로 고정이기 때문에 useMemo 재생성 유발 X
    // ✅ getServerSnapshot은 api.getInitialState로 고정이기 때문에 useMemo 재생성 유발 X
    // ✅ isEqual은 고정이기 때문에 useMemo 재생성 유발 X
    // 🚨 selector는 고정이 아니기 때문에 컴포넌트 리렌더링 발생했을 때 useMemo 재생성 유발 O
  }, [getSnapshot, getServerSnapshot, selector, isEqual]);

  const value = React.useSyncExternalStore(subscribe, getSelection, getServerSelection);

  useEffect(() => {
    inst.hasValue = true;
    inst.value = value;
  }, [value]);

  useDebugValue(value);

  return value;
};
