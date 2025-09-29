import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import coinApi from "../../services/coinApi";
import Loader from "../../components/loader";
import Error from "../../components/error";
import CoinHeader from "../../components/detail/coin-header";
import CoinPrice from "../../components/detail/coin-price";
import CoinChartSection from "../../components/detail/coin-chart-section";
import CoinStats from "../../components/detail/coin-stats";
import CoinDescription from "../../components/detail/coin-description";
import RefreshInfo from "../../components/home/refresh-info";

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(true);
  const [error, setError] = useState(null);
  const [coin, setCoin] = useState(null);
  const [historyLoading, setHistoryLoading] = useState(true);
  const [priceHistory, setPriceHistory] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState(7);

  // coin detaylarını çekip state'i güncelleyen fonksiyon
  const fetchCoinDetails = useCallback(
    (isRefreshing = false) => {
      if (isRefreshing) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      coinApi
        .getCoinDetails(id)
        .then((data) => {
          setCoin(data);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
          setRefreshing(false);
        });
    },
    [id]
  );

  // coin'in fiyat geçmişini geriricek fonksiyon
  const fetchPriceHistory = useCallback(() => {
    setHistoryLoading(true);

    coinApi
      .getPriceHistory(id, selectedPeriod)
      .then((data) => {
        setHistoryLoading(false);
        setPriceHistory(data);
      })
      .catch((err) => {
        setPriceHistory([]);
      })
      .finally(() => {
        setHistoryLoading(false);
      });
  }, [id, selectedPeriod]);

  // sayfa yüklenince coin detay verisini/ fiyat geçmişini çek
  useEffect(() => {
    fetchCoinDetails();
    fetchPriceHistory();
  }, []);

  // seçili zaman periyodu her değişitiğinde güncel değerleri al
  useEffect(() => {
    if (coin) {
      // seçili periyoda göre fiyat geçmişini al
      fetchPriceHistory();

      // coin detay verilini tekrar çek
      fetchCoinDetails(true);
    }
  }, [selectedPeriod]);

  console.log(priceHistory);

  // loading anında:
  if (loading) return <Loader />;

  // error anında:
  if (error) return <Error message={error} refetch={() => fetchCoinDetails()} />;

  return (
    <div className="space-y-6">
      <CoinHeader
        coin={coin}
        refetch={() => {
          fetchCoinDetails(true);
          fetchPriceHistory();
        }}
        refreshing={refreshing}
      />

      <CoinPrice coin={coin} />

      <CoinChartSection
        coin={coin}
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
        historyLoading={historyLoading}
        priceHistory={priceHistory}
      />

      <CoinStats coin={coin} />

      <CoinDescription coin={coin} />

      <RefreshInfo show={refreshing} />
    </div>
  );
};

export default Detail;
