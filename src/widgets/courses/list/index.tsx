import styles from './styles.module.scss';
import { IProps } from './props';
import { Flex } from "@/shared/ui/flex";
import { CourseCard } from "@/entities/course-card";
import { H3 } from "@/shared/ui/h3";
import { Colors } from "@/shared/consts";
import { cn } from "@/shared/lib";

export const CoursesList = (props: IProps) => {
  const { className, list, title } = props;

  return (
    <Flex gap={12} className={cn(styles.container, className)}>
      <H3 size='m' color={Colors.White} fontWeight={500}>{title}</H3>
      {list?.map(i => (
        <CourseCard
          imgPreview={i?.imgPreview}
          title={i?.title}
          description={i?.description}
          subtitle={i?.subtitle}
        />
      ))}
    </Flex>
  );
};
