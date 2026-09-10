import api from "@/lib/axios";
import { ApiResponse } from "@/types/api";
import { PaginatedPosts } from "@/types/post";

interface PostFilters {
  page?: number;
  search?: string;
  status?: string;
  category?: string;
}

export async function getPosts(filters: PostFilters) {
  const response = await api.get<ApiResponse<PaginatedPosts>>(
    "/admin/posts",
    {
      params: filters,
    }
  );

  return response.data.data;
}

export async function deletePost(id: number) {
  await api.delete(`/admin/posts/${id}`);
}