import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../utils/types';
import './ArticleRow.scss';

type Props = {
  article: Article;
}

export const ArticleRow: React.FC<Props> = ({ article }) => {
  return (
    <tr key={article.description}>
      <td>
        <Link to={"/" + article.id}>
          <img
            src={article.image}
            className="article-img"
            alt=""
          />
        </Link>
      </td>

      <td>
        <Link to={"/" + article.id} className="table-link">
          {article.title?.length > 35 ? article.title.slice(0, 35) + '...' : article.title}
        </Link>
      </td>

      <td>
        <Link to={"/" + article.id} className="table-link">
          {article.source.name}
        </Link>
      </td>

      <td>
        <Link to={"/" + article.id} className="table-link">
          {article.description?.length > 35 ? article.description.slice(0, 35) + '...' : article.description}
        </Link>
      </td>

      <td>
        {article.publishedAt.slice(0, 10)}
      </td>

      <td>
        <a href={article.url}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvqijr5D4G5L7a1BirPgnUfWC-34YqNrkg4A&usqp=CAU"
            className="icon-link"
            alt=""
          />
        </a>
      </td>
    </tr>
  );
}
