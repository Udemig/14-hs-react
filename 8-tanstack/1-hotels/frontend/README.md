# Kütüphaneler

- react-router-dom
- @tanstack/react-query
- formik
- yup
- axios
- lucide-react
- react-toastify
- tailwindcss

---

## useQuery

- Sayfa yüklendiği anda yapılacak sorgular için kullanılır.
- Cache'leme gibi özellikleri vardır.
- isLoading, error, data,refetch gibi veriler döner.

## useMutation

- Herhangi bir kullanıcı etkileşimde yapılacak sorgular için kullanılır.
- Cache özelliği yoktur.
- isPending,error,data,mutate verilerini döner.
- onSuccess: sorgu başarılı olunca çalışan fonksiyon
- onError: sorgu başarısız olunca çalışan fonksiyon

## useQueryClient.inValidateQueries();

- Daha önce yapılan sorguların cache'ini temizler.
- Yani bir elemanı sildik ve arayüzden kalkmasını istiyoruz bunun için invalidateQueries ile cache'i temizleriz, tanstack oto olarak api'dan güncel verileri alır arayüz güncellenir.
