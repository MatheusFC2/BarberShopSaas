"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import { RefreshCcw, StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface BarbershopItemProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handleBookingClick = () => {
    setIsLoading(true);
    try {
      router.push(`/barbershops/${barbershop.id}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
      <CardContent className="px-1 py-0">
        <div className="w-full h-[159px] relative">
          <div className="absolute top-2 left-2 z-50">
            <Badge
              variant="secondary"
              className="opacity-90 flex items-center gap-1 top-3 left-3"
            >
              <StarIcon size={12} className="fill-primary text-primary" />
              <span>5,0</span>
            </Badge>
          </div>
          <Image
            alt={barbershop.name}
            src={barbershop.imageUrl}
            style={{ objectFit: "cover" }}
            fill
            className="rounded-2xl"
          />
        </div>
        <div className="px-2 pb-3">
          <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.name}
          </h2>
          <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.address}
          </p>
          {/* Loading logic */}
          {!isLoading && (
            <Button
              className="w-full mt-3"
              variant="secondary"
              onClick={handleBookingClick}
            >
              Reservar
            </Button>
          )}
          {isLoading && (
            <Button disabled variant="secondary" className="w-full mt-3 gap-1">
              <RefreshCcw className="animate-spin" size={15} />
              <p>Carregando</p>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default BarbershopItem;
