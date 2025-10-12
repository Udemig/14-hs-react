import { Calendar, Delete, Edit, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import StatusBadge from "./status-badge";
import styles from "./card.module.scss";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/tr";
import api from "../../utils/api";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { deleteJob } from "../../redux/slices/job-slice";

dayjs.extend(relativeTime);
dayjs.locale("tr");

const Card = ({ job }) => {
  const dispatch = useDispatch();

  // tarihi formatla
  const date =
    job.status === "Devam Ediyor"
      ? dayjs(job.date).fromNow() + " başvuruldu"
      : job.status === "Kabul Edildi"
      ? dayjs(job.accept_date).format("DD-MMMM") + " 'da kabul edildi"
      : job.status === "Reddedildi"
      ? dayjs(job.rejection_date).format("DD-MMMM") + " 'da reddedildi"
      : dayjs(job.interview_date).format("DD-MMMM HH:mm") + " 'da mülakat";

  // sil butonuna tıklanınca
  const handleDelete = () => {
    if (!confirm("Silmek istediğinizden emin misiniz?")) return;

    api
      .delete(`/jobs/${job.id}`)
      .then(() => {
        toast.success("Başvuru silindi");
        dispatch(deleteJob(job.id));
      })
      .catch(() => {
        toast.error("Silme işlemi başarısız");
      });
  };

  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <div>
          <h1>
            <span>{job.company[0]}</span>
          </h1>

          <div className={styles.info}>
            <h2>{job.position}</h2>
            <h4>{job.company}</h4>
          </div>
        </div>

        <div className={styles.buttons}>
          <Link to={`/edit/${job.id}`}>
            <button>
              <Edit />
            </button>
          </Link>

          <button onClick={handleDelete}>
            <Delete />
          </button>
        </div>
      </div>

      <div className={styles.line} />

      <div className={styles.body}>
        <p>
          <MapPin />
          {job.location}
        </p>

        <div className={styles.bottom}>
          <span>
            <Calendar />
            {date}
          </span>

          <StatusBadge status={job.type} />
        </div>
      </div>
    </div>
  );
};

export default Card;
