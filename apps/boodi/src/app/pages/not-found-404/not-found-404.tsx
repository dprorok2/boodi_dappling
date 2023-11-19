import styles from './not-found-404.module.scss';

/* eslint-disable-next-line */
export interface NotFound404Props {}

export function NotFound404(props: NotFound404Props) {
  return (
    <div className={styles['container']}>
      <h1>404 Not Found</h1>
    </div>
  );
}

export default NotFound404;
