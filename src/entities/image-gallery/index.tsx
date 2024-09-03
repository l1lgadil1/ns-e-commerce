import { useState, useEffect } from 'react';
import NextImage from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from "@/shared/ui/button";

interface IProps{
  images:string[]
}
export const ImageGallery = ({ images }:IProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setLoading(true);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setLoading(true);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-auto">
      <div
        className="relative aspect-[4/3] md:aspect-[1/1] overflow-hidden rounded-lg bg-gray-200 cursor-pointer"
        onClick={openModal}
      >
        {images.map((src, index) => (
          <NextImage
            key={src}
            src={src}
            alt={`Image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className={`absolute top-0 left-0 transition-opacity duration-300 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            onLoadingComplete={() => setLoading(false)}
            priority={index === currentIndex}
          />
        ))}

      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={prevImage}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={nextImage}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-[90vw] md:max-h-[50vh] md:max-w-[50vw] max-h-[90vh] p-0">
          <div className="relative w-full h-full">
            <NextImage
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              layout="responsive"
              className='h-[100vh] !w-[100vw] md:!h-auto md:!w-auto'
              width={1600}
              height={1200}
              objectFit="contain"
            />
            <Button
              variant="ghost"
              // size="icon"
              className="absolute top-2 right-2 bg-white/80 hover:bg-white"
              onClick={closeModal}
            >
              {/* <X className="h-4 w-4" /> */}
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
