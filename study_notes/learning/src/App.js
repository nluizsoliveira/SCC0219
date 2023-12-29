let products = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

function App() {
  return (
    <div className="App">
      <FilterableProductsTable products={products}/>    
    </div>
  );
}

function FilterableProductsTable({products}){
  return (
    <div className="FilterableProductsTable"
      style = {{padding: '5px', margin: '5px', border: '3px solid grey', width: '500px'}}
    >
      <h1>Filterable Products Table</h1>
      <SearchBar/>
      <ProductTable products={products} />
    </div>
  )
}

function SearchBar(){
  return (
    <div className="SearchBar"
      style = {{padding: '5px', margin: '5px', border: '3px solid blue'}}
    >
      <h2>Search Bar</h2>
      <input placeholder="Search..."></input>

      <input type="checkbox"></input>
      <span>Only show products in stock</span>
    </div>
  )
}

function ProductTable({products}){
  const rows = []
  let lastCategory = null 

  products.forEach((product) =>{
    if (product.category !== lastCategory){
      rows.push(
        <ProductCategoryRow category={product.category} key={product.category}/>
      )
    }
    
    rows.push(
      <ProductRow 
        product = {product}
        key = {product.name}
      />

    )
    lastCategory = product.category
  })

  return (
    <div className="ProductTable"
    style = {{padding: '5px', margin: '5px', border: '3px solid lavender'}}>
      <h2>Product Table</h2>
      <div
      style = {{display: 'flex', width: '100%', justifyContent: 'space-around'}}
      >
        <span>Name</span>
        <span>Price</span>
      </div>
      {rows}
    </div>
  )
}

function ProductCategoryRow({category}){
  return (
    <div className="ProductCategoryRow"
    style = {{ margin: '5px', padding: '5px', display: 'flex', justifyContent: 'center', border: '3px solid green'}}
    >
        {category}
    </div>
  )
}

function ProductRow({product}){
  return (
    <div className="ProductRow"
      style = {{margin: '5px', padding: '5px', display: 'flex', justifyContent: 'space-around', border: '3px solid yellow'}}
    >
      <span
      style = {product.stocked? {}:{color: 'red'}}
      >{product.name}</span>
      <span>{product.price}</span>
    </div>
  )
}
export default App;