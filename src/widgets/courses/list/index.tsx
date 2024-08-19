import styles from './styles.module.scss';
import { IProps } from './props';
import { Flex } from "@/shared/ui/flex";
import { CourseCard } from "@/entities/course-card";
import { H3 } from "@/shared/ui/h3";
import { cn } from "@/shared/lib";

export const CoursesList = (props: IProps) => {
  const { className, list, title } = props;
  const isMobile = window.innerWidth <= 768;

  return (
    <Flex className={cn(styles.container, className)}>
      <Flex gap={12} className='container'>
        <H3 mode='primary' size='m' fontWeight={500}>{title}</H3>
        <Flex gap={12} mode={isMobile ? 'column' : 'row'}>
          {list?.map(i => (
            <CourseCard
              key={i.imgPreview}
              imgPreview={i?.imgPreview}
              title={i?.title}
              description={i?.description}
              subtitle={i?.subtitle}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
