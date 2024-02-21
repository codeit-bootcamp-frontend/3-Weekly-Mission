export function deep<T>(objA: T, objB: T) {
  if (Object.is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  if (objA instanceof Map && objB instanceof Map) {
    if (objA.size !== objB.size) return false;

    for (const [key, value] of objA) {
      if (!objB.has(key) || !deep(value, objB.get(key))) {
        return false;
      }
    }

    return true;
  }

  const deepObjCompare = (a: T, b: T) => {
    if (typeof a === 'object' && a !== null && typeof b === 'object' && b !== null) {
      for (const key in a) {
        if (!deep(a[key], b[key])) return false;
      }
    }

    return true;
  };

  return deepObjCompare(objA, objB);
}
