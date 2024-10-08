import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib";
import { P } from "@/shared/ui/p";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

interface IProps{
    href:string;
    name:string;
    onClick:()=>void;
    isActive:boolean;
}

export const NavBtn = ({ href, onClick, name, isActive }:IProps) => {
  const t = useTranslations('common');
  return (
    <Link href={href}>
      <Button onClick={onClick} variant='ghost' className={cn('hover:bg-transparent md:!p-0')}>
        <P className={cn('uppercase hover:underline underline-offset-4 hover:opacity-50 transition-all ease-in', isActive && 'underline underline-offset-8')} fontSize={14} lineHeight={20} fontWeight={isActive ? 400 : 300} mode='primary'>{t(name)}</P>
      </Button>
    </Link>
  );
};
