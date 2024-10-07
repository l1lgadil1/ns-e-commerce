'use client';

import styles from './styles.module.scss';
import { Preview } from "./ui/preview";
import { Courses } from "./ui/course";

export const CoursesPage = () => {
  const handleClickCourse = () => {
    alert('Курс все еще в процессе !');
  };

  return (
    <div className={styles.container}>
      <Preview handleClickCourse={handleClickCourse} />
      <Courses handleClickCourse={handleClickCourse} />
    </div>
  );
};
