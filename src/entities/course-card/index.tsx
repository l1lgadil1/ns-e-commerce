import styles from './styles.module.scss';
import { CourseCardModel } from './model/types';
import { Flex } from "@/shared/ui/flex";
import { H4 } from "@/shared/ui/h4";
import { P } from "@/shared/ui/p";
import { Colors } from "@/shared/consts";
import { cn } from "@/shared/lib";

export type { CourseCardModel };

export const CourseCard = (props: CourseCardModel) => {
  const { className, imgPreview, title, subtitle, description } = props;
  return (
    <Flex gap={8} className={cn(className, styles.container)}>
      <img src={imgPreview} alt={title} width={393} height={393} className='h-full w-full' />
      <Flex gap={4}>
        <H4 color={Colors.Gray} size='m'>{title}</H4>
        <Flex gap={2}>
          <P color={Colors.White} className='opacity-40' size='m'>{subtitle}</P>
          <P color={Colors.White} className='opacity-30' size='s'>{description}</P>
        </Flex>
      </Flex>
    </Flex>
  );
};
