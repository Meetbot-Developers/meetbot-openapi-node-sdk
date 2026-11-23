/** Preserve integer tokens that cannot be represented exactly by a number. */
export function parseJSON(text: string): unknown {
  return JSON.parse(text, (_key: string, value: unknown, context?: { source: string }) => {
    if (typeof value === 'number' && Number.isInteger(value) && !Number.isSafeInteger(value)) {
      if (!context?.source || !/^-?\d+$/.test(context.source)) {
        throw new SyntaxError('Unsafe integer response token');
      }
      return context.source;
    }
    return value;
  });
}

export function stringifyJSON(value: unknown): string {
  const encoded = JSON.stringify(value, (_key, item: unknown) => {
    if (typeof item === 'bigint') return item.toString();
    if (typeof item === 'number' && (!Number.isFinite(item) || (Number.isInteger(item) && !Number.isSafeInteger(item)))) {
      throw new TypeError('Use decimal strings for integer IDs outside Number.MAX_SAFE_INTEGER');
    }
    return item;
  });
  if (encoded === undefined) throw new TypeError('Request must be JSON serializable');
  return encoded;
}
