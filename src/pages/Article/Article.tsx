import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import './Article.scss';

export const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const article = useAppSelector(state => state.news.items).find(item => item.id === (!!id ? +id : 1));

  if (!article) {
    navigate('/not-found-page');
  }

  console.log(article);

  return (
    <div className="article">
      <h1 className="text-center">{article?.title}</h1>

      <img
        src={article?.image}
        className="big-img"
        alt=""
      />

      <small>{article?.publishedAt.slice(0, 10)} </small>

      <p>{article?.description}</p>
    </div>
  );
}
