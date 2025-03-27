/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Body as Body, RemixForm as RemixForm, Link as Link } from "@webstudio-is/sdk-components-react-router";
import { Box as Box, Heading as Heading, Input as Input, Button as Button, Image as Image, List as List, ListItem as ListItem } from "@webstudio-is/sdk-components-react";


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
let ghostPosts = useResource("ghostPosts_1")
return <Body
className={`w-body`}>
<Box
className={`w-box`}>
<Heading
className={`w-heading`}>
{"Posts"}
</Heading>
<RemixForm
className={`w-form`}>
<Input
placeholder={"Search..."}
name={"search"}
aria-label={"search blog"}
className={`w-text-input`} />
<Button
type={"submit"}
className={`w-button`}>
{"Search"}
</Button>
</RemixForm>
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
optimize={false}
className={`w-image c1ie16x2`} />
</Link>
</Box>
</Fragment>
)}
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
aria-label={`Go to next page, page ${+system?.search?.page + 1 || 2}`}
aria-current={"false"}
className={`w-link`}>
{"Next"}
</Link>
</ListItem>
}
</List>
</Box>
}
</Box>
</Body>
}


      export { Page }
    