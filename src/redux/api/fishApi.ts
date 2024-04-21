import { baseApi } from "./baseApi";

const fishApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createFishIntoDb: build.mutation({
      query: (fish) => ({
        url: "/fish",
        method: "POST",
        body: fish,
      }),
      invalidatesTags: ["fish"],
    }),

    getAllFishesFromDb: build.query({
      query: () => ({
        url: "/fishes",
        method: "GET",
        // params: arg, // arg: Record<string, any>
      }),
      providesTags: ["fish"],
    }),

    updateFishIntoDb: build.mutation({
      query: (payload) => {
        // console.log("from payload api", payload);
        return {
          url: `/fish/${payload.fishId}`,
          method: "PATCH",
          body: payload.updatedFish,
        };
      },
      invalidatesTags: ["fish"],
    }),

    deleteFishIntoDb: build.mutation({
      query: (fishId) => ({
        url: `/fish/${fishId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["fish"],
    }),
  }),
});

export const {
  useCreateFishIntoDbMutation,
  useGetAllFishesFromDbQuery,
  useUpdateFishIntoDbMutation,
  useDeleteFishIntoDbMutation,
} = fishApi;
