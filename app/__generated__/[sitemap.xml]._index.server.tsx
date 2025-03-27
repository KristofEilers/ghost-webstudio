/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  let ghostUrl = "https://ghost.kristofeilers.com"
  let ghostContentApiKey = "745dbfd14af3dfc6650b0d07f4"
  const StaticSitemap_1: ResourceRequest = {
    id: "5GFRjqTzS2zbBvFWqarYL",
    name: "Static Sitemap",
    url: "/$resources/sitemap.xml",
    method: "get",
    headers: [
    ],
  }
  const ghostPosts_1: ResourceRequest = {
    id: "umwlT6m5kmxGRItwXyMVW",
    name: "ghostPosts",
    url: `${ghostUrl}/ghost/api/content/posts/?key=${ghostContentApiKey}&filter=visibility:public`,
    method: "get",
    headers: [
    ],
  }
  const ghostAuthors_1: ResourceRequest = {
    id: "Ph2N_mMdFF-Fv8abQyoEH",
    name: "ghostAuthors",
    url: `${ghostUrl}/ghost/api/content/authors/?key=${ghostContentApiKey}&filter=visibility:public`,
    method: "get",
    headers: [
    ],
  }
  const _data = new Map<string, ResourceRequest>([
    ["StaticSitemap_1", StaticSitemap_1],
    ["ghostPosts_1", ghostPosts_1],
    ["ghostAuthors_1", ghostAuthors_1],
  ])
  const _action = new Map<string, ResourceRequest>([
  ])
  return { data: _data, action: _action }
}


      export const getPageMeta = ({
  system,
  resources,
}: {
  system: System;
  resources: Record<string, any>;
}): PageMeta => {
  return {
    title: "Untitled",
    description: "",
    excludePageFromSearch: true,
    language: "",
    socialImageAssetName: undefined,
    socialImageUrl: "",
    status: undefined,
    redirect: "",
    custom: [
    ],
  };
};


      type Params = Record<string, string | undefined>;
export const getRemixParams = ({ ...params }: Params): Params => {
  return params
}


      export const projectId = "d87953ec-0824-43d4-9fd1-e0f07f1186bb";

      export const contactEmail = "hello@webstudio.is";
    