import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getNews } from '../../api/news';
import { ArticleRow } from '../../components/ArticleRow/ArticleRow';
import { BackDrop } from '../../components/BackDrop/BackDrop';
import { FilterMenu } from '../../components/FilterMenu/FilterMenu';
import { Filters } from '../../components/Filters/Filters';
import { Loader } from '../../components/Loader/Loader';
import { Pagination } from '../../components/Pagination/Pagination';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { setNewsAC } from '../../redux/newsReducer';
import './Articles.scss';

export const Articles = () => {
  const [isFilter, setIsFilter] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const articles = useAppSelector(state => state.news.items);
  const pageParams = searchParams.get('page');
  const currentPage = pageParams ? +pageParams : 1;
  const countryParams = searchParams.get('country');
  const currentCountry = countryParams ? countryParams : 'ua';
  const categoryParams = searchParams.get('category');
  const currentCategory = categoryParams ? categoryParams : 'general';
  const queryParams = searchParams.get('query');
  const currentQuery = queryParams ? queryParams : '';
  const [query, setQuery] = useState(currentQuery);
  const [country, setCountry] = useState(currentCountry);
  const [category, setCategory] = useState(currentCategory);
  const dispatch = useAppDispatch();
  const rest = (): string => {
    let str = '';

    if (!!country) {
      str += `&country=${country}`;
    }

    if (!!query) {
      str += `&query=${query}`;
    }

    if (!!category) {
      str += `&category=${category}`;
    }

    return str;
  }

  const changePageHandler = (page: number) => {
    let params: any = {
      query,
      country,
      category,
      page: page.toString(),
    }

    if (!query) {
      let { query, ...newParams} = params;

      params = newParams;
    } 
    
    if (category === 'general') {
      let { category, ...newParams} = params;

      params = newParams;
    }

    setSearchParams(params);
  }

  const searchHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') {
      return;
    }
    
    createNewParams();
  }

  const applyFiltersHandler = () => {
    setIsFilter(false);
    createNewParams();
  }

  const createNewParams = () => {
    let params: any = {
      query,
      country,
      category,
    }

    if (!query) {
      let { query, ...newParams} = params;

      params = newParams;
    } 
    
    if (category === 'general') {
      let { category, ...newParams} = params;

      params = newParams;
    }

    setSearchParams(params);
  }

  useEffect(() => {
    setIsLoading(true);

    getNews(currentCountry, currentCategory, currentQuery, currentPage)
      .then((data) => {
        const maxPage = Math.ceil(data.data.totalResults / 20);
        const currentArticles = data.data.articles.map((a, i) => ({ ...a, id: +new Date() + i }));

        setTotalPages(maxPage);
        dispatch(setNewsAC(currentArticles));
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, [currentCountry, currentCategory, currentQuery, currentPage]);

  return (
    <div className="articles">
      <Filters
        query={query}
        setQuery={setQuery}
        setIsFilter={setIsFilter}
        searchHandler={searchHandler}
      />

      {isLoading ? (
        <Loader />
      ) : (
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Authors</th>
                <th>Description</th>
                <th>Publication date</th>
                <th>Original URL</th>
              </tr>
            </thead>

            <tbody>
              {articles.map(article => (
                <ArticleRow key={article.id} article={article} />
              ))}
            </tbody>
          </table>
      )}

      <div className="pagination-container">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onChangePageHandler={changePageHandler}
          rest={rest()}
        />
      </div>

      <FilterMenu
        isFilter={isFilter}
        country={country}
        setCountry={setCountry}
        category={category}
        setCategory={setCategory}
        applyFiltersHandler={applyFiltersHandler}
      />

      {isFilter && (
        <BackDrop onClick={() => setIsFilter(false)} />
      )}
    </div>
  );
}
