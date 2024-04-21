import { baseApi } from "./baseApi";

const fishApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createFishIntoDb: build.mutation({
      query: (fish) => ({
        url: "/fish",
        method: "POST",
        body: fish,
      }),
    }),
  }),
});

export const { useCreateFishIntoDbMutation } = fishApi;
