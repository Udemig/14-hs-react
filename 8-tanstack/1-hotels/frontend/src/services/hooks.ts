import { useQuery } from "@tanstack/react-query";
import api from "./api";
import type { FilterParams, PlacesResponse } from "../types";

/*
 ! useQuery
 * usQuery hook'una api isteğinin ismini (queryKey) ve api'a istek atan fonksiyonu (queryFn) verilir.

 * useQuery otomatik olarak sayfa yüklenin api isteğini atıyor ve gelen yanıta göre state yönetimi yapıyor.
  
 * isLoading, error ,data gibi state'leri bizim için yönetir ve gereksiz kod kalabalığını önler 

 * hata durumunda 3 kez api isteği atar 3'ünde de olumsuz yanıt alırsa error state'ini günceller
 * * anlık sunucu hatalarının önün geçer
  
 * useQuery() api'dan gelen cevabı cache'de saklar.
 * * aynı isteği birden fazla component'ta kullandığımızda ilk isteğin ardından atılan bütün isteklerde cache'deki veriyi kullanır.
 * * bununla redux ve context gibi stat yönetim araçlarına asenkron state yönetimi için gerek duyulmaz
 */

export const useGetPlaces = (params?: FilterParams) =>
  useQuery({
    queryKey: ["places", params], // params her değiştiğinde tekrar api isteği at
    queryFn: () => api.get<PlacesResponse>("/places", { params }),
    select: (res) => res.data.places, // data state'inde tutulacak veriyi belirle
    retry: 2, // hata durumunda kaç kez tekrar deneme yapılacak
    retryDelay: 1000, // tekrar denemeler arası bekleme süresi
  });
