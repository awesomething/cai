import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = "https://meetsupport.adaptable.app/"
export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL + url }),
    reducerPath: "main",
    tagTypes: [],
    endpoints: (build) => ({
      postAiText: build.mutation({ //query call to make a post api call to the server
        query: (payload) => ({
          url: "openai/text",
          method: "POST",
          body: payload,
        }),
      }),
      postAiCode: build.mutation({
        query: (payload) => ({
          url: "openai/code",
          method: "POST",
          body: payload,
        }),
      }),
      postAiAssist: build.mutation({
        query: (payload) => ({
          url: "openai/assist",
          method: "POST",
          body: payload,
        }),
      }),
      //remove LOGIN after test works
      postLogin: build.mutation({
        query: (payload) => ({
          url: "auth/login",
          method: "POST",
          body: payload,
        }),
      }),
      postSignUp: build.mutation({
        query: (payload) => ({
          url: "auth/signup",
          method: "POST",
          body: payload,
        }),
      }),
    }),
  });
  
  export const {
    usePostAiTextMutation,
    usePostAiCodeMutation,
    usePostAiAssistMutation,
    usePostLoginMutation,
    usePostSignUpMutation,
  } = api;