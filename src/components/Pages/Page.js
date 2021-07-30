import React, { useEffect, useState } from 'react';
import ShowList from '../ShowList/ShowList';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import Loading from '../Loading/Loading';
import { useFetch } from '../../api/useFetch';
import './Page.css';
const url = 'https://api.tvmaze.com/shows';
const Page = () => {
  const { isLoading, data: shows, isError } = useFetch(url);
  const [totalPages, setTotalPages] = useState(0);
  const [pageArr, setPageArr] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  const [showlist, setshowlist] = useState([]);
  const [pageList, setPagelist] = useState([]);

  useEffect(() => {
    setshowlist(shows.data);
    if (shows.data) {
      const pno = Math.ceil(shows.data.length / 12);
      setTotalPages(pno);
      for (let i = 0; i < pno; i++) {
        pageArr.push(i + 1);
      }
      setPagelist(shows.data.slice(pageNo, pageNo + 12));
    }
  }, [shows]);
  useEffect(() => {
    setPagelist(showlist.slice(pageNo * 12, pageNo * 12 + 12));
  }, [pageNo]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <ShowList
            showlists={pageList}
            isLoading={isLoading}
            isError={isError}
          />
          <div className="page-container">
            <span
              className="page-btn"
              onClick={() => {
                if (pageNo > 0) setPageNo(pageNo - 1);
              }}
            >
              <BiLeftArrow />
            </span>
            {pageArr.slice(pageNo, pageNo + 5).map((page, index) => {
              return (
                <span
                  key={index}
                  className="pages"
                  onClick={() => setPageNo(page - 1)}
                >
                  {page}
                </span>
              );
            })}
            <span
              className="page-btn"
              onClick={() => {
                if (pageNo < totalPages) setPageNo(pageNo + 1);
              }}
            >
              <BiRightArrow />
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
