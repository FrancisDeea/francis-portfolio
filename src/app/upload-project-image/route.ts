import { imageServerSchema } from "@/lib/zodSchemas";
import { writeFile } from "node:fs/promises";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { image } = imageServerSchema.parse(await request.formData());
  const buffer = await image.arrayBuffer();

  try {
    await writeFile(`public/project-images/${image.name}`, Buffer.from(buffer));
    console.log("La imagen se ha guardado correctamente.");
    return NextResponse.json({ message: "File has been saved successfully!", url: image.name });
  } 
  catch (err) {
    return NextResponse.json(
      { error: "File can not been saved on server!" },
      { status: 500 }
    );
  }
}
