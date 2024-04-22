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
  useDeleteOrderFishIntoDbMutation,
} = ordersApi;
