class PaginationHelper {
  constructor (collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  itemCount () {
    return this.collection.length;
  }

  pageCount () {
    return Math.round(this.collection.length / this.itemsPerPage);
  }

  pageItemCount (pageIndex) {
    if (pageIndex >= this.pageCount() || pageIndex < 0) return -1;

    pageIndex++;
    return (pageIndex * this.itemsPerPage) % this.itemCount();
  }

  pageIndex (itemIndex) {
    if (itemIndex >= this.pageCount() || itemIndex < 0) return -1;
    const index = itemIndex % this.itemCount();
    return index % this.pageCount();
  }
}

const helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
console.log(helper.pageIndex(20)); // should == 4); // should == 2
