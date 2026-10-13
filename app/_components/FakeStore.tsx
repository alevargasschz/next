export default async function FakeStore() {
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json(),
  );
  return (
    <div>
          {products.map((product: { id: number; title: string }) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
}
