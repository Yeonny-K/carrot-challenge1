import BillionaryDetails from "../../../components/detail";
import styles from "../../../styles/person.module.css"

interface IParams {
    params: { id: string };
  }

export default function Detail({params: {id}}) {
        return (
            <div className={styles.person}>
                <BillionaryDetails id={id} />
            </div>
        );
}