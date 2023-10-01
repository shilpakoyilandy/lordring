import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../main";
export const charactorList = (page = 1, limit = 10, formField) => {
  return useQuery({
    queryKey: ["charactorlist", page, limit, JSON.stringify(formField)],
    queryFn: () =>
      axiosInstance
        .get(
          `/character?page=${page}&limit=${limit}${
            formField.sort ? "&sort=name:" + formField.sort : ""
          }&gender=${formField.gender ?? ""}&name=${
            formField.name ?? ""
          }&race=${formField.race ?? ""}`
        )
        .then((data) => {
          return data?.data;
        }),
  });
};
