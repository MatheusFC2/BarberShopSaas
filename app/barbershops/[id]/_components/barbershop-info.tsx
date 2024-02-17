"use client";

import React from "react";
import { Button } from "@/app/_components/ui/button";
import { ChevronLeftIcon, MapPinIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { Barbershop } from "@prisma/client";
import { useRouter } from "next/navigation";

interface BarbershopInfoProps {
  barbershop: Barbershop;
}

function BarbershopInfo({ barbershop }: BarbershopInfoProps) {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };
  return (
    <div>
      <div className="h-[250px] w-full relative">
        <Button
          onClick={handleBackClick}
          className="absolute top-4 left-4 z-50"
          variant="outline"
          size="icon"
        >
          <ChevronLeftIcon />
        </Button>
        <Image
          src={barbershop.imageUrl}
          fill
          alt={barbershop.name}
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <div className="px-5 py-3">
        <h1 className="text-xl font-bold">{barbershop.name}</h1>
        <div className="flex items-center gap-1">
          <MapPinIcon className="text-primary" size={18} />
          <p className="">{barbershop.address}</p>
        </div>
        <div className="flex items-center gap-1">
          <StarIcon className="text-primary" size={18} />
          <p className="text-sm">5,0 (899 avaliações)</p>
        </div>
      </div>
    </div>
  );
}

export default BarbershopInfo;
