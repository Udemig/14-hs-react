/*
 ! Promise

 * Asenkron olan fonksiyonlerın return tiplerinde kullanılır
 * Promise<T> 
*/

interface IQuote {
  id: number;
  quote: string;
  author: string;
}

interface IQuoteResponse {
  quotes: IQuote[];
  total: number;
  skip: number;
  limit: number;
}

const fetchQuotes = async (): Promise<IQuoteResponse> => {
  const res = await fetch("https://dummyjson.com/quotes");

  return await res.json();
};

(async () => {
  console.log(await fetchQuotes());
})();

const createQuote = async (newQuote: IQuote): Promise<void> => {
  await fetch("https://dummyjson.com/quotes", {
    method: "POST",
    body: JSON.stringify(newQuote),
  });
};
