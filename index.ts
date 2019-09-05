export default function resolveP<A> (value: A): Promise<A> {
  return Promise.resolve(value);
}
