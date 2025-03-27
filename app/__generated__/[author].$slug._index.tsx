/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Fragment as Fragment_1, HtmlEmbed as HtmlEmbed, Box as Box, Image as Image, Heading as Heading, Text as Text, Paragraph as Paragraph, Slot as Slot, List as List, ListItem as ListItem } from "@webstudio-is/sdk-components-react";
import { Body as Body, Link as Link } from "@webstudio-is/sdk-components-react-router";


      export const siteName = undefined;

      export const breakpoints = [{"id":"kBU-ndZyD74iBxUq4ZrFa"},{"id":"M1wjUDF6E5IlYq1Eta-27","maxWidth":991},{"id":"w789xAsYCMsxcjo966IiB","maxWidth":767},{"id":"uYpSLwN-3EVACZ1DxfZ5a","maxWidth":479},{"id":"k300sB-D2nXLTiqdqMWTJ","minWidth":1440}];

      export const favIconAsset: string | undefined =
        undefined;

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        []

      export const pageBackgroundImageAssets: string[] =
        []

      

      const Page = (_props: { system: any; }) => {
const system = _props.system;
let ghostAuthor = useResource("ghostAuthor_1")
let ghostPosts = useResource("ghostPosts_1")
return <Body
className={`w-body`}>
<Box
className={`w-box`}>
{(ghostAuthor?.data?.authors?.[0]?.["cover_image"] ? true : false) &&
<Image
src={ghostAuthor?.data?.authors?.[0]?.["cover_image"]}
loading={"eager"}
alt={"\"\""}
className={`w-image`} />
}
<Heading
className={`w-heading`}>
{ghostAuthor?.data?.authors?.[0]?.name}
</Heading>
{(ghostAuthor?.data?.authors?.[0]?.["profile_image"] ? true : false) &&
<Image
src={ghostAuthor?.data?.authors?.[0]?.["profile_image"]}
alt={"Picture of " + ghostAuthor?.data?.authors?.[0]?.name}
width={100}
height={100}
optimize={false}
loading={"lazy"}
className={`w-image`} />
}
{(ghostAuthor?.data?.authors?.[0]?.location ? true : false) &&
<Text
className={`w-text`}>
{ghostAuthor?.data?.authors?.[0]?.location}
</Text>
}
{(ghostAuthor?.data?.authors?.[0]?.bio ? true : false) &&
<Paragraph
className={`w-paragraph c7s2hlj c11ffrb9`}>
{ghostAuthor?.data?.authors?.[0]?.bio}
</Paragraph>
}
<Box
className={`w-box cl8nbvs cc4fdnq crwtfvo`}>
{(ghostAuthor?.data?.authors?.[0]?.website ? true : false) &&
<Link
href={ghostAuthor?.data?.authors?.[0]?.website}
target={"_blank"}
aria-label={`${ghostAuthor?.data?.authors?.[0]?.name}'s Website`}
className={`w-link cx1pgud`}>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-globe\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20\"></path><path d=\"M2 12h20\"></path></svg>"}
className={`w-html-embed`} />
</Fragment_1>
</Slot>
</Link>
}
{(ghostAuthor?.data?.authors?.[0]?.facebook ? true : false) &&
<Link
href={ghostAuthor?.data?.authors?.[0]?.facebook}
target={"_blank"}
aria-label={`${ghostAuthor?.data?.authors?.[0]?.name}'s Facebook`}
className={`w-link cx1pgud`}>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<svg viewBox=\"200 200 1000 1000\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1200 700c0-276.1-223.9-500-500-500S200 423.9 200 700c0 234.5 161.4 431.2 379.2 485.3V852.8H476.1V700h103.1v-65.8c0-170.2 77-249.1 244.1-249.1 31.7 0 86.3 6.2 108.7 12.4V536c-11.8-1.2-32.3-1.8-57.8-1.8-81.9 0-113.6 31-113.6 111.8v54h163.3l-28.1 152.8H760.6v343.5C1008.1 1166.4 1200 955.6 1200 700z\" style=\"fill:#0866ff\"></path><path d=\"M895.8 852.8 923.9 700H760.6v-54c0-80.8 31.7-111.8 113.6-111.8 25.5 0 46 .6 57.8 1.8V397.5c-22.4-6.2-77-12.4-108.7-12.4-167.1 0-244.1 78.9-244.1 249.1V700H476.1v152.8h103.1v332.5c38.7 9.6 79.1 14.7 120.8 14.7 20.5 0 40.7-1.3 60.6-3.7V852.8z\" style=\"fill:#fff\"></path></svg>"}
className={`w-html-embed`} />
</Fragment_1>
</Slot>
</Link>
}
{(ghostAuthor?.data?.authors?.[0]?.twitter ? true : false) &&
<Link
href={"https://x.com/" + ghostAuthor?.data?.authors?.[0]?.twitter}
target={"_blank"}
aria-label={`${ghostAuthor?.data?.authors?.[0]?.name}'s X`}
className={`w-link cx1pgud`}>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<svg viewBox=\"0 0 1200 1227\" width=\"100%\" height=\"100%\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#000\" d=\"M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z\"></path></svg>"}
className={`w-html-embed`} />
</Fragment_1>
</Slot>
</Link>
}
</Box>
{(ghostPosts?.data?.posts?.[0] ? true : false) &&
<>
{ghostPosts?.data?.posts?.map?.((PostItem: any, index: number) =>
<Fragment key={index}>
<Box
tag={"article"}
className={`w-box`}>
<Link
href={"/posts/" + PostItem?.slug}
className={`w-link c18a4xf4`}>
<Heading
tag={"h2"}
className={`w-heading`}>
{PostItem?.title}
</Heading>
<Image
src={PostItem?.["feature_image"]}
alt={PostItem?.["feature_image_alt"] || PostItem?.["feature_image_caption"] || ""}
className={`w-image c1ie16x2`} />
</Link>
</Box>
</Fragment>
)}
</>
}
{(// Hide pagination if there is neither a next or previous page.
(ghostPosts?.data?.meta?.pagination?.prev && true || false) || (ghostPosts?.data?.meta?.pagination?.next && true || false)) &&
<Box
tag={"nav"}
aria-label={"pagination navigation"}
className={`w-box`}>
<List
className={`w-list c19lbjgt cyg4fnw cl8nbvs c18qdvfs c3h134b`}>
{(ghostPosts?.data?.meta?.pagination?.prev && true || false) &&
<ListItem
className={`w-list-item`}>
<Link
href={""}
aria-label={"Go to first page"}
aria-current={"false"}
className={`w-link`}>
{"First"}
</Link>
</ListItem>
}
{(ghostPosts?.data?.meta?.pagination?.prev && true || false) &&
<ListItem
className={`w-list-item`}>
<Link
href={// Don't show ?page=1. Using empty string defaults to current path.
+system?.search?.page - 1 == 1 ? '' : `?page=${+system?.search?.page - 1}`
}
aria-label={`Go to previous page, page ${+system?.search?.page - 1}`}
aria-current={"false"}
className={`w-link`}>
{"Previous"}
</Link>
</ListItem>
}
{(ghostPosts?.data?.meta?.pagination?.next && true || false) &&
<ListItem
className={`w-list-item`}>
<Link
href={`?page=${ +(system?.search?.page || 1) + 1 }`
}
aria-label={`Go to next page, page ${+ghostPosts?.search?.page + 1 || 2}`}
aria-current={"false"}
className={`w-link`}>
{"Next"}
</Link>
</ListItem>
}
</List>
</Box>
}
<HtmlEmbed
code={`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "${ghostAuthor?.data?.authors?.[0]?.name}",
    "identifier": "${ghostAuthor?.data?.authors?.[0]?.id}",
    "description": "${ghostAuthor?.data?.authors?.[0]?.bio}",
    "image": "${ghostAuthor?.data?.authors?.[0]?.["profile_image"]}"
  }
}
</script>`}
className={`w-html-embed`} />
</Box>
</Body>
}


      export { Page }
    