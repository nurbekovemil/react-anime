import { gql } from "@apollo/client";

export const GET_ANIME_LIST = gql`
  query GetAnimeList($page: Int!, $perPage: Int!, $search: String) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        perPage
      }
      media(search: $search) {
        id
        title {
          english
          native
        }
        coverImage {
          medium
        }
      }
    }
  }
`;
