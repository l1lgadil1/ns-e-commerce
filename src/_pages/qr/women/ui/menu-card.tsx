import Image from 'next/image';

 interface IProps {
    href:string;
    title:string;
    description?:string;
    imageSrc?:string;
    iconSrc?:string;
}

export const MenuCard = ({ href, title, description, imageSrc, iconSrc }: IProps) => (
  <a
    href={href}
    className="group flex flex-col justify-between rounded-lg border border-transparent px-5 py-4 transition-all ease-in hover:opacity-50 border-gray-300 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800/30"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className='mb-3 flex justify-center items-center gap-3'>
      <h2 className="text-2xl font-semibold">
        {title}
      </h2>
      {iconSrc && <Image alt='icon' src={iconSrc} width={28} height={28} />}
    </div>
    <div className='flex justify-center'>
      {description && (
        <p className="m-0 max-w-[30ch]  text-sm opacity-50">
          {description}
        </p>
      )}
    </div>
    {imageSrc && <Image className='flex justify-center' alt='image' src={imageSrc} height={64} width={64} />}
  </a>
);
