'use client';

import { useRouter } from 'next/navigation';

interface Category {
  imageUrl: string;
  title: string;
  route: string;
}

interface DirectoryItemProps {
  category: Category;
}

const DirectoryItem: React.FC<DirectoryItemProps> = ({ category }) => {
  const { imageUrl, title, route } = category;
  const router = useRouter();

  const onNavigateHandler = () => {
    router.push(route);
  };

  return (
    <div
      className="group relative m-[0_7.5px_15px] flex h-[240px] min-w-[30%] flex-1 cursor-pointer items-center justify-center overflow-hidden border border-black first:mr-[7.5px] last:ml-[7.5px]"
      onClick={onNavigateHandler}
    >
      <div
        className="h-full w-full bg-cover bg-center transition-transform duration-[6000ms] ease-[cubic-bezier(0.25,0.45,0.45,0.95)] group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute flex h-[90px] flex-col items-center justify-center border border-black bg-white px-[25px] text-[#4a4a4a] opacity-70 group-hover:opacity-90">
        <h2 className="m-[0_6px_0] text-[22px] font-bold uppercase">{title}</h2>
        <p className="text-[16px] font-light">Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
