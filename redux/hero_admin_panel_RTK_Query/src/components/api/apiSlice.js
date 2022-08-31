import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  tagTypes: ["heroes", "filters"],
  endpoints: (build) => ({
    getHeroes: build.query({
      query: () => "/heroes",
      providesTags: ["heroes"],
    }),
    getFilters: build.query({
      query: () => "/filters",
      providesTags: ["filters"],
    }),
    createHero: build.mutation({
      query: (hero) => ({ url: "/heroes", method: "POST", body: hero }),
      invalidatesTags: ["heroes"],
    }),
    deleteHero: build.mutation({
      query: (heroId) => ({ url: `/heroes/${heroId}`, method: "DELETE" }),
      invalidatesTags: ["heroes"],
    }),
  }),
});

export const {
  useGetFiltersQuery,
  useGetHeroesQuery,
  useDeleteHeroMutation,
  useCreateHeroMutation,
} = apiSlice;
