'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
} from 'chart.js';
import { AlertTriangle, Download, FileText } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import YouTube, { YouTubeProps } from "react-youtube";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

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
        beginAtZero: true,
        max: 100,
      },
    },
  };

  const thermalStabilityData = {
    labels: [50, 100, 150, 200, 250],
    datasets: [
      {
        label: 'Наш фен-стайлер',
        data: [100, 99.8, 99.5, 99.2, 98.8],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: 'Средний фен-стайлер',
        data: [100, 99.5, 98.7, 97.8, 96.5],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Бюджетный фен-стайлер',
        data: [100, 99.3, 98.2, 96.9, 95.1],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const thermalStabilityOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Термическая стабильность',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Температура (°C)',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Стабильность (%)',
        },
        min: 94,
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
  const [activeTab, setActiveTab] = useState('thermalStability');

  const labFiles = [
    { name: 'Протокол.pdf', size: '506 kB', href: '/protocol.pdf' },
    { name: 'Температура 1.tif', size: '97 kB', href: '/thermal.tif' },
    { name: 'Температура 2.txt', size: '254 kB', href: '/thermal_text.txt' },
  ];

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (

    <div className='py-10'>

      <main className="container mx-auto px-4 my-[var(--header-height)] py-8">

        <Accordion type="single" collapsible className="w-full mb-8">
          <AccordionItem value="materialSuperiority">
            <AccordionTrigger className='text-left'>Превосходство материалов</AccordionTrigger>
            <AccordionContent>
              <section className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle>Превосходство материалов</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Наш фен-стайлер изготовлен из высококачественных материалов, прошедших строгий контроль качества. Результаты тестирований подтверждают их превосходные характеристики
                    </p>
                    {/* <ul className="list-disc list-inside mb-4"> */}
                    {/*  <li>Термоустойчивость</li> */}
                    {/*  <li>Контроль температуры</li> */}
                    {/*  <li>Отсутствие выделения токсичных веществ</li> */}
                    {/*  <li>Долговечность</li> */}
                    {/* </ul> */}
                    {/* <div className="h-80"> */}
                    {/*  <Bar data={materialQualityData} options={materialQualityOptions} /> */}
                    {/* </div> */}
                    {/* <p className="mt-4 text-sm text-muted-foreground"> */}
                    {/*  График показывает оценку качества материалов по ключевым параметрам. Все показатели превышают 90%, что подтверждает исключительное качество используемых материалов. */}
                    {/* </p> */}
                  </CardContent>
                </Card>
              </section>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible className="w-full mb-8">
          <AccordionItem value="ThermalStability">
            <AccordionTrigger className='text-left'>Термическая стабильность</AccordionTrigger>
            <AccordionContent>
              <section className="mb-12 flex flex-col gap-5">
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Термическая стабильность</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Мы провели тщательное исследование термической стабильности нашего фена-стайлера в сравнении с другими моделями на рынке. Результаты демонстрируют превосходную устойчивость нашего продукта к высоким температурам.
                    </p>
                    <div className="h-80">
                      <Line data={thermalStabilityData} options={thermalStabilityOptions} />
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                      График демонстрирует, что наш фен-стайлер сохраняет высокую стабильность даже при повышенных температурах, значительно превосходя средние и бюджетные модели.
                    </p>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>Термический анализ материала фена-стайлера</CardTitle>
                  </CardHeader>
                  <CardContent>
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
                          <TableCell>До 250°C</TableCell>
                          <TableCell>Материал начинает терять немного в весе только при температуре, приближающейся к 250°C, что крайне маловероятно при использовании фена.</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>250°C - 400°C</TableCell>
                          <TableCell>При таких температурах начинает происходить небольшая потеря массы материала, но это не влияет на его эксплуатационные качества.Такие температуры можно сравнить с нагревом духовки или гриля, но ваш фен никогда не нагреется до этого уровня в обычном использовании. Эти цифры просто показывают, насколько прочный наш материал.
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>400°C - 500°C</TableCell>
                          <TableCell>Это практически нереальная ситуация в использовании фена, так как фен никогда не нагреется до таких высоких температур. Этот тест демонстрирует, что материал способен выдерживать даже экстремальные условия, которые никогда не возникнут в реальной жизни.</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    <p className="mt-4 text-sm text-muted-foreground">
                      График показывает изменение массы (TG, зеленая линия), тепловой поток (DTA, синяя линия)
                      и температуру (красная пунктирная линия) в зависимости от времени.
                    </p>

                    <div className='mt-4'>
                      {/* <p className="mb-4"> */}
                      {/*  Термический анализ материала фена-стайлера показывает высокую термическую */}
                      {/*  стабильность до 200°C, что значительно превышает рабочие температуры устройства. */}
                      {/* </p> */}

                      <p className="mt-4">
                        Этот анализ подтверждает, что наш материал сохраняет надёжность и безопасность, даже если столкнётся с крайне маловероятными экстремальными условиями, превышающими обычные параметры работы фена.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible className="w-full mb-8">
          <AccordionItem value="ComparativeAnalysis">
            <AccordionTrigger className='text-left'>Сравнительный анализ характеристик</AccordionTrigger>
            <AccordionContent>
              <section className="mb-12">
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Сравнительный анализ характеристик</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Характеристика</TableHead>
                          <TableHead>Наш фен-стайлер</TableHead>
                          <TableHead>Средний фен-стайлер</TableHead>
                          <TableHead>Бюджетный фен-стайлер</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Термоустойчивость</TableCell>
                          <TableCell>До 250°C</TableCell>
                          <TableCell>До 200°C</TableCell>
                          <TableCell>До 180°C</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Контроль температуры</TableCell>
                          <TableCell>6 режимов</TableCell>
                          <TableCell>3 режима</TableCell>
                          <TableCell>2 режима</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Выделение токсичных веществ</TableCell>
                          <TableCell>Отсутствует</TableCell>
                          <TableCell>Минимальное</TableCell>
                          <TableCell>Умеренное</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Долговечность</TableCell>
                          <TableCell>{">10000 часов работы"}</TableCell>
                          <TableCell>5000-7000 часов работы</TableCell>
                          <TableCell>3000-5000 часов работы</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

              </section>

            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible className="w-full mb-8">
          <AccordionItem value="LaboratoryTest">
            <AccordionTrigger className='text-left'>Результаты лабораторных испытаний</AccordionTrigger>
            <AccordionContent>
              <section className="mb-12">
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl font-semibold">Результаты лабораторных
                      испытаний
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                      <TabsList className='flex flex-col md:flex-row w-full h-full gap-1'>
                        <TabsTrigger value="thermalStability" className='w-full'>Термоустойчивость</TabsTrigger>
                        <TabsTrigger value="temperatureControl" className='w-full'>Контроль температуры</TabsTrigger>
                        <TabsTrigger value="toxicEmissions" className='w-full'>Выделение токсичных веществ</TabsTrigger>
                        <TabsTrigger value="durability" className='w-full'>Долговечность</TabsTrigger>
                      </TabsList>
                      <div className="mt-20">
                        <TabsContent value="thermalStability">
                          <div className="space-y-4">
                            <div className='max-h-[30%] md:max-h-[400px] md:max-w-[400px]'>
                              <Image
                                src="/images/lab-photos/temperature-resistence.png"
                                alt="Тест на теплостойкость фена-стайлера"
                                width={200}
                                height={200}
                                className='!h-full !w-full'
                              />
                            </div>
                            <h3 className="text-lg font-semibold">Тест на термоустойчивость</h3>
                            <p>
                              Материал фена-стайлера выдерживает температуры до 250°C без значительных изменений в весе или свойствах. Начало термического разложения происходит при температуре выше 400°C, что далеко за пределами нормальной эксплуатации.
                            </p>

                            {/*  TODO */}

                          </div>
                        </TabsContent>
                        <TabsContent value="temperatureControl">
                          <div className="space-y-4">
                            <div className='max-h-[30%] md:max-h-[400px] md:max-w-[400px]'>
                              <Image
                                src="/images/lab-photos/temperature-control.png"
                                alt="Тест на теплостойкость фена-стайлера"
                                width={200}
                                height={200}
                                className='!h-full !w-full'
                              />
                            </div>
                            <h3 className="text-lg font-semibold">Тест на контроль температуры</h3>
                            <p>
                              Благодаря высококачественным термостойким материалам, фен автоматически контролирует температуру, предотвращая перегрев и защищая волосы от повреждений. В обычных условиях эксплуатации (до 150°C) материал сохраняет стабильность, что делает его безопасным для регулярного использования.
                            </p>

                          </div>
                        </TabsContent>
                        <TabsContent value="toxicEmissions">
                          <div className="space-y-4">
                            <div className='max-h-[30%] md:max-h-[400px] md:max-w-[400px]'>
                              <Image
                                src="/images/lab-photos/substances.png"
                                alt="Тест на теплостойкость фена-стайлера"
                                width={200}
                                height={200}
                                className='!h-full !w-full'
                              />
                            </div>
                            <h3 className="text-lg font-semibold">Тест на выделение токсичных веществ</h3>
                            <p>
                              Анализ показал, что при рабочих температурах материал не выделяет токсичных веществ. Начало термического разложения, которое может приводить к выделению нежелательных продуктов, начинается при экстремально высоких температурах, недостижимых в стандартных условиях использования.
                            </p>

                          </div>
                        </TabsContent>
                        <TabsContent value="durability">
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
                            <h3 className="text-lg font-semibold">Тест на долговечность</h3>
                            <p>
                              Высокая термоустойчивость и стабильность материала при рабочих температурах обеспечивают долговечность устройства. Материал остается неизменным на протяжении длительного срока службы, сохраняя свои характеристики даже при частом использовании.
                            </p>

                          </div>
                        </TabsContent>
                      </div>
                    </Tabs>
                  </CardContent>
                </Card>
                <div>
                  <div className='flex flex-col gap-3 mt-4'>
                    <YouTube iframeClassName='w-full' videoId="rDKutXmKfXQ" opts={opts} onReady={onPlayerReady} />

                    <YouTube iframeClassName='w-full' videoId="gTNsmAVRFxM" opts={opts} onReady={onPlayerReady} />
                  </div>
                  <div
                    className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mt-4 rounded-r-lg"
                  >
                    <h4 className="flex items-center font-semibold">
                      <AlertTriangle className="mr-2" />
                      Последствия использования неэффективных фенов
                    </h4>
                    <ul className="list-disc list-inside mt-2">
                      <li><b>Перегрев и повреждение волос:</b> Некачественные фены не контролируют температуру должным образом, что может привести к перегреву и серьезным повреждениям структуры волос.</li>
                      <li><b>Выделение токсичных веществ: </b>Дешевые материалы часто начинают разлагаться при более низких температурах, выделяя вредные для здоровья химические вещества.</li>
                      <li><b>Короткий срок службы:</b> Материалы низкого качества быстро изнашиваются, что приводит к поломкам устройства и дополнительным затратам на замену.</li>
                      <li><b>Риск ожогов:</b> Некачественные фены могут перегреваться и становиться небезопасными для пользователя, увеличивая риск ожогов кожи головы и рук..</li>
                    </ul>
                  </div>
                </div>
              </section>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

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
                      Результаты проведённых термических и токсикологических тестов подтверждают высокое качество материалов, использованных в нашем фене-стайлере. Ключевые преимущества устройства включают:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Исключительную термоустойчивость: материал сохраняет стабильность даже при температурах, превышающих 250°C, что значительно выше обычного температурного режима фена. Это делает ситуацию с перегревом маловероятной.</li>
                      <li>Эффективный контроль температуры: устройство безопасно при обычных температурах использования, что минимизирует риск повреждения волос и улучшает процесс укладки.</li>
                      <li>Отсутствие выделения токсичных веществ: при рабочих температурах отсутствует выделение вредных компонентов, что подтверждает безопасность устройства для здоровья.</li>
                      <li>Долговечность материалов: материал демонстрирует высокую стойкость при термических воздействиях, что гарантирует долговременное использование прибора без потери эффективности.</li>
                    </ul>
                    <p className="mt-4">
                      Выбирая наш фен-стайлер, вы получаете продукт, в котором каждая деталь продумана и
                      изготовлена
                      из материалов высочайшего качества, что подтверждено научными исследованиями и
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
                        <li key={index} className="flex items-center justify-between p-2 bg-gray-100 rounded">
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
      </main>

    </div>

  );
}
