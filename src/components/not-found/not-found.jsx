import Footer from 'components/common/footer/footer';
import Header from 'components/common/header/header';
// import { Link } from 'react-router-dom';
// import styles from './not-found.module.css';
import * as S from './not-found.styled';


// function NotFound() {
//   return (
//     <div className={styles['page--not-found']}>
//       <Header/>
//       <main className={styles['page__main--not-found']}>
//         <div className={styles.container}>
//           <section className={styles['not-found']}>
//             <h1 className={styles['not-found__title']}>404. Page not found</h1>
//             <Link className={styles['not-found__link']} to="/">Back to the home page</Link>
//           </section>
//         </div>
//       </main>
//       <Footer/>
//     </div>
//   );
// }

const NotFound = () => (
  <S.Container>
    <Header/>
    <S.Main>
      <S.Section>
        <S.Title>404. Страница не найдена</S.Title>
        <S.LinkToMain>Вернуться на главную</S.LinkToMain>
      </S.Section>
    </S.Main>
    <Footer/>
  </S.Container>
)

export default NotFound;
