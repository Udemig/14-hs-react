import { useEffect, useState } from "react";
import Input from "../../components/input";
import { statusOptions, typeOptions } from "../../utils/constants";
import styles from "./form.module.scss";
import api from "../../utils/api";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createJob, updateJob } from "../../redux/slices/job-slice";

const Form = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedStatus, setSelectedStatus] = useState();
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    // oluşturma modundaysa fonksiyon dursun
    if (!id) return setEditItem(null);

    // düzenlenecek başvurunun verisini api'dan al
    api.get(`/jobs/${id}`).then((res) => {
      setEditItem(res.data);
      setSelectedStatus(res.data.status);
    });
  }, []);

  // form gönderilince
  const handleSubmit = (e) => {
    // sayfa yenilmesini engelle
    e.preventDefault();

    // formadaki verilere bir nesne içerisinde eriş
    const formData = new FormData(e.target);
    const jobData = Object.fromEntries(formData.entries());

    if (id) {
      // api'a başvuruyu güncellemek için istek at
      api
        .patch(`/jobs/${id}`, jobData)
        .then((res) => {
          dispatch(updateJob(res.data));

          toast.success("Başvuru güncellendi");

          navigate("/");
        })
        .catch(() => toast.error("Başvuru güncellenemedi"));
    } else {
      // api'a yeni başvuru oluşturmak için istek at
      api
        .post("/jobs", jobData)
        .then((res) => {
          // reducer'a haber ver
          dispatch(createJob(res.data));

          // bildirim gönder
          toast.success("Başvuru oluşturuldu");

          // başvurular sayfasına yönlendir
          navigate("/");
        })
        .catch(() => toast.error("Başvuru oluşturulamadı"));
    }
  };

  // seçilen status değerine göre tarih label'ını belirle
  const dateLabel =
    selectedStatus === "Mülakat"
      ? "Mülakat Tarihi"
      : selectedStatus === "Reddedildi"
      ? "Reddedilme Tarihi"
      : selectedStatus === "Kabul Edildi"
      ? "Kabul Edilme Tarihi"
      : "Başvuru Tarihi";

  // seçilen status değerine göre tarih name'ini belirle
  const dateName =
    selectedStatus === "Mülakat"
      ? "interview_date"
      : selectedStatus === "Reddedildi"
      ? "rejection_date"
      : selectedStatus === "Kabul Edildi"
      ? "accept_date"
      : "date";

  // seçilen status deüerine göre date type'ını belirle
  const dateType = selectedStatus === "Mülakat" ? "datetime-local" : "date";

  return (
    <div className={styles.formContainer}>
      <section>
        <h2>{id ? "Başvuruyu Düzenle" : "Başvuru Oluştur"}</h2>

        <form onSubmit={handleSubmit}>
          <Input label="Pozisyon" name="position" value={editItem?.position} />
          <Input label="Şirket" name="company" value={editItem?.company} />
          <Input label="Lokasyon" name="location" value={editItem?.location} />
          <Input
            label="Durum"
            name="status"
            options={statusOptions}
            onChange={(e) => setSelectedStatus(e.target.value)}
            value={editItem?.status}
          />
          <Input label="Tür" name="type" options={typeOptions} value={editItem?.type} />
          <Input label={dateLabel} name={dateName} type={dateType} value={editItem?.[dateName]} />

          <div className={styles.buttonWrapper}>
            <button>{id ? "Kaydet" : "Oluştur"}</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Form;
