import ProductListItem from '@components/ProductListItem';
import { HorizontalFlatList } from '@idiosync/horizontal-flatlist';
import products from 'assets/data/products';



export default function MenuScreen() {
   return (
    <HorizontalFlatList
       data={products}
       numRows={2}
       keyExtractor={(item, row, col) => `${item.id}-${row}-${col}`}
       renderItem={({ item }) => <ProductListItem product={item} />}
       contentContainerStyle={{ gap: 10, padding: 10 }}
       columnStyle={{ gap: 10 }}/>
  );
}

