import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";
import { Key } from "react";
import Header from "@/app/_components/header";

interface BarbershopDetailsPageProps {
  params: any;
}

export default async function BarbershopDetailsPage({
  params,
}: BarbershopDetailsPageProps) {
  if (!params.id) {
    // TODO rediferecionar para home page
    return null;
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  });

  if (!barbershop) {
    // TODO rediferecionar para home page
    return null;
  }

  return (
    <div>
      <BarbershopInfo barbershop={barbershop} />
      <div className="px-5 flex flex-col gap-4 py-6">
        {barbershop.services.map((service: { id: Key | null | undefined }) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
