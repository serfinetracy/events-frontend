import Link from "next/link";
import Image from "next/image";
import styles from "../styles/EventItem.module.css";

export default function EventItem(props) {
    return (

        <div className={styles.event}>
            <div className={styles.img}>
            {/* <h1>{props.eventData.performers}</h1> */}
            <Image
         src={
             props.eventData.image
             ? props.eventData.image
             : "/images/sample/event1.jpg"
        }
        width={178}
        height={100}
        />
            </div>

            <div className={styles.info}>
                <span>
                    {props.eventData.date}
                    </span>

                    {/* to make time to be besides date */}
                <h3>{props.eventData.name}</h3>
            </div>
            <div className={styles.link}>
                <Link href={`/events/${props.eventData.slug}`}>
                <a>Details </a>
                </Link>
            </div>
        </div>

    );

}