/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { XmlNode as XmlNode } from "@webstudio-is/sdk-components-react";


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
let StaticSitemap = useResource("StaticSitemap_1")
let ghostPosts = useResource("ghostPosts_1")
let ghostAuthors = useResource("ghostAuthors_1")
return <XmlNode
tag={"urlset"}
xmlns={"http://www.sitemaps.org/schemas/sitemap/0.9"}>
{StaticSitemap?.data?.map?.((StaticItem: any, index: number) =>
<Fragment key={index}>
<XmlNode
tag={"url"}>
<XmlNode
tag={"loc"}>
{system?.origin + (StaticItem?.path == '/' ? '' : StaticItem?.path)}
</XmlNode>
<XmlNode
tag={"lastmod"}>
{StaticItem?.lastModified}
</XmlNode>
</XmlNode>
</Fragment>
)}
{ghostPosts?.data?.posts?.map?.((PostItem: any, index_1: number) =>
<Fragment key={index_1}>
<XmlNode
tag={"url"}>
<XmlNode
tag={"loc"}>
{`${system?.origin}/posts/${PostItem?.slug}`}
</XmlNode>
<XmlNode
tag={"lastmod"}>
{PostItem?.["updated_at"]}
</XmlNode>
</XmlNode>
</Fragment>
)}
{ghostAuthors?.data?.authors?.map?.((AuthorItem: any, index_2: number) =>
<Fragment key={index_2}>
<XmlNode
tag={"url"}>
<XmlNode
tag={"loc"}>
{`${system?.origin}/author/${AuthorItem?.slug}`}
</XmlNode>
</XmlNode>
</Fragment>
)}
{undefined?.data?.tags?.map?.((TagItem: any, index_3: number) =>
<Fragment key={index_3}>
<XmlNode
tag={"url"}>
<XmlNode
tag={"loc"}>
{`${system?.origin}/tag/${TagItem?.slug}`}
</XmlNode>
</XmlNode>
</Fragment>
)}
</XmlNode>
}


      export { Page }
    