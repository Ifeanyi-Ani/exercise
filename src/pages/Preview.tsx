import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useParams } from "react-router-dom";
import baseUrl from "@/apis/baseUrl";

const SlideItem = ({ image, index }: { image?: any; index?: number }) => {
  return (
    <CarouselItem>
      <div className="p-1">
        <Card>
          <CardContent className="h-[400px] p-1">
            {image ? (
              <img
                src={image.url}
                alt={`${index}` || "slide image"}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full"></div>
            )}
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
};

const Preview = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [company, setCompany] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await baseUrl.get("/vendors");
        const data = await response.data.data;
        const filteredData = data?.filter(
          (data) => Number(data.id) === Number(id),
        );
        setCompany(filteredData[0]);
      } catch (error) {
        console.error(error);
        return [];
      }
    };
    if (isLoading) {
      getData();
      setIsLoading(false);
    }
  }, [isLoading, company, id]);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {company?.images?.length > 1 ? (
            company?.images?.map((item, index) => (
              <SlideItem key={index} image={item} index={index} />
            ))
          ) : company?.images?.length === 1 ? (
            <SlideItem image={company.images} />
          ) : (
            <SlideItem />
          )}
          <div className="absolute -bottom-0 left-20 h-14 w-15">
            <img
              src={company?.dpUrl || ""}
              alt={company?.id}
              className="w-full h-full object-cover"
            />
          </div>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <h4 className="my-1">services</h4>
      <div className="flex justify-between flex-wrap gap-2">
        {company?.subServices?.map((service: any) => (
          <Card key={service.id} className="w-1/4 p-4">
            <CardTitle>{service?.subService?.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
            <CardFooter className="justify-end">N{service.price}</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Preview;
