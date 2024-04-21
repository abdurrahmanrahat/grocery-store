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
    deleteFishIntoDb: build.mutation({
      query: (fishId) => ({
        url: `/fish/${fishId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useCreateFishIntoDbMutation, useDeleteFishIntoDbMutation } =
  fishApi;
