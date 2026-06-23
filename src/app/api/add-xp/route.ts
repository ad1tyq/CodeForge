// app/api/add-xp/route.ts
import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route"

export async function POST(request: Request) {
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.email) {
        return new Response("Unauthorized", { status: 401 });
    }

    try {
        const { xp, bridgeLevel, sphinxLevel } = await request.json();

        const result = await prisma.user.upsert({
            where: { email: session.user.email },
            update: {
                xp,
                bridgeLevel,
                sphinxLevel,
            },
            create: {
                email: session.user.email,
                xp: xp || 0,
                bridgeLevel: bridgeLevel || 0,
                sphinxLevel: sphinxLevel,
                name: session.user.name || "", // optional if your schema allows null
            },
        });

        return NextResponse.json({ success: true, result });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { success: false, error: "Invalid JSON provided" },
            { status: 400 }
        );
    }
}

