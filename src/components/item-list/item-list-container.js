import React from 'react';
import ItemList from './item-list';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';
import Pagination from '../pagination/pagination';

class ItemListContainer extends React.Component {


    componentDidMount() {
      const { pageRouterSelected, listCount } = this.props;
      this.props.fetchItems(pageRouterSelected * listCount, listCount);
    }
  
    componentDidUpdate(prevProps) {
      if (this.props.pageRouterSelected !== prevProps.pageRouterSelected) {
        const { pageRouterSelected, listCount } = this.props;
        this.props.fetchItems(pageRouterSelected * listCount, listCount);
      }
    }
  
  
    handlePageClick = (page) => {
      console.log(page.currentPage)
    }
  
    render() {
      const { items, loading, error, listCount, itemsCount, pageRouterSelected } = this.props;
      console.log(this.props)
      if (loading) {
        return <Spinner />
      }
  
      if (error) {
        return <ErrorIndicator />
      }
  
      return (
        <React.Fragment>
          <ItemList
            listCount={listCount}
            pageRouterSelected={pageRouterSelected}
            items={items} />
          <Pagination totalRecords={itemsCount} pageLimit={listCount} pageNeighbours={1} onPageChanged={this.handlePageClick} currentPage={pageRouterSelected + 1} />
        </React.Fragment>
      );
    }
  }
  
  export default ItemListContainer;