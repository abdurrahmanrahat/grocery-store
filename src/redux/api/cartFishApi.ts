import { baseApi } from "./baseApi";

const cartFishApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createCartFishIntoDb: build.mutation({
      query: (cartFish) => ({
        url: "/cartFish",
        method: "POST",
        body: cartFish,
      }),
      invalidatesTags: ["cartFish"],
    }),

    getAllCartFishesFromDb: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/cartFishes",
        method: "GET",
        params: arg,
      }),
      providesTags: ["cartFish"],
    }),

    updateCartFishIntoDb: build.mutation({
      query: (payload) => {
        // console.log(payload);
        return {
          url: `/cartFish/${payload.fishId}`,
          method: "PATCH",
          body: payload.updatedQuantity,
        };
      },
      invalidatesTags: ["cartFish"],
    }),

    deleteCartFishIntoDb: build.mutation({
      query: (fishId) => ({
        url: `/cartFish/${fishId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cartFish"],
    }),
  }),
});

export const {
  useCreateCartFishIntoDbMutation,
  useGetAllCartFishesFromDbQuery,
  useDeleteCartFishIntoDbMutation,
  useUpdateCartFishIntoDbMutation,
} = cartFishApi;
