export interface IProps {
    mode?:'column' | 'row' | 'column-reverse' | 'row-reverse';
    justify?:'center' | 'flex-start' | 'flex-end' | 'space-between';
    align?:'center' | 'flex-start' | 'flex-end';
    gap?:number;
    flexWrap?:boolean;
    className?: string;
}
