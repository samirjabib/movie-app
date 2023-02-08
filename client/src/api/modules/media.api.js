const mediaEndpoints = {
    list: ({ mediaType, mediaCategory, page }) => `${mediaType}/${mediaCategory}?page=${page}`,
    detail: ({ mediaType, mediaId }) => `${mediaType}/detail/${mediaId}`,
    search: ({ mediaType, query, page }) => `${mediaType}/search?query=${query}&page=${page}`
  };

  
  export const mediaApi = {
    getList: async ({ mediaType, mediaCategory, page }) => {
      try {
        const response = await publicClient.get(
          `${mediaType}/${mediaCategory}?page=${page}`
        );

        console.log(response, ' response console log')
  
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
  
