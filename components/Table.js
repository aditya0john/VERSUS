import { partners } from "@/lib/data";
import Image from "next/image";
import React from "react";

function Table() {
  return (
    // <table className="table">
    //   <tbody>
    //     <tr>
    //       <td>
    //         <article className="justify-center flex cursor-pointer">
    //           <Image
    //             width={200}
    //             height={200}
    //             class="con image-change-sm h-auto image-resize-sm"
    //             src="/images/IIIT GUWAHATI.jpeg"
    //             alt="image1"
    //           ></Image>
    //         </article>
    //       </td>
    //       <td>
    //         <article className="justify-center flex cursor-pointer">
    //           <Image
    //             width={200}
    //             height={200}
    //             class=" con image-change-sm h-auto image-resize-sm"
    //             src="/images/IIIT HYDRABAD.png"
    //             alt="image1"
    //           ></Image>
    //         </article>
    //       </td>
    //       <td>
    //         <article className="justify-center flex cursor-pointer">
    //           <Image
    //             width={200}
    //             height={200}
    //             class=" con image-change-sm h-auto image-resize-sm"
    //             src="/images/IIIT KOTA.png"
    //             alt="image1"
    //           ></Image>
    //         </article>
    //       </td>
    //       <td>
    //         <article className="justify-center flex cursor-pointer">
    //           <Image
    //             width={200}
    //             height={200}
    //             class=" con image-change-sm h-auto image-resize-sm"
    //             src="/images/IIITDM KURNOOL.jpg"
    //             alt="image1"
    //           ></Image>
    //         </article>
    //       </td>
    //     </tr>
    //   </tbody>

    //   <tbody>
    //     <tr>
    //       <td>
    //         <article className="justify-center flex cursor-pointer">
    //           <Image
    //             width={200}
    //             height={200}
    //             class=" con image-change-sm h-auto image-resize-sm"
    //             src="/images/IISER PUNE.jpg"
    //             alt="image1"
    //           ></Image>
    //         </article>
    //       </td>
    //       <td>
    //         <article className="justify-center flex cursor-pointer">
    //           <Image
    //             width={200}
    //             height={200}
    //             class=" con image-change-sm h-auto image-resize-sm"
    //             src="/images/VIT VELLORE.png"
    //             alt="image1"
    //           ></Image>
    //         </article>
    //       </td>
    //       <td>
    //         <article className="justify-center flex cursor-pointer">
    //           <Image
    //             width={200}
    //             height={200}
    //             class=" con image-change-sm h-auto image-resize-sm"
    //             src="/images/IISER TIRUPATI.jpg"
    //             alt="image1"
    //           ></Image>
    //         </article>
    //       </td>
    //       <td>
    //         <article className="justify-center flex cursor-pointer">
    //           <Image
    //             width={200}
    //             height={200}
    //             class=" con image-change-sm h-auto image-resize-sm"
    //             src="/images/IIT BANGALORE.png"
    //             alt="image1"
    //           ></Image>
    //         </article>
    //       </td>
    //     </tr>
    //   </tbody>
    //   <tbody>
    //     <tr>
    //       <td>
    //         <article className="justify-center flex cursor-pointer">
    //           <Image
    //             width={200}
    //             height={200}
    //             class=" con image-change-sm h-auto image-resize-sm"
    //             src="/images/IIT BOMBAY.png"
    //             alt="image1"
    //           ></Image>
    //         </article>
    //       </td>
    //       <td>
    //         <article className="justify-center flex cursor-pointer">
    //           <Image
    //             width={200}
    //             height={200}
    //             class=" con image-change-sm h-auto image-resize-sm"
    //             src="/images/SRM.png"
    //             alt="image1"
    //           ></Image>
    //         </article>
    //       </td>
    //       <td>
    //         <article className="justify-center flex cursor-pointer">
    //           <Image
    //             width={200}
    //             height={200}
    //             class=" con image-change-sm h-auto image-resize-sm"
    //             src="/images/IIT GUWAHATI.png"
    //             alt="image1"
    //           ></Image>
    //         </article>
    //       </td>
    //       <td>
    //         <article className="justify-center flex cursor-pointer">
    //           <Image
    //             width={200}
    //             height={200}
    //             class=" con image-change-sm h-auto image-resize-sm"
    //             src="/images/IIT KANPUR.png"
    //             alt="image1"
    //           ></Image>
    //         </article>
    //       </td>
    //     </tr>
    //   </tbody>
    //   <tbody>
    //     <tr>
    //       <td>
    //         <article className="justify-center flex cursor-pointer">
    //           <Image
    //             width={200}
    //             height={200}
    //             class=" con image-change-sm h-auto image-resize-sm"
    //             src="/images/IIT TIRUPATI.jpg"
    //             alt="image1"
    //           ></Image>
    //         </article>
    //       </td>
    //       <td>
    //         <article className="justify-center flex cursor-pointer">
    //           <Image
    //             width={200}
    //             height={200}
    //             class=" con image-change-sm h-auto image-resize-sm"
    //             src="/images/INDIAN MARITIME UNIVERSITY.png"
    //             alt="image1"
    //           ></Image>
    //         </article>
    //       </td>
    //       <td>
    //         <article className="justify-center flex cursor-pointer">
    //           <Image
    //             width={200}
    //             height={200}
    //             class=" con image-change-sm h-auto image-resize-sm"
    //             src="/images/LPU.png"
    //             alt="image1"
    //           ></Image>
    //         </article>
    //       </td>
    //       <td>
    //         <article className="justify-center flex cursor-pointer">
    //           <Image
    //             width={200}
    //             height={200}
    //             class=" con image-change-sm h-auto image-resize-sm"
    //             src="/images/UPES.png"
    //             alt="image1"
    //           ></Image>
    //         </article>
    //       </td>
    //     </tr>
    //   </tbody>
    // </table>

    <div className="my-10 w-[80vw] grid grid-cols-4 items-center justify-center">
      {partners.map((img) => (
        <div key={img.src} className="border-y-2 py-2">
          <Image
            width={200}
            height={200}
            class="object-contain con h-[100px] w-[300px] mix-blend-multiply"
            src={img.src}
            alt="partner images"
          />
        </div>
      ))}
    </div>
  );
}

export default Table;
