'use client';

import { Link } from "@/i18n/routing";
import { Genders } from "@/shared/consts";
import { useThemeStore } from "@/shared/lib/store";

const coursesWomen = [
  {
    imgPreview: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/products/hair-care/airstrait-553-2023/haircare-category-page/styling-guides/553-haircare-category-naturally-straight-blow-out-leap.jpg?cropPathE=mobile&fit=stretch,1&fmt=pjpeg&wid=640',
    title: 'NS superair выпрямление',
    subtitle: 'Выпрямление волос в домашних условиях',
    description: 'Идеальные, прямые волосы'
  },
  {
    imgPreview: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/products/hair-care/dyson-supersonic/supersonic-nural/owners-page/605G-Owners-PW-Style-Guide-Wave-Curl-Diffuser.jpg?cropPathE=mobile&fit=stretch,1&fmt=pjpeg&wid=640',
    title: 'NS superair выпрямление',
    subtitle: 'Выпрямление волос в домашних условиях',
    description: 'Идеальные, прямые волосы'
  },
  {
    imgPreview: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/products/hair-care/airstrait-553-2023/haircare-category-page/styling-guides/553-haircare-category-smooth-c-curl-leap.jpg?cropPathE=mobile&fit=stretch,1&fmt=pjpeg&wid=640',
    title: 'NS superair выпрямление',
    subtitle: 'Выпрямление волос в домашних условиях',
    description: 'Идеальные, прямые волосы'
  },
];
const coursesMen = [
  {
    imgPreview: 'https://mi-home.kz/templates/yootheme/cache/06/Xiaomi_Soocas_Electric_Shaver_S32_2-0662427c.webp',
    title: 'NS борода',
    subtitle: 'Идеальное бритье',
    description: 'Для всех типов кожи'
  },

];
const Page = () => {
  const gender = useThemeStore(state => state.theme);
  const arr = gender === Genders?.Women ? coursesWomen : coursesMen;
  return (
    <div>
      <section className="w-full py-24 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Видео уроки</h1>
            <p className="mx-auto max-w-[700px] break-words text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Расширьте свои знания с помощью наших авторских видеокурсов. Изучите широкий спектр тем и учитесь в
              в удобном для вас темпе.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {arr.map(i => (
            <div key={i.title} className="relative overflow-hidden rounded-lg group">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Course</span>
              </Link>
              <img
                src={i.imgPreview}
                alt="Course Thumbnail"
                width={400}
                height={225}
                className="object-cover w-full h-48 md:h-56"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <div className="p-4 bg-background">
                <h3 className="text-lg font-semibold md:text-xl">{i.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {i.description}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-sm text-muted-foreground">{i.subtitle}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
};
export default Page;
