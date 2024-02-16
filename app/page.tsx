"use client";

import { Card } from "@/components/card";
import { Center } from "@/components/center";
import React from "react";

export default function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <Center>
      <Card title="Zafar Saleem" subtitle="Front End Engineer" searchParams={searchParams} />
    </Center>
  )
}
