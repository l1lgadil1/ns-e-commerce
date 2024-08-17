import { CourseCardModel } from "@/entities/course-card";

export interface IProps {
    className?:string;
    title:string;
    list:CourseCardModel[]
}
