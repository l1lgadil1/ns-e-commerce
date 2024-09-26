/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9s2sUDj4qJr
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Flex } from "@/shared/ui/flex";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[var(--app-height)]">
      <section className="w-full mt-[var(--header-height)] pt-12 md:pt-24 lg:pt-32 bg-[var(--bg-main)] bg-cover bg-center">
        <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
          <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
            <Flex gap={24}>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-[var(--text-primary)]">
                О компании
              </h1>
              <p className="mx-auto max-w-[700px] text-[var(--text-primary)] md:text-xl">
                NS - Казахстанский бренд производящий премиальную бытовую технику для красоты. Каждая наша модель произведена по стандартам новейших технологий,и обеспечивает долговечность и надежность.
              </p>
            </Flex>
          </div>
        </div>
      </section>
    </div>
  );
}
