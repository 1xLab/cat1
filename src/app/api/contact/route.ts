import { NextResponse, type NextRequest } from "next/server";

import { contactSchema } from "@/lib/validators";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  const forwarded =
    request.headers.get("x-forwarded-for") ??
    request.headers.get("x-real-ip") ??
    "";
  const ip = forwarded.split(",")[0]?.trim() || "unknown";
  const limit = rateLimit(ip);

  if (!limit.success) {
    return NextResponse.json(
      { message: "Muitas requisições. Tente novamente em instantes." },
      {
        status: 429,
        headers: {
          "Retry-After": String(limit.retryAfter ?? 60),
        },
      }
    );
  }

  const payload = await request.json();
  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Dados inválidos", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  console.log("Contato recebido", parsed.data);

  return NextResponse.json(
    { message: "Contato recebido com sucesso." },
    { status: 200 }
  );
}
