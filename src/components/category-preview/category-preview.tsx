import Link from 'next/link';

import type { CategoryItem } from '@/store/categories/category.slice';

import ProductCard from '../product-card/product-card.component';

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview = ({ title, products }: CategoryPreviewProps) => {
  return (
    <div className="mb-8 flex flex-col">
      <h2 className="mb-6 text-2xl">
        <Link href={`/shop/${title}`} className="hover:underline">
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="grid grid-cols-4 gap-5">
        {products.slice(0, 4).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
