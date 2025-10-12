import { useSelector } from "react-redux";
import styles from "./home.module.scss";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Card from "../../components/card";

const Home = () => {
  const { isLoading, error, jobs } = useSelector((store) => store.jobReducer);

  /*
 * Sorun
 Bir dizi içerisinde verileri status değerlerine göre gruplandırmak ve kategorize edilmiş diziler oluşturmak istiyoruz
 - elimdeki veri [{1},{1},{2},{3},{3}]

 * Çözüm
 Reducer dizi methodunu kullanarak dizi içerisindeki başvuru nesnelerini status değerlerine göre bir nesne içerissinde gruplandırmak
 - elde etmek istediğim: {1:[{},{}],2:[{}],3:[{},{}]}
*/
  const groupedJobs = jobs.reduce((object, job) => {
    // oluşturucağımız nesnede işin status değerine karşılık gelen bir dizi yoksa oluştur
    if (!object[job.status]) {
      object[job.status] = [];
    }

    // işin status değerine karşılık gelen diziye veriyi pushla
    object[job.status].push(job);

    // nesnenin son halini return et
    return object;
  }, {});

  if (isLoading) return <Loader />;

  if (error) return <Error message={error} />;

  return (
    <div className={styles.stack}>
      {/* 
      * Sorun
        Elimizdeki veri nesne tipinde ve bu nesnenin bütün değerlerini ekrana basmak istiyoruz

      * Çözüm 
        Object.entries aracılığı ile nesne formatındaki veriyi diziye çevirip ardından mapleriz
      */}
      {Object.entries(groupedJobs).map(([category, array], key) => (
        <div className={styles.group} key={key}>
          <h1>{category}</h1>

          <div className={styles.list}>
            {array.map((job, key) => (
              <div key={key}>
                <Card job={job} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
