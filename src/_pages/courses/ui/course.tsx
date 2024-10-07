import { Link } from "@/i18n/routing";
import { useThemeStore } from "@/shared/lib/store";
import { Genders } from "@/shared/consts";
import { H2 } from "@/shared/ui/h2";
import { cn } from "@/shared/lib";

const coursesWomen = [
  {
    imgPreview: '/images/products/dryer/ns-superair/karina-5.jpg',
    title: 'Виды челок',
    subtitle: 'Как выбрать и уложить челку под тип лица',
    description: 'Изучим два популярных вида челок и технику их укладки, чтобы каждая челка выглядела идеально в любых условиях.'
  },
  {
    imgPreview: '/images/products/dryer/ns-superair/karina-1.png',
    title: 'Локоны',
    subtitle: 'Как создать идеальные локоны для любого типа волос',
    description: 'Разберем техники создания разнообразных локонов, чтобы добавить объём и текстуру волосам. Научимся делать их правильно и быстро.'
  },
  {
    imgPreview: '/images/products/dryer/ns-superair/kamila-2.jpg',
    title: 'Брашинг',
    subtitle: 'Секреты идеальной укладки с брашингом',
    description: 'Овладеем искусством брашинга, создавая стильные и объемные укладки, которые подойдут для любого образа.'
  },
  {
    imgPreview: '/images/products/dryer/ns-superair/karina-4.jpg',
    title: 'Выпрямление',
    subtitle: 'Идеальная гладкость без повреждений',
    description: 'Узнаем, как безопасно выпрямлять волосы, сохраняя их здоровье и природный блеск, используя наш фирменный стайлер.'
  },
  {
    imgPreview: '/images/products/dryer/ns-superair/dryer-6.png',
    title: 'Средства для волос',
    subtitle: 'Лучшие продукты для защиты и стайлинга',
    description: 'Погружаемся в мир уходовых и стайлинговых средств, которые помогут поддержать волосы в идеальном состоянии.'
  },
  {
    imgPreview: '/images/products/dryer/ns-superair/kamila-3.jpg',
    title: 'Диффузор',
    subtitle: 'Объем и текстура с помощью диффузора',
    description: 'Научимся использовать диффузор для создания естественных и объемных укладок, не повреждая структуру волос.'
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
interface IProps{
  handleClickCourse:()=>void
}
export const Courses = ({ handleClickCourse }:IProps) => {
  const gender = useThemeStore(state => state.theme);
  const arr = gender === Genders?.Women ? coursesWomen : coursesMen;

  return (
    <section className="w-full mt-10 pb-12 md:pb-24 lg:py-32">
      <div className='container grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-5'>
        <H2 mode='primary' fontSize={22} lineHeight={28}>Видео-уроки</H2>
      </div>
      <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {arr.map(i => (
          <div key={i.title} className="relative overflow-hidden rounded-lg group border shadow-sm">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link href="#" onClick={handleClickCourse} className="absolute inset-0 z-10" prefetch={false}>
              {/* <span className="sr-only">View Course</span> */}
            </Link>
            <div className='h-[225px]'>
              <img
                src={i.imgPreview}
                alt="Course Thumbnail"
                width={400}
                height={225}
                className="object-cover absolute z-[1] h-full w-full h-48 md:h-56"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
            </div>
            <div className="p-4 !bg-white/70 sticky z-10">
              <h3 className="text-lg font-semibold md:text-xl drop-shadow-xl">{i.title}</h3>
              <p className={cn("text-sm text-muted-foreground font-bold drop-shadow-xl",
                // "line-clamp-2"
              )}
              >
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
  );
};
