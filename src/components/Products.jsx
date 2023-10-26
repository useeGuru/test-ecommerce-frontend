import React, { useEffect, useState, useMemo } from 'react';

import { publicRequest } from '../request-methods';
import Pagination from '../components/Pagination/Pagination';

import Product from './Product';
import './index.scss';

const Products = ({ category, pagin }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [PageSize, setPageSize] = useState(10);

  const getProducts = async () => {
    try {
      const url = category ? `/products?category=${category}` : '/products'; //For the Home Page
      console.log('category_url', url);
      const response = await publicRequest.get(url);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const tableData = products;
  const paginationPage = pagin;

  const currentTableData = useMemo(() => {
    if (
      PageSize > tableData.length - (currentPage - 1) * PageSize &&
      currentPage !== Math.ceil(tableData.length / PageSize)
    ) {
      if (tableData.length < PageSize) {
        const firstPageIndex = 0;
        const lastPageIndex = tableData.length;
        return tableData.slice(firstPageIndex, lastPageIndex);
      } else {
        const firstPageIndex = tableData.length - PageSize;
        const lastPageIndex = tableData.length;
        return tableData.slice(firstPageIndex, lastPageIndex);
      }
    } else {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return tableData.slice(firstPageIndex, lastPageIndex);
    }
  }, [currentPage, PageSize, tableData]);

  console.log('currentTableData', currentTableData)
  const onChangeHandle = (e) => {
    setPageSize(parseInt(e));
  };


  return (
    <>
      <section
        className='pb-8 mx-8 grid gap-2 md:grid-cols-2 lg:grid-cols-4'
        id='products'
      >
        {paginationPage ? currentTableData.map((item) => (
          <Product key={item._id} image={item.image} id={item._id} />
        )) : tableData.map((item) => (
          <Product key={item._id} image={item.image} id={item._id} />
        ))}
      </section>
      <div className='p-[30px]'>
        {paginationPage ? (
          <div className="position place-content-center flex w-full">
            <div className="w-1/8"></div>
            <div className="w-1/8 pr-[10px]">
              <select className="select" value={PageSize} onChange={(e) => onChangeHandle(e.target.value)}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </div>
            <Pagination
              className="pagination-bar w-3/4"
              currentPage={currentPage}
              totalCount={tableData.length}
              siblingCount={1}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Products;
