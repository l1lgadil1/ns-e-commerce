'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { AlertTriangle, Download, FileText } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import YouTube from "react-youtube";

export function AnalysisPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const materialQualityData = {
    labels: ['Прочность', 'Теплостойкость', 'Долговечность', 'Экологичность'],
    datasets: [
      {
        label: 'Оценка качества (%)',
        data: [95, 98, 92, 90],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const materialQualityOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Оценка качества материалов',
      },
    },
    scales: {
      y: {
        min: 60,
        beginAtZero: true,
        max: 100,
      },
    },
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const labFiles = [
    { name: 'Протокол.pdf', size: '506 kB', href: '/protocol.pdf' },
    { name: 'Температура 1.tif', size: '97 kB', href: '/thermal.tif' },
    { name: 'Температура 2.txt', size: '254 kB', href: '/thermal_text.txt' },
  ];

  // const onPlayerReady: YouTubeProps['onReady'] = (event) => {
  //   // access to player in all event handlers via event.target
  //   event.target.pauseVideo();
  // };
  //
  // const opts: YouTubeProps['opts'] = {
  //   height: '390',
  //   width: '640',
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 1,
  //   },
  // };
  // // const chartRef = useRef<ChartJS>(null);
  //
  // const generateRandomData = (baseTemp: number, variance: number) => Array.from(
  //   { length: 5 },
  //   () => baseTemp + (Math.random() * 2 - 1) * variance
  // );

  const data = [
    { minute: "1 минута", high: 95, medium: 85, low: 65 },
    { minute: "2 минута", high: 96, medium: 87, low: 67 },
    { minute: "3 минута", high: 94, medium: 86, low: 66 },
    { minute: "4 минута", high: 97, medium: 85, low: 65 },
    { minute: "5 минута", high: 95, medium: 86, low: 67 },
  ];

  // const data = {
  //   labels: ["1 минута", "2 минута", "3 минута", "4 минута", "5 минута"],
  //   datasets: [
  //     {
  //       label: "Высокая температура",
  //       data: generateRandomData(97, 2),
  //       borderColor: "rgb(255, 99, 71)", // Red
  //       backgroundColor: "rgba(255, 99, 71, 0.5)",
  //       tension: 0.1,
  //     },
  //     {
  //       label: "Средняя температура",
  //       data: generateRandomData(85, 2),
  //       borderColor: "rgb(255, 165, 0)", // Orange
  //       backgroundColor: "rgba(255, 165, 0, 0.5)",
  //       tension: 0.1,
  //     },
  //     {
  //       label: "Низкая температура",
  //       data: generateRandomData(67, 2),
  //       borderColor: "rgb(50, 205, 50)", // Green
  //       backgroundColor: "rgba(50, 205, 50, 0.5)",
  //       tension: 0.1,
  //     },
  //   ],
  // };
  //
  // const options = {
  //   responsive: true,
  //   maintainAspectRatio: true,
  //   scales: {
  //     y: {
  //       beginAtZero: false,
  //       title: {
  //         display: true,
  //         text: "Температура (°C)",
  //       },
  //       min: 40,
  //       max: 100,
  //     },
  //     x: {
  //       title: {
  //         display: true,
  //         text: "Время",
  //       },
  //     },
  //   },
  //   plugins: {
  //     legend: {
  //       position: "top" as const,
  //     },
  //     title: {
  //       display: true,
  //       text: "График изменения температуры",
  //     },
  //   },
  // };

  return (

    <div className='pb-10'>
      <div className='h-[100svh] flex justify-center flex-col items-center w-full relative'>
        <Image
          alt='bg-main'
          className='aspect-[287/438] h-full w-full absolute'
          src="/images/lab-photos/longevity.png"
          // height={450}
          objectFit='cover'
          fill
          // width={300}
          unoptimized
          priority
        />
        <div className='inset-0 bg-neutral-950/50 absolute z-0' />
        <section className="container w-full relative mx-auto px-4 py-8">
          <h2 className='text-white'>Каждый наш лабораторный анализ нацелен на то, чтобы обеспечить долгое и безопасное использование нашего продукта без вреда для здоровья.
            <br />
            <br />
            Например, <b>каждый помнит запах некачественного пластика у нового товара, резкий не приятный запах говорит о наличии токсичных веществ у пластика, что негативно влияет на здоровье человека, в том числе активно повреждает структуру волос</b>. Именно, поэтому, <b>мы тщательно проверяем качество пластика используемого на насадках стайлера SUPERAIR</b>.
            <br />
            <br />
            <b> Наша главная цель, обеспечить продукт, который не вредит здоровью и будет служить долгие годы</b>.
          </h2>
        </section>
      </div>
      <main className="container mx-auto px-4 my-10 py-8">

        {/* TODO превосходство */}
        {/* <Accordion type="single" collapsible className="w-full mb-8"> */}
        {/*  <AccordionItem value="materialSuperiority"> */}
        {/*    <AccordionTrigger className='text-left'>Превосходство материалов</AccordionTrigger> */}
        {/*    <AccordionContent> */}
        {/*      <section className="mb-12"> */}
        {/*        <Card> */}
        {/*          <CardHeader> */}
        {/*            <CardTitle>Превосходство материалов</CardTitle> */}
        {/*          </CardHeader> */}
        {/*          <CardContent> */}
        {/*            <p className="mb-4"> */}
        {/*              Наш фен-стайлер изготовлен из высококачественных материалов, прошедших строгий контроль качества. Результаты тестирований подтверждают их превосходные характеристики */}
        {/*            </p> */}
        {/*            /!* <ul className="list-disc list-inside mb-4"> *!/ */}
        {/*            /!*  <li>Термоустойчивость</li> *!/ */}
        {/*            /!*  <li>Контроль температуры</li> *!/ */}
        {/*            /!*  <li>Отсутствие выделения токсичных веществ</li> *!/ */}
        {/*            /!*  <li>Долговечность</li> *!/ */}
        {/*            /!* </ul> *!/ */}
        {/*            /!* <div className="h-80"> *!/ */}
        {/*            /!*  <Bar data={materialQualityData} options={materialQualityOptions} /> *!/ */}
        {/*            /!* </div> *!/ */}
        {/*            /!* <p className="mt-4 text-sm text-muted-foreground"> *!/ */}
        {/*            /!*  График показывает оценку качества материалов по ключевым параметрам. Все показатели превышают 90%, что подтверждает исключительное качество используемых материалов. *!/ */}
        {/*            /!* </p> *!/ */}
        {/*          </CardContent> */}
        {/*        </Card> */}
        {/*      </section> */}
        {/*    </AccordionContent> */}
        {/*  </AccordionItem> */}
        {/* </Accordion> */}

        <Accordion type="single" collapsible className="w-full mb-8">
          <AccordionItem value="ThermalStability">
            <AccordionTrigger className='text-left'>Термическая стабильность</AccordionTrigger>
            <AccordionContent>
              <section className="mb-12 flex flex-col gap-5">
                {/* <Card className="mb-8"> */}
                {/*  <CardHeader> */}
                {/*    <CardTitle>Термическая стабильность</CardTitle> */}
                {/*  </CardHeader> */}
                {/*  <CardContent> */}
                {/*    <p className="mb-4"> */}
                {/*      Мы провели тщательное исследование термической стабильности нашего фена-стайлера в сравнении с другими моделями на рынке. Результаты демонстрируют превосходную устойчивость нашего продукта к высоким температурам. */}
                {/*    </p> */}
                {/*    <div className="h-80"> */}
                {/*      <Line data={thermalStabilityData} options={thermalStabilityOptions} /> */}
                {/*    </div> */}
                {/*    <p className="mt-4 text-sm text-muted-foreground"> */}
                {/*      График демонстрирует, что наш фен-стайлер сохраняет высокую стабильность даже при повышенных температурах, значительно превосходя средние и бюджетные модели. */}
                {/*    </p> */}
                {/*  </CardContent> */}
                {/* </Card> */}
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>Термический анализ материала фена-стайлера</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className='flex flex-col gap-4 mb-4'>
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Что это такое ? </h3>
                        <p>
                          Термогравиметрический анализ пластика - это метод исследования при
                          котором измеряется изменение массы насадок стайлера в зависимости от
                          температуры.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Цели анализа: </h3>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                          <li>Оценка термической стабильности и устойчивости пластика насадок
                            к высоким температурам.
                          </li>
                          <li>Обеспечить долговечность использования без вреда здоровью
                            волос.
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Как проводился анализ: </h3>
                        <p>
                          Пластиковая насадка помещается на сверхчувствительные весы. Образец
                          подвергается постепенному нагреву, в процессе которого фиксируются
                          изменения массы.
                        </p>
                      </div>
                    </div>
                    <div className="aspect-video relative rounded-lg overflow-hidden">
                      <Image
                        src="/images/analysis.png"
                        alt="График термического анализа фена-стайлера"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Температурный диапазон</TableHead>
                          <TableHead>Наблюдение</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>до 95°C </TableCell>
                          <TableCell> Это максимальная рабочая температура стайлера. При такой температуре<b>нет никаких изменений в потерях массы</b>.
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>150°C - 200°C</TableCell>
                          <TableCell>Материал остается стабильным. Масса начинает изменяться
                            только при температуре, приближающейся к 200°C. Эта ситуация
                            практически невозможна, благодаря <b>NTC-датчикам</b> нашего
                            стайлера. Но тем не менее, этот диапазон также<b>не представляет опасности при обычной эксплуатации</b>.
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>200°C – 250°C</TableCell>
                          <TableCell>При таких температурах начинает происходить небольшая
                            потеря массы материала, но это не влияет на его эксплуатационные
                            качества.<b>Наш фен никогда не нагреется до этого уровня в обычном использовании</b>. Эти цифры просто показывают,
                            насколько прочный и долговечный наш материал.
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Выше 250°C</TableCell>
                          <TableCell>
                            <b>Материал способен выдерживать даже экстремальные
                              условия, которые никогда не возникнут в реальной
                              жизни
                            </b>.
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    <p className="mt-4 text-sm text-muted-foreground">
                      График показывает изменение массы (TG, зеленая линия), тепловой поток (DTA,
                      синяя линия)
                      и температуру (красная пунктирная линия) в зависимости от времени.
                    </p>

                    <div className='mt-4'>
                      {/* <p className="mb-4"> */}
                      {/*  Термический анализ материала фена-стайлера показывает высокую термическую */}
                      {/*  стабильность до 200°C, что значительно превышает рабочие температуры устройства. */}
                      {/* </p> */}

                      <p className="mt-4">
                        В результате анализа мы убедились в высокой пригодности и долговечности
                        пластика используемого в насадках для стайлера SUPERAIR, даже в условиях
                        значительно превышающих норму работы стайлера.
                        (Нормальная рабочая температура стайлера 95 градусов)
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <div className='space-y-2'>
                  <div className="flex items-center justify-between p-2 bg-gray-100 rounded">
                    <div className="flex items-center">
                      <FileText className="mr-2 h-5 w-5" />
                      <span>{labFiles[1].name}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 mr-2">{labFiles[1].size}</span>
                      <Link href={labFiles[1].href} target='_blank'>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Скачать
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-100 rounded">
                    <div className="flex items-center">
                      <FileText className="mr-2 h-5 w-5" />
                      <span>{labFiles[2].name}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 mr-2">{labFiles[2].size}</span>
                      <Link href={labFiles[2].href} target='_blank'>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Скачать
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full mb-8">
          <AccordionItem value="ThermalStability">
            <AccordionTrigger className='text-left'>Анализ выделения токсичных веществ</AccordionTrigger>
            <AccordionContent>
              <section className="mb-12 flex flex-col gap-5">

                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>Анализ выделения токсичных веществ из насадок NS SUPERAIR</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className='flex flex-col gap-4 mb-4'>
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Что такое ? </h3>
                        <p>
                          Анализ выделения токсичных веществ из насадок стайлера SUPERAIR
                          методом газовой хроматографии— это исследование, направленное на
                          определение состава пластика насадок стайлера и выявление
                          потенциальных токсичных веществ, которые могут выделяться из них.
                          Этот анализ помогает обеспечить бережный уход за волосами не
                          повреждая их
                        </p>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Цели анализа: </h3>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                          <li>Убедиться в отсутствии токсичных веществ в насадках стайлера
                            SUPERAIR
                          </li>
                          <li>Обеспечить долговечность использования стайлера без повреждения
                            здоровья волос.
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Как проводился анализ: </h3>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                          <li>Пластиковая насадка стайлера измельчается и помещается в
                            инжектор.
                          </li>
                          <li>Затем пластик нагревается до 199 градусов в течении 20 минут.
                          </li>
                          <li>Все выделенные вещества анализируются методом масс
                            спектрометрическим детектированием.
                          </li>
                        </ul>
                      </div>
                      <p>Анализ показал, что при рабочих температурах материал не выделяет токсичных веществ. Начало термического разложения, которое может приводить к выделению нежелательных продуктов, начинается при экстремально высоких температурах, недостижимых в стандартных условиях использования.</p>
                    </div>

                  </CardContent>
                </Card>
                <div className='space-y-2'>

                  {/* <YouTube */}
                  {/*  iframeClassName='w-full' */}
                  {/*  videoId="rDKutXmKfXQ" */}
                  {/*  opts={opts} */}
                  {/*  onReady={onPlayerReady} */}
                  {/* /> */}
                  <YouTube
                    opts={{
                      playerVars: {
                        autoplay: true,
                        controls: 0,
                        playsinline: 1
                      }
                    }}
                    iframeClassName='w-full'
                    className='w-full'
                    videoId="rDKutXmKfXQ"
                    onReady={() => {
                      // e.target.mute();
                      // e.target.playVideo();
                    }}
                  />
                  <div className="flex items-center justify-between p-2 bg-gray-100 rounded">
                    <div className="flex items-center">
                      <FileText className="mr-2 h-5 w-5" />
                      <span>{labFiles[0].name}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 mr-2">{labFiles[0].size}</span>
                      <Link href={labFiles[0].href} target='_blank'>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Скачать
                        </Button>
                      </Link>
                    </div>
                  </div>

                </div>
              </section>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full mb-8">
          <AccordionItem value="ThermalStability">
            <AccordionTrigger className='text-left'>Анализ контроля температуры</AccordionTrigger>
            <AccordionContent>
              <section className="mb-12 flex flex-col gap-5">

                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>Анализ контроля выходящей температуры</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className='flex flex-col gap-4 mb-4'>
                      <div className="space-y-4">
                        {/* <h3 className="text-lg font-semibold">Что это такое ? </h3> */}
                        <p>
                          Контроль температуры является важным аспектом работы стайлера, обеспечивая безопасное использование устройства без перегрева и повреждения волос, и высокую эффективность создания укладок.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Цели анализа: </h3>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                          <li>Определить стабильность температуры устройства</li>
                          <li>Обеспечить безопасность использования стайлера без перегрева и повреждения волос.</li>
                          <li>Обеспечить эффективность создания укладки.</li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Как проводился анализ: </h3>
                        <p>
                          Было проведено 3 анализа для каждого температурного режима SUPERAIR. Мы измеряли температуру воздушного потока стайлера на каждом температурном режиме в течении 5 минут при максимальной мощности работы. Это позволило оценить стабильность работы устройства.
                        </p>
                      </div>
                      <p>Благодаря тому что SUPERAIR постоянно контролирует выходящую температуру, предотвращая перегрев волос, делает его максимально безопасным и комфортным для использования.</p>
                    </div>

                  </CardContent>
                </Card>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="minute" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="high" stroke="red" strokeWidth={2} name="Высокий" />
                      <Line type="monotone" dataKey="medium" stroke="orange" strokeWidth={2} name="Средний" />
                      <Line type="monotone" dataKey="low" stroke="green" strokeWidth={2} name="Низкий" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className='flex h-full md:flex-row gap-4 flex-col'>
                  {/* <div className="w-full max-w-3xl mx-auto p-4 h-full"> */}
                  {/*  @ts-ignore */}

                  <div className='max-h-[30%] md:max-h-[200px] md:max-w-[400px]'>
                    <Image
                      src="/images/lab-photos/temperature-control.png"
                      alt="Тест на теплостойкость фена-стайлера"
                      width={200}
                      height={200}
                      className='h-full md:h-auto !w-full'
                    />
                  </div>
                  {/* <YouTube */}
                  {/*  iframeClassName='w-full' */}
                  {/*  className='w-full' */}
                  {/*  videoId="gTNsmAVRFxM" */}
                  {/*  opts={opts} */}
                  {/*  onReady={onPlayerReady} */}
                  {/* /> */}
                  <YouTube
                    opts={{
                      playerVars: {
                        autoplay: true,
                        controls: 0,
                        playsinline: 1
                      }
                    }}
                    iframeClassName='w-full'
                    className='w-full'
                    videoId="gTNsmAVRFxM"
                    onReady={() => {
                      // e.target.mute();
                      // e.target.playVideo();
                    }}
                  />
                </div>
              </section>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full mb-8">
          <AccordionItem value="ThermalStability">
            <AccordionTrigger className='text-left'>Долговечность продутка</AccordionTrigger>
            <AccordionContent>
              <section className="mb-12 flex flex-col gap-5">
                {/* TODO график и подровнять текст в начале */}
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>Долговечность стайлера SUPERAIR</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className='max-h-[30%] md:max-h-[400px] md:max-w-[400px]'>
                        <Image
                          src="/images/lab-photos/longevity.png"
                          alt="Тест на теплостойкость фена-стайлера"
                          width={200}
                          height={200}
                          className='!h-full !w-full'
                        />
                      </div>
                      {/* <h3 className="text-lg font-semibold">Тест на долговечность</h3> */}
                      <p>
                        Высокая термоустойчивость и стабильность материала при рабочих
                        температурах обеспечивают долговечность устройства. Материал остается
                        неизменным на протяжении длительного срока службы, сохраняя свои
                        характеристики даже при частом использовании.
                      </p>
                      <p className='font-bold'>
                        Стайлер SUPERAIR показал работоспособность минимум в 2000 часов, при опытах в лаборатории нашего производителя. <br />Именно поэтому, гарантия на наш продукт - 25 месяцев.
                      </p>

                    </div>

                  </CardContent>
                </Card>
                <div className='space-y-2'>
                  {/* фыв */}
                </div>
              </section>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* TODO сравнительный анализ */}

        {/* <Accordion type="single" collapsible className="w-full mb-8"> */}
        {/*  <AccordionItem value="ComparativeAnalysis"> */}
        {/*    <AccordionTrigger className='text-left'>Сравнительный анализ характеристик</AccordionTrigger> */}
        {/*    <AccordionContent> */}
        {/*      <section className="mb-12"> */}
        {/*        <Card className="mb-8"> */}
        {/*          <CardHeader> */}
        {/*            <CardTitle>Сравнительный анализ характеристик</CardTitle> */}
        {/*          </CardHeader> */}
        {/*          <CardContent> */}
        {/*            <Table> */}
        {/*              <TableHeader> */}
        {/*                <TableRow> */}
        {/*                  <TableHead>Характеристика</TableHead> */}
        {/*                  <TableHead>Наш фен-стайлер</TableHead> */}
        {/*                  <TableHead>Средний фен-стайлер</TableHead> */}
        {/*                  <TableHead>Бюджетный фен-стайлер</TableHead> */}
        {/*                </TableRow> */}
        {/*              </TableHeader> */}
        {/*              <TableBody> */}
        {/*                <TableRow> */}
        {/*                  <TableCell>Термоустойчивость</TableCell> */}
        {/*                  <TableCell>До 250°C</TableCell> */}
        {/*                  <TableCell>До 200°C</TableCell> */}
        {/*                  <TableCell>До 180°C</TableCell> */}
        {/*                </TableRow> */}
        {/*                <TableRow> */}
        {/*                  <TableCell>Контроль температуры</TableCell> */}
        {/*                  <TableCell>6 режимов</TableCell> */}
        {/*                  <TableCell>3 режима</TableCell> */}
        {/*                  <TableCell>2 режима</TableCell> */}
        {/*                </TableRow> */}
        {/*                <TableRow> */}
        {/*                  <TableCell>Выделение токсичных веществ</TableCell> */}
        {/*                  <TableCell>Отсутствует</TableCell> */}
        {/*                  <TableCell>Минимальное</TableCell> */}
        {/*                  <TableCell>Умеренное</TableCell> */}
        {/*                </TableRow> */}
        {/*                /!* <TableRow> *!/ */}
        {/*                /!*  <TableCell>Долговечность</TableCell> *!/ */}
        {/*                /!*  <TableCell>{">10000 часов работы"}</TableCell> *!/ */}
        {/*                /!*  <TableCell>5000-7000 часов работы</TableCell> *!/ */}
        {/*                /!*  <TableCell>3000-5000 часов работы</TableCell> *!/ */}
        {/*                /!* </TableRow> *!/ */}
        {/*              </TableBody> */}
        {/*            </Table> */}
        {/*          </CardContent> */}
        {/*        </Card> */}

        {/*      </section> */}

        {/*    </AccordionContent> */}
        {/*  </AccordionItem> */}
        {/* </Accordion> */}

        {/* <Accordion type="single" collapsible className="w-full mb-8"> */}
        {/*  <AccordionItem value="LaboratoryTest"> */}
        {/*    <AccordionTrigger className='text-left'>Результаты лабораторных испытаний</AccordionTrigger> */}
        {/*    <AccordionContent> */}
        {/*      <section className="mb-12"> */}
        {/*        <Card className="overflow-hidden"> */}
        {/*          <CardHeader> */}
        {/*            <CardTitle className="text-xl md:text-2xl font-semibold">Результаты лабораторных */}
        {/*              испытаний */}
        {/*            </CardTitle> */}
        {/*          </CardHeader> */}
        {/*          <CardContent> */}
        {/*            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full"> */}
        {/*              <TabsList className='flex flex-col md:flex-row w-full h-full gap-1'> */}
        {/*                <TabsTrigger */}
        {/*                  value="thermalStability" */}
        {/*                  className='w-full' */}
        {/*                >Термоустойчивость */}
        {/*                </TabsTrigger> */}
        {/*                <TabsTrigger value="temperatureControl" className='w-full'>Контроль */}
        {/*                  температуры */}
        {/*                </TabsTrigger> */}
        {/*                <TabsTrigger value="toxicEmissions" className='w-full'>Выделение */}
        {/*                  токсичных веществ */}
        {/*                </TabsTrigger> */}
        {/*                <TabsTrigger */}
        {/*                  value="durability" */}
        {/*                  className='w-full' */}
        {/*                >Долговечность */}
        {/*                </TabsTrigger> */}
        {/*              </TabsList> */}
        {/*              <div className="mt-20"> */}
        {/*                <TabsContent value="thermalStability"> */}
        {/*                  <div className="space-y-4"> */}
        {/*                    <div className='max-h-[30%] md:max-h-[400px] md:max-w-[400px]'> */}
        {/*                      <Image */}
        {/*                        src="/images/lab-photos/temperature-resistence.png" */}
        {/*                        alt="Тест на теплостойкость фена-стайлера" */}
        {/*                        width={200} */}
        {/*                        height={200} */}
        {/*                        className='!h-full !w-full' */}
        {/*                      /> */}
        {/*                    </div> */}
        {/*                    <h3 className="text-lg font-semibold">Тест на */}
        {/*                      термоустойчивость */}
        {/*                    </h3> */}
        {/*                    <p> */}
        {/*                      Материал фена-стайлера выдерживает температуры до 250°C без */}
        {/*                      значительных изменений в весе или свойствах. Начало */}
        {/*                      термического разложения происходит при температуре выше */}
        {/*                      400°C, что далеко за пределами нормальной эксплуатации. */}
        {/*                    </p> */}

        {/*                    /!*  TODO *!/ */}

        {/*                  </div> */}
        {/*                </TabsContent> */}
        {/*                <TabsContent value="temperatureControl"> */}
        {/*                  <div className="space-y-4"> */}
        {/*                    <div className='max-h-[30%] md:max-h-[400px] md:max-w-[400px]'> */}
        {/*                      <Image */}
        {/*                        src="/images/lab-photos/temperature-control.png" */}
        {/*                        alt="Тест на теплостойкость фена-стайлера" */}
        {/*                        width={200} */}
        {/*                        height={200} */}
        {/*                        className='!h-full !w-full' */}
        {/*                      /> */}
        {/*                    </div> */}
        {/*                    <h3 className="text-lg font-semibold">Тест на контроль */}
        {/*                      температуры */}
        {/*                    </h3> */}
        {/*                    <p> */}
        {/*                      Благодаря высококачественным термостойким материалам, фен */}
        {/*                      автоматически контролирует температуру, предотвращая */}
        {/*                      перегрев и защищая волосы от повреждений. В обычных условиях */}
        {/*                      эксплуатации (до 150°C) материал сохраняет стабильность, что */}
        {/*                      делает его безопасным для регулярного использования. */}
        {/*                    </p> */}

        {/*                  </div> */}
        {/*                </TabsContent> */}
        {/*                <TabsContent value="toxicEmissions"> */}
        {/*                  <div className="space-y-4"> */}
        {/*                    <div className='max-h-[30%] md:max-h-[400px] md:max-w-[400px]'> */}
        {/*                      <Image */}
        {/*                        src="/images/lab-photos/substances.png" */}
        {/*                        alt="Тест на теплостойкость фена-стайлера" */}
        {/*                        width={200} */}
        {/*                        height={200} */}
        {/*                        className='!h-full !w-full' */}
        {/*                      /> */}
        {/*                    </div> */}
        {/*                    <h3 className="text-lg font-semibold">Тест на выделение */}
        {/*                      токсичных веществ */}
        {/*                    </h3> */}
        {/*                    <p> */}
        {/*                      Анализ показал, что при рабочих температурах материал не */}
        {/*                      выделяет токсичных веществ. Начало термического разложения, */}
        {/*                      которое может приводить к выделению нежелательных продуктов, */}
        {/*                      начинается при экстремально высоких температурах, */}
        {/*                      недостижимых в стандартных условиях использования. */}
        {/*                    </p> */}

        {/*                  </div> */}
        {/*                </TabsContent> */}
        {/*                <TabsContent value="durability"> */}
        {/*                  <div className="space-y-4"> */}
        {/*                    <div className='max-h-[30%] md:max-h-[400px] md:max-w-[400px]'> */}
        {/*                      <Image */}
        {/*                        src="/images/lab-photos/longevity.png" */}
        {/*                        alt="Тест на теплостойкость фена-стайлера" */}
        {/*                        width={200} */}
        {/*                        height={200} */}
        {/*                        className='!h-full !w-full' */}
        {/*                      /> */}
        {/*                    </div> */}
        {/*                    <h3 className="text-lg font-semibold">Тест на долговечность</h3> */}
        {/*                    <p> */}
        {/*                      Высокая термоустойчивость и стабильность материала при */}
        {/*                      рабочих температурах обеспечивают долговечность устройства. */}
        {/*                      Материал остается неизменным на протяжении длительного срока */}
        {/*                      службы, сохраняя свои характеристики даже при частом */}
        {/*                      использовании. */}
        {/*                    </p> */}

        {/*                  </div> */}
        {/*                </TabsContent> */}
        {/*              </div> */}
        {/*            </Tabs> */}
        {/*          </CardContent> */}
        {/*        </Card> */}
        {/*        <div> */}
        {/*          <div className='flex flex-col gap-3 mt-4'> */}
        {/*            фыв */}
        {/*          </div> */}
        {/*        </div> */}
        {/*      </section> */}
        {/*    </AccordionContent> */}
        {/*  </AccordionItem> */}
        {/* </Accordion> */}

        <Accordion type="single" collapsible className="w-full mb-8">
          <AccordionItem value="conclusion">
            <AccordionTrigger className='text-left'>Заключение</AccordionTrigger>
            <AccordionContent>
              <section>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl font-semibold">Заключение</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Результаты проведённых термических и токсикологических тестов подтверждают
                      высокое качество материалов, использованных в нашем фене-стайлере. Ключевые
                      преимущества устройства включают:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Исключительную термоустойчивость: материал сохраняет стабильность даже
                        при температурах, превышающих 250°C, что значительно выше обычного
                        температурного режима фена. Это делает ситуацию с перегревом
                        маловероятной.
                      </li>
                      <li>Эффективный контроль температуры: устройство безопасно при обычных
                        температурах использования, что минимизирует риск повреждения волос и
                        улучшает процесс укладки.
                      </li>
                      <li>Отсутствие выделения токсичных веществ: при рабочих температурах
                        отсутствует выделение вредных компонентов, что подтверждает безопасность
                        устройства для здоровья.
                      </li>
                      <li>Долговечность материалов: материал демонстрирует высокую стойкость при
                        термических воздействиях, что гарантирует долговременное использование
                        прибора без потери эффективности.
                      </li>
                    </ul>
                    <p className="mt-4">
                      Выбирая наш фен-стайлер, вы получаете продукт, в котором каждая деталь
                      продумана и
                      изготовлена
                      из материалов высочайшего качества, что подтверждено научными исследованиями
                      и
                      тестированиями.
                    </p>
                  </CardContent>
                </Card>
              </section>

            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full mb-8">
          <AccordionItem value="files">
            <AccordionTrigger className='text-left'>Лабораторные файлы</AccordionTrigger>
            <AccordionContent>
              <section>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl font-semibold">Файлы</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {labFiles.map((file, index) => (
                        <li
                          key={index}
                          className="flex items-center justify-between p-2 bg-gray-100 rounded"
                        >
                          <div className="flex items-center">
                            <FileText className="mr-2 h-5 w-5" />
                            <span>{file.name}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-sm text-gray-500 mr-2">{file.size}</span>
                            <Link href={file.href} target='_blank'>
                              <Button variant="outline" size="sm">
                                <Download className="mr-2 h-4 w-4" />
                                Скачать
                              </Button>
                            </Link>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </section>

            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div
          className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mt-4 rounded-r-lg"
        >
          <h4 className="flex items-center font-semibold">
            <AlertTriangle className="mr-2" />
            Последствия использования некачественных стайлеров
          </h4>
          <ul className="list-disc list-inside mt-2">
            <li><b>Перегрев и повреждение волос:</b> Некачественные фены не контролируют
              температуру должным образом, что может привести к перегреву и серьезным
              повреждениям структуры волос.
            </li>
            <li><b>Выделение токсичных веществ: </b>Дешевые материалы часто начинают
              разлагаться при более низких температурах, выделяя вредные для здоровья
              химические вещества.
            </li>
            <li><b>Короткий срок службы:</b> Материалы низкого качества быстро
              изнашиваются, что приводит к поломкам устройства и дополнительным
              затратам на замену.
            </li>
            <li><b>Риск ожогов:</b> Некачественные фены могут перегреваться и
              становиться небезопасными для пользователя, увеличивая риск ожогов кожи
              головы и рук.
            </li>
          </ul>
        </div>
      </main>

    </div>

  );
}
