import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib";
import { P } from "@/shared/ui/p";

interface IProps{
    href:string;
    name:string;
    onClick:()=>void;
    isActive:boolean;
}

export const NavBtn = ({ href, onClick, name, isActive }:IProps) => (
  <Link href={href}>
    <Button onClick={onClick} variant='ghost' className={cn('hover:bg-transparent')}>
      <P className={cn('uppercase hover:underline underline-offset-4 hover:opacity-50 transition-all ease-in', isActive && 'underline underline-offset-8')} fontSize={14} lineHeight={20} fontWeight={isActive ? 400 : 300} mode='primary'>{name}</P>
    </Button>
  </Link>
);
