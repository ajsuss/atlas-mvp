import { TimePrecision } from "@prisma/client";
import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

type CreateEventBody = {
  title?: string;
  slug?: string;
  startDate?: string;
  endDate?: string | null;
  precision?: TimePrecision;
  coordinates?: {
    lat?: number;
    lng?: number;
  };
  content?: {
    summary?: string;
    description?: string;
  };
  relationships?: {
    parentId?: string | null;
    childIds?: string[];
    relatedIds?: string[];
  };
};

export async function GET() {
  // TODO: Add auth, pagination, and full-text search integration.
  const events = await prisma.event.findMany({
    include: {
      parent: true,
      children: true,
      relatedTo: true,
      relatedFrom: true,
    },
    orderBy: { startDate: "asc" },
  });

  return NextResponse.json(events);
}

export async function POST(request: Request) {
  // TODO: Add robust schema validation (e.g. Zod) and rate-limiting.
  const body = (await request.json()) as CreateEventBody;

  if (
    !body.title ||
    !body.slug ||
    !body.startDate ||
    !body.precision ||
    body.coordinates?.lat === undefined ||
    body.coordinates?.lng === undefined ||
    !body.content?.summary ||
    !body.content?.description
  ) {
    return NextResponse.json(
      { error: "Missing required fields for event creation." },
      { status: 400 },
    );
  }

  const startDate = new Date(body.startDate);
  const endDate = body.endDate ? new Date(body.endDate) : null;

  if (Number.isNaN(startDate.getTime()) || (endDate && Number.isNaN(endDate.getTime()))) {
    return NextResponse.json({ error: "Invalid date format." }, { status: 400 });
  }

  const precision = body.precision.toUpperCase() as TimePrecision;

  if (!Object.values(TimePrecision).includes(precision)) {
    return NextResponse.json({ error: "Invalid time precision value." }, { status: 400 });
  }

  try {
    const event = await prisma.event.create({
      data: {
        title: body.title,
        slug: body.slug,
        startDate,
        endDate,
        precision,
        latitude: body.coordinates.lat,
        longitude: body.coordinates.lng,
        summary: body.content.summary,
        description: body.content.description,
        parent: body.relationships?.parentId
          ? {
              connect: { id: body.relationships.parentId },
            }
          : undefined,
        children: body.relationships?.childIds?.length
          ? {
              connect: body.relationships.childIds.map((id) => ({ id })),
            }
          : undefined,
        relatedTo: body.relationships?.relatedIds?.length
          ? {
              connect: body.relationships.relatedIds.map((id) => ({ id })),
            }
          : undefined,
      },
      include: {
        parent: true,
        children: true,
        relatedTo: true,
        relatedFrom: true,
      },
    });

    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    console.error("Failed to create event", error);
    return NextResponse.json({ error: "Failed to create event." }, { status: 500 });
  }
}
