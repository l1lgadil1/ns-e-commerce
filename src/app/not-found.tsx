import Link from 'next/link';
import { Flex } from "@/shared/ui/flex";
import { H1 } from "@/shared/ui/h1";
import { Button } from "@/shared/ui/button";

export default function NotFound() {
  return (
    <Flex className='h-[100svh]' justify='center' align='center' gap={24}>
      <H1>404 - Страница не найдена :(</H1>
      <Link href="/">
        <Button>
          Вернуться на главную
        </Button>
      </Link>
    </Flex>
  );
}
