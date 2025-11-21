"use client";

import { useEffect, useRef, type ReactElement } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

import type { Unit } from "@/lib/data";

const renderStatus = (status: Status): ReactElement => {
  switch (status) {
    case Status.LOADING:
      return (
        <p className="text-sm text-muted-foreground">Carregando mapa...</p>
      );
    case Status.FAILURE:
      return (
        <p className="text-sm text-destructive">
          Não foi possível carregar o mapa agora.
        </p>
      );
    case Status.SUCCESS:
    default:
      return <></>;
  }
};

function MapInner({ units }: { units: Unit[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !ref.current ||
      typeof window === "undefined" ||
      !(window as typeof window & { google?: typeof google }).google?.maps
    ) {
      return;
    }
    const map = new window.google.maps.Map(ref.current, {
      center: { lat: units[0].coordinates[0], lng: units[0].coordinates[1] },
      zoom: 11,
      disableDefaultUI: true,
      styles: [
        {
          elementType: "geometry",
          stylers: [{ color: "#0f172a" }],
        },
        {
          elementType: "labels.text.fill",
          stylers: [{ color: "#94a3b8" }],
        },
      ],
    });

    units.forEach((unit) => {
      new window.google.maps.Marker({
        position: { lat: unit.coordinates[0], lng: unit.coordinates[1] },
        map,
        title: unit.name,
      });
    });
  }, [units]);

  return <div ref={ref} className="h-[420px] w-full rounded-2xl" />;
}

export function UnitsMap({ units }: { units: Unit[] }) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;

  if (!apiKey) {
    return (
      <div className="flex h-[420px] w-full flex-col items-center justify-center rounded-2xl border border-dashed border-primary/40 bg-primary/5 text-center text-sm text-primary">
        Configure a variável NEXT_PUBLIC_GOOGLE_MAPS_KEY para visualizar o mapa
        interativo.
      </div>
    );
  }

  return (
    <Wrapper apiKey={apiKey} render={renderStatus}>
      <MapInner units={units} />
    </Wrapper>
  );
}
