import { Flex } from "@/shared/ui/flex";
import { P } from "@/shared/ui/p";
import { Box, Castle, User, ShieldCheck } from "lucide-react";

export const FeaturesSection = ({ mainFeatures }:any) => {
  const returnIcon = (type:string) => {
    switch (type) {
      case 'system':
        return <Castle width={24} height={24} color='white' />;
      case "guard":
        return <ShieldCheck width={24} height={24} color='white' />;
      case 'box':
        return <Box width={24} height={24} color='white' />;
      case 'feedback':
        return <User width={24} height={24} color='white' />;
      default:
        return null;
    }
  };
  return (
    <div className='w-full absolute bottom-[8%] bg-black/50 flex items-center flex-col justify-center py-8 px-3 z-1'>
      <Flex gap={8} className='w-full'>
        {mainFeatures.map((i:any) => (
          <Flex key={i.value} mode='row' gap={8} align='center' justify='flex-start' className='w-full'>
            {returnIcon(i.type)}
            <P size='m' mode='primary' color='white'>
              {i.value}
            </P>
          </Flex>
        ))}
      </Flex>
      <div className='flex justify-between w-full px-4'>
        {/* <p className="text-center text-xl font-[400] md:text-3xl text-white">heading</p> */}

        {/* <p className="text-center text-xl font-[400] md:text-3xl text-white">heading</p> */}
        {/* <p className="mb-2 text-center text-2xl font-[500] md:mb-4 md:text-4xl text-white"> */}
        {/*  subheading */}
        {/* </p> */}
      </div>
    </div>
  );
};
