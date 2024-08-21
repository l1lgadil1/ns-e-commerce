import styles from './styles.module.scss';
import { CourseCardModel } from './model/types';
import { Flex } from "@/shared/ui/flex";
import { H4 } from "@/shared/ui/h4";
import { P } from "@/shared/ui/p";
import { cn } from "@/shared/lib";
import { Button } from "@/shared/ui/button";
import { Play } from "lucide-react";
import { useThemeStore } from "@/shared/lib/store";
import { returnColors } from "@/shared/consts";

export type { CourseCardModel };

export const CourseCard = (props: CourseCardModel) => {
  const { className, imgPreview, title, subtitle, description } = props;
  const gender = useThemeStore(state => state.theme);
  return (
    <Flex gap={8} className={cn(className, styles.container)}>
      <div className='relative'>
        <img src={imgPreview} alt={title} width={393} height={393} className='h-full w-full' />
        <Button onClick={() => alert('Здесь будет видео')} className='flex items-center gap-2 py-2 px-3 justify-center border border-[var(--text-primary)] absolute left-[3%] bottom-[3%]' variant='ghost'>
          <Play color={returnColors(gender).TextPrimary} />
          <P>
            Play
          </P>
        </Button>
      </div>

      <Flex gap={4}>
        <H4 mode='primary' size='m'>{title}</H4>
        <Flex gap={2}>
          <P mode='primary' className='opacity-90' size='m'>{subtitle}</P>
          <P mode='primary' className='opacity-80' size='s'>{description}</P>
        </Flex>
      </Flex>
    </Flex>
  );
};
