// app/api/favicon/route.js
import { promises as fs } from "fs";
import { getFaviconInfo } from "@/utils";
import dbLess from "@/dbLess";
import { NextResponse } from 'next/server';

export async function GET(req) {
  const theme = dbLess.settings.themeName;  // Fetch the current theme based on the request
  let faviconInfo = await getFaviconInfo(theme);

  try {
    const file = await fs.readFile(faviconInfo.path);
    const mimeType = faviconInfo.mimeType;
    return new NextResponse(file, {
      headers: {
        "Content-Type": mimeType,
      },
      status: 200,
    });
  } catch (error) {
    console.error("Error reading favicon:", error);
    return NextResponse.error("Favicon not found", 404);
  }
}
