import publicClient from "../client/public.client";

const mediaEndpoints = {
    list: ({ mediaType, mediaCategory, page }) => `${mediaType}/${mediaCategory}?page=${page}`,
    detail: ({ mediaType, mediaId }) => `${mediaType}/detail/${mediaId}`,
    search: ({ mediaType, query, page }) => `${mediaType}/search?query=${query}&page=${page}`
  };

  
  export const mediaApi = {
    getList: async ({ mediaType, mediaCategory, page }) => {
      try {
        console.log(mediaType, mediaCategory, page)
        const response = await publicClient.get(
          `${mediaType}/${mediaCategory}?page=${page}`
        ); 
        console.log(response)
        return { response };
      } catch (err) { return { err }; }
    },
    getDetail: async ({ mediaType, mediaId }) => {
      try {
        const response = await privateClient.get(
          mediaEndpoints.detail({ mediaType, mediaId })
        );
  
        return { response };
      } catch (err) { return { err }; }
    },
    search: async ({ mediaType, query, page }) => {
      try {
        const response = await publicClient.get(
          mediaEndpoints.search({ mediaType, query, page })
        );
  
        return { response };
      } catch (err) { return { err }; }
    }
  };
  
