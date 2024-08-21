/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9s2sUDj4qJr
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-[url('/placeholder.svg')] bg-cover bg-center">
        <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
          <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-primary-foreground">
                Empowering Businesses to Thrive
              </h1>
              <p className="mx-auto max-w-[700px] text-primary-foreground md:text-xl">
                Discover how our innovative solutions can transform your organization.
              </p>
              <div className="space-x-4 mt-6">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Our Company</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At our company, we are dedicated to empowering businesses through innovative solutions and unwavering
                commitment to excellence. Our mission is to help our clients achieve their goals by providing
                cutting-edge technology, unparalleled expertise, and personalized support.
              </p>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Founded in 2015, we have grown to become a trusted partner for organizations of all sizes, across a wide
                range of industries. Our core values of integrity, innovation, and customer-centricity guide us in
                everything we do, ensuring that we consistently deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Team</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team of dedicated professionals is the driving force behind our success. Get to know the individuals
                who are committed to delivering exceptional results for our clients.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-4">
              <div className="rounded-lg bg-background p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  Avatar
                  {/* <Avatar> */}
                  {/*  <AvatarImage src="/placeholder-user.jpg" /> */}
                  {/*  <AvatarFallback>JD</AvatarFallback> */}
                  {/* </Avatar> */}
                  <div>
                    <h3 className="text-lg font-bold">John Doe</h3>
                    <p className="text-sm text-muted-foreground">CEO</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  John is the visionary leader who founded our company and has guided it to success. With over 15 years
                  of industry experience, he is passionate about driving innovation and delivering exceptional value to
                  our clients.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="rounded-lg bg-background p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  {/* <Avatar> */}
                  {/*  <AvatarImage src="/placeholder-user.jpg" /> */}
                  {/*  <AvatarFallback>JA</AvatarFallback> */}
                  {/* </Avatar> */}
                  <div>
                    <h3 className="text-lg font-bold">Jane Appleseed</h3>
                    <p className="text-sm text-muted-foreground">CTO</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Jane is our Chief Technology Officer, responsible for driving our technical vision and ensuring the
                  delivery of cutting-edge solutions. Her expertise in emerging technologies and her ability to
                  translate complex ideas into practical applications make her an invaluable asset to our team.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="rounded-lg bg-background p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  Avatar
                  {/* <Avatar> */}
                  {/*  <AvatarImage src="/placeholder-user.jpg" /> */}
                  {/*  <AvatarFallback>SM</AvatarFallback> */}
                  {/* </Avatar> */}
                  <div>
                    <h3 className="text-lg font-bold">Sarah Miller</h3>
                    <p className="text-sm text-muted-foreground">COO</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Sarah is our Chief Operating Officer, responsible for ensuring the smooth and efficient running of our
                  organization. With her extensive experience in operations and her commitment to process optimization,
                  she plays a crucial role in enabling our team to deliver exceptional results to our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
