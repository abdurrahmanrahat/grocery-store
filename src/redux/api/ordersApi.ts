import { baseApi } from "./baseApi";

const ordersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createOrdersFishIntoDb: build.mutation({
      query: (cartFishes) => ({
        url: "/orders",
        method: "POST",
        body: cartFishes,
      }),
      invalidatesTags: ["ordersFish"],
    }),

    getAllOrdersFishesFromDb: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/orders",
        method: "GET",
        params: arg,
      }),
      providesTags: ["ordersFish"],
    }),

    updateOrderFishIntoDb: build.mutation({
      query: (payload) => {
        // console.log(payload);
        return {
          url: `/order/${payload.fishId}`,
          method: "PATCH",
          body: payload.updatedStatus,
        };
      },
      invalidatesTags: ["ordersFish"],
    }),

    deleteOrderFishIntoDb: build.mutation({
      query: (fishId) => ({
        url: `/orders/${fishId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ordersFish"],
    }),
  }),
});

export const {
  useCreateOrdersFishIntoDbMutation,
  useGetAllOrdersFishesFromDbQuery,
  useUpdateOrderFishIntoDbMutation,
  useDeleteOrderFishIntoDbMutation,
} = ordersApi;
