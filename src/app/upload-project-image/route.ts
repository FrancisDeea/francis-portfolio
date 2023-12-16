import { zfd } from "zod-form-data";
import { writeFile } from "node:fs/promises";
import { NextResponse } from "next/server";

const schema = zfd.formData({
  image: zfd.file(),
});

export async function POST(request: Request) {
  const { image } = schema.parse(await request.formData());
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
