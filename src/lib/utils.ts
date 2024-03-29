import { uploadFile } from "@/services/projectServices";
import { Post } from "@prisma/client";

export async function handleSelected() {
  const input = document.getElementById("file") as HTMLInputElement;
  input.click();

  // This await promise declare a new eventlistener and does not resolve until a file is selected in client side.
  const formData: FormData = await new Promise((resolve) => {
    input.addEventListener("change", (e) => {
      const formData = new FormData();
      const file: File = (e.target as HTMLInputElement).files![0];
      formData.append("image", file);
      resolve(formData);
    });
  });

  try {
    const serverResponse = await uploadFile(formData);
    console.log(serverResponse);
    return serverResponse.url;
  } catch (error) {
    console.error(error);
  }
}

export async function technologiesToPSQLArray(array: string[]) {
  const result = ["{", "}"];
  for (let i = 0; i < array.length; i++) {
    if (i !== array.length - 1) {
      result.splice(result.length - 1, 0, array[i], ",");
    } else {
      result.splice(result.length - 1, 0, array[i]);
    }
  }
  return result.join("");
}

export function cleanString(str: string): string {
  return str
    .replace(/\s*,\s*/g, ",")
    .replace(/^,*|,*$/g, "")
    .replace(/,+/g, ",");
}

export function getSlug(str: string): string {
  return str.toLowerCase().replaceAll(" ", "-");
}

export function findByTitle(arr: Post[], slug: string): Post | undefined {
  return arr.find(
    (post) => post.title_es.toLowerCase() === slug.replaceAll("-", " ")
  );
}
